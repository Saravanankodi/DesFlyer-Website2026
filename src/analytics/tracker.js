import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

const ANALYTICS_COLLECTION = "WebsiteAnalytics";

function getSessionId() {
  let sessionId = sessionStorage.getItem("analytics_session_id");

  if (!sessionId) {
    sessionId =
      crypto.randomUUID();

    sessionStorage.setItem(
      "analytics_session_id",
      sessionId
    );
  }

  return sessionId;
}

function getDeviceType() {
  const width = window.innerWidth;

  if (width < 768) {
    return "mobile";
  }

  if (width < 1024) {
    return "tablet";
  }

  return "desktop";
}

function getTrafficSource() {
  const referrer = document.referrer;

  if (!referrer) {
    return "direct";
  }

  try {
    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();

    if (hostname.includes("google")) {
      return "google";
    }

    if (hostname.includes("bing")) {
      return "bing";
    }

    if (hostname.includes("linkedin")) {
      return "linkedin";
    }

    if (hostname.includes("facebook")) {
      return "facebook";
    }

    if (hostname.includes("instagram")) {
      return "instagram";
    }

    if (hostname.includes("youtube")) {
      return "youtube";
    }

    return "referral";
  } catch {
    return "referral";
  }
}

export async function trackEvent(
  event,
  additionalData = {}
) {
  try {
    await addDoc(
      collection(db, ANALYTICS_COLLECTION),
      {
        event,

        page:
          window.location.pathname,

        pageTitle:
          document.title,

        device:
          getDeviceType(),

        source:
          getTrafficSource(),

        sessionId:
          getSessionId(),

        userAgent:
          navigator.userAgent,

        timestamp:
          serverTimestamp(),

        ...additionalData,
      }
    );
  } catch (error) {
    console.error(
      "Analytics tracking failed:",
      error
    );
  }
}

export function trackPageView() {
  return trackEvent("page_view");
}

export function trackContactFormSubmit() {
  return trackEvent(
    "contact_form_submit"
  );
}

export function trackResumeDownload() {
  return trackEvent(
    "resume_download"
  );
}

export function trackLinkedInClick() {
  return trackEvent(
    "linkedin_click"
  );
}