import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./tracker";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [
    location.pathname,
    location.search,
  ]);

  return null;
}