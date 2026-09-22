import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase";

const ANALYTICS_COLLECTION = "WebsiteAnalytics";

// --------------------------------
// DATE HELPERS
// --------------------------------

function getDate(timestamp) {
  if (!timestamp) return null;

  if (timestamp.toDate) {
    return timestamp.toDate();
  }

  return new Date(timestamp);
}

function getDayKey(date) {
  return date.toISOString().slice(0, 10);
}

function getMonthKey(date) {
  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}`;
}

function formatDay(date) {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

function formatMonth(date) {
  return date.toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
}

// --------------------------------
// MAIN ANALYTICS FUNCTION
// --------------------------------

export async function getWebsiteAnalytics() {
  // --------------------------------
  // GET LAST 365 DAYS OF ANALYTICS
  // --------------------------------

  const startDate = new Date();

  startDate.setDate(
    startDate.getDate() - 365
  );

  const analyticsQuery = query(
    collection(db, ANALYTICS_COLLECTION),
    where("timestamp", ">=", startDate)
  );

  const snapshot = await getDocs(
    analyticsQuery
  );

  const events = snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter(
      (event) => event.timestamp
    );

  // --------------------------------
  // CONTACT MESSAGE COUNT
  // --------------------------------

  const contactMessageSnapshot =
    await getDocs(
      collection(
        db,
        "contactMessage"
      )
    );

  const contactMessageCount =
    contactMessageSnapshot.size;

  // --------------------------------
  // PAGE VIEWS
  // --------------------------------
  //
  // Only public pages are considered.
  // /admin and all /admin/* routes
  // are completely excluded.
  //
  // --------------------------------

  const pageViews = events.filter(
    (event) => {
      if (
        event.event !== "page_view"
      ) {
        return false;
      }

      const page =
        event.page || "/";

      // Exclude admin pages
      if (
        page === "/admin" ||
        page.startsWith("/admin/")
      ) {
        return false;
      }

      return true;
    }
  );

  // --------------------------------
  // CONTACT FORM SUBMISSIONS
  // --------------------------------

  const contactSubmissions =
    events.filter(
      (event) =>
        event.event ===
        "contact_form_submit"
    );

  // --------------------------------
  // HOMEPAGE VISITS
  // --------------------------------
  //
  // Visitor count is based ONLY on "/".
  //
  // Visiting:
  // /about
  // /contact
  // /careers
  //
  // does not create another visitor.
  //
  // --------------------------------

  const homePageViews =
    pageViews.filter(
      (event) =>
        (event.page || "/") === "/"
    );

  // --------------------------------
  // 1. DAILY VISITORS
  // --------------------------------
  //
  // Last 30 days
  // Unique sessions on "/"
  //
  // --------------------------------

  const dailySessions = {};

  homePageViews.forEach(
    (event) => {
      const date = getDate(
        event.timestamp
      );

      if (!date) return;

      const day =
        getDayKey(date);

      const session =
        event.sessionId ||
        event.id;

      if (!dailySessions[day]) {
        dailySessions[day] =
          new Set();
      }

      dailySessions[day].add(
        session
      );
    }
  );

  const dailyVisitors = [];

  for (
    let i = 29;
    i >= 0;
    i--
  ) {
    const date = new Date();

    date.setDate(
      date.getDate() - i
    );

    const key =
      getDayKey(date);

    dailyVisitors.push({
      day: formatDay(date),
      visitors:
        dailySessions[key]?.size ||
        0,
    });
  }

  // --------------------------------
  // 2. WEEKLY VISITORS
  // --------------------------------
  //
  // Last 7 days
  //
  // --------------------------------

  const weeklyVisitors =
    dailyVisitors.slice(-7);

  // --------------------------------
  // 3. MONTHLY VISITORS
  // --------------------------------

  const monthlySessions = {};

  homePageViews.forEach(
    (event) => {
      const date = getDate(
        event.timestamp
      );

      if (!date) return;

      const month =
        getMonthKey(date);

      const session =
        event.sessionId ||
        event.id;

      if (!monthlySessions[month]) {
        monthlySessions[month] =
          new Set();
      }

      monthlySessions[month].add(
        session
      );
    }
  );

  const monthlyVisitors = [];

  for (
    let i = 11;
    i >= 0;
    i--
  ) {
    const date = new Date();

    date.setDate(1);

    date.setMonth(
      date.getMonth() - i
    );

    const key =
      getMonthKey(date);

    monthlyVisitors.push({
      month:
        formatMonth(date),

      visitors:
        monthlySessions[key]?.size ||
        0,
    });
  }

  // --------------------------------
  // 4. TRAFFIC SOURCES
  // --------------------------------
  //
  // Public pages only
  //
  // --------------------------------

  const sourceSessions = {};

  pageViews.forEach(
    (event) => {
      const source =
        event.source ||
        "direct";

      const session =
        event.sessionId ||
        event.id;

      if (!sourceSessions[source]) {
        sourceSessions[source] =
          new Set();
      }

      sourceSessions[source].add(
        session
      );
    }
  );

  const trafficSources =
    Object.entries(
      sourceSessions
    )
      .map(
        ([name, sessions]) => ({
          name:
            name
              .charAt(0)
              .toUpperCase() +
            name.slice(1),

          value:
            sessions.size,
        })
      )
      .sort(
        (a, b) =>
          b.value - a.value
      );

  // --------------------------------
  // 5. DEVICE TYPES
  // --------------------------------

  const deviceSessions = {};

  pageViews.forEach(
    (event) => {
      const device =
        event.device ||
        "unknown";

      const session =
        event.sessionId ||
        event.id;

      if (!deviceSessions[device]) {
        deviceSessions[device] =
          new Set();
      }

      deviceSessions[device].add(
        session
      );
    }
  );

  const deviceTypes =
    Object.entries(
      deviceSessions
    )
      .map(
        ([name, sessions]) => ({
          name:
            name
              .charAt(0)
              .toUpperCase() +
            name.slice(1),

          value:
            sessions.size,
        })
      )
      .sort(
        (a, b) =>
          b.value - a.value
      );

  // --------------------------------
  // 6. MOST VIEWED PAGES
  // --------------------------------
  //
  // All PUBLIC pages are included.
  //
  // /admin pages were already removed.
  //
  // --------------------------------

  const pageCounts = {};

  pageViews.forEach(
    (event) => {
      const page =
        event.page || "/";

      pageCounts[page] =
        (pageCounts[page] || 0) +
        1;
    }
  );

  const mostViewedPages =
    Object.entries(
      pageCounts
    )
      .map(
        ([page, views]) => ({
          page,
          views,
        })
      )
      .sort(
        (a, b) =>
          b.views - a.views
      )
      .slice(0, 10);

  // --------------------------------
  // 7. TOTAL UNIQUE VISITORS
  // --------------------------------
  //
  // ONLY "/" is used.
  //
  // --------------------------------

  const allVisitorSessions =
    new Set();

  homePageViews.forEach(
    (event) => {
      allVisitorSessions.add(
        event.sessionId ||
          event.id
      );
    }
  );

  const totalVisitors =
    allVisitorSessions.size;

  // --------------------------------
  // 8. CONTACT CONVERSION RATE
  // --------------------------------

  const contactSessions =
    new Set();

  contactSubmissions.forEach(
    (event) => {
      contactSessions.add(
        event.sessionId ||
          event.id
      );
    }
  );

const contactConversionRate =
  `${contactMessageCount}%`;

  // --------------------------------
  // RETURN ALL DATA
  // --------------------------------

  return {
    dailyVisitors,

    weeklyVisitors,

    monthlyVisitors,

    trafficSources,

    deviceTypes,

    mostViewedPages,

    contactMessageCount,

    summary: {
      totalVisitors,
      contactConversionRate,
    },
  };
}