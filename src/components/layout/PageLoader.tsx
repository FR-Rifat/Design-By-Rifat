"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type TransitionStatus = "idle" | "closing" | "covered" | "opening";

function PageLoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Start in "covered" state for initial page load
  const [status, setStatus] = useState<TransitionStatus>("covered");
  const [progress, setProgress] = useState(0);
  const pendingUrlRef = useRef<string>("");
  const closingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToPosition = (pathWithHash?: string) => {
    if (typeof window === "undefined") return;

    const targetHash =
      pathWithHash && pathWithHash.includes("#")
        ? pathWithHash.substring(pathWithHash.indexOf("#"))
        : window.location.hash;

    if (targetHash && targetHash !== "#") {
      const targetId = targetHash.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        const y = elem.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: y, behavior: "instant" });
        document.documentElement.scrollTop = y;
        document.body.scrollTop = y;
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Initial Scroll Position on mount
  useEffect(() => {
    scrollToPosition();
  }, []);

  // Smooth 0% to 100% Progress Count-up when covered
  useEffect(() => {
    if (status === "covered") {
      setProgress(0);
      const startTime = performance.now();
      const duration = 450; // smooth 450ms loading progress

      let animationFrameId: number;

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const pct = Math.min(100, Math.round((elapsed / duration) * 100));
        setProgress(pct);

        if (pct < 100) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          // Once 100% is reached, wait briefly then trigger top/bottom reveal transition
          setTimeout(() => {
            setStatus("opening");
            setTimeout(() => {
              setStatus("idle");
            }, 350);
          }, 80);
        }
      };

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [status]);

  // Route Change Detection: Scroll to hash/top while covered
  useEffect(() => {
    if (status === "closing" || status === "covered") {
      scrollToPosition(pendingUrlRef.current);
    }
  }, [pathname, searchParams, status]);

  // Browser Back/Forward (popstate) Handler
  useEffect(() => {
    const handlePopState = () => {
      setStatus("closing");
      setTimeout(() => {
        setStatus("covered");
        scrollToPosition();
      }, 350);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Global Link Click Interceptor for Split Shutter Closing Animation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, target="_blank", hash links
      if (
        target.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        href === "#"
      ) {
        return;
      }

      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(href, window.location.href);

        // Ignore same page anchor navigation
        if (
          targetUrl.pathname === currentUrl.pathname &&
          targetUrl.search === currentUrl.search &&
          targetUrl.hash
        ) {
          return;
        }

        // Ignore if clicking exact same URL
        if (targetUrl.href === currentUrl.href) {
          return;
        }

        // Intercept navigation to animate shutters first
        e.preventDefault();
        e.stopPropagation();

        const fullTargetPath =
          targetUrl.pathname + targetUrl.search + targetUrl.hash;
        pendingUrlRef.current = fullTargetPath;

        // Step 1: Slide shutters closed
        setStatus("closing");

        if (closingTimerRef.current) clearTimeout(closingTimerRef.current);
        closingTimerRef.current = setTimeout(() => {
          // Step 2: Screen covered - trigger route push
          setStatus("covered");
          scrollToPosition(fullTargetPath);
          router.push(fullTargetPath);
        }, 350);
      } catch {
        // Ignore URL parsing errors
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, {
        capture: true,
      });
      if (closingTimerRef.current) clearTimeout(closingTimerRef.current);
    };
  }, [router]);

  const isVisible = status !== "idle";

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden bg-transparent">
          {/* Top Panel (0% to 50vh) */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{
              y: status === "closing" || status === "covered" ? "0%" : "-100%",
            }}
            transition={{
              duration: 0.38,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute top-0 left-0 right-0 h-[50vh] w-full bg-[#070708]"
          >
            {/* Soft Curving Bottom Edge Highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>

          {/* Bottom Panel (50vh to 100vh) */}
          <motion.div
            initial={{ y: "0%" }}
            animate={{
              y: status === "closing" || status === "covered" ? "0%" : "100%",
            }}
            transition={{
              duration: 0.38,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="absolute bottom-0 left-0 right-0 h-[50vh] w-full bg-[#070708]"
          >
            {/* Soft Curving Top Edge Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-white/20 to-transparent" />
          </motion.div>

          {/* MAIN CENTER: Soft-Glass Circle with 01–100 Number Counter */}
          <AnimatePresence>
            {(status === "closing" || status === "covered") && (
              <motion.div
                key="center-counter"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: 0.2, ease: "easeIn" },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-[100001] flex flex-col items-center justify-center pointer-events-none px-4"
              >
                {/* Soft Ambient Radial Glow */}
                <div className="absolute size-44 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                {/* Dark Soft-Glass Circle with 01–100 Counter */}
                <div className="relative flex size-20 items-center justify-center rounded-full border border-white/15 bg-[#070708]/80 shadow-[0_0_30px_rgba(255,255,255,0.08)] backdrop-blur-md">
                  <span className="font-mono text-base font-bold tabular-nums tracking-wider text-white">
                    {String(progress).padStart(2, "0")}%
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export function PageLoader() {
  return (
    <Suspense fallback={null}>
      <PageLoaderContent />
    </Suspense>
  );
}
