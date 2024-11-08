"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { logEvent } from "firebase/analytics";
import { useFirebase } from "@/hooks/use-firebase";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const { analytics } = useFirebase();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (analytics) {
      console.log("Logging page view", pathname, searchParams.toString());
      logEvent(analytics, "page_view", {
        page_path: pathname,
        page_search: searchParams.toString(),
        page_location: window.location.href,
      });
    }
  }, [analytics, pathname, searchParams]);

  return <>{children}</>;
}
