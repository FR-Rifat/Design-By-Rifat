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

  // 1. Initial Page Load Handler: Scroll to top / hash while covered & open shutter
  useEffect(() => {
    scrollToPosition();

    const timer = setTimeout(() => {
      setStatus("opening");
      const idleTimer = setTimeout(() => {
        setStatus("idle");
      }, 350);
      return () => clearTimeout(idleTimer);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // 2. Route Change Detection: Scroll to hash/top while covered before opening
  useEffect(() => {
    if (status === "closing" || status === "covered") {
      scrollToPosition(pendingUrlRef.current);

      const impactTimer = setTimeout(() => {
        scrollToPosition(pendingUrlRef.current);
        setStatus("opening");
        const openTimer = setTimeout(() => {
          setStatus("idle");
        }, 350);
        return () => clearTimeout(openTimer);
      }, 250);

      return () => clearTimeout(impactTimer);
    }
  }, [pathname, searchParams]);

  // 3. Browser Back/Forward (popstate) Handler
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

  // 4. Global Link Click Interceptor for Split Shutter Closing Animation
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, target="_blank"
      if (
        target.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      try {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(href, window.location.href);

        // Ignore same page anchor navigation (e.g. /#works or #works when already on /)
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
          // Step 2: Screen 100% covered - Scroll to target section & trigger route push
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

          {/* Horizontal Center Laser Glow Line */}
          <AnimatePresence>
            {(status === "closing" || status === "covered") && (
              <motion.div
                key="center-line"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 left-0 right-0 h-[1px] -translate-y-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.4)] z-[100000] pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* MAIN CENTER: Orbit, "01", Name, Divider, Subtitle */}
          <AnimatePresence>
            {(status === "closing" || status === "covered") && (
              <motion.div
                key="center-branding"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.2, ease: "easeIn" },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 z-[100001] flex flex-col items-center justify-center pointer-events-none px-4"
              >
                {/* Soft Radial Ambient Glow */}
                <div className="absolute h-96 w-96 rounded-full bg-linear-to-tr from-white/10 via-white/5 to-transparent blur-3xl" />

                {/* Central Composition Wrapper */}
                <div className="relative flex flex-col items-center text-center">
                  {/* 1. Orbit Ring & "01" Number */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="relative mb-5 flex items-center justify-center"
                  >
                    {/* Outer Rotating Subtle Dotted Orbit */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute size-20 rounded-full border border-dashed border-white/20"
                    />

                    {/* Inner Glass Circle */}
                    <div className="flex size-16 items-center justify-center rounded-full border border-white/25 bg-[#070708]/80 shadow-[0_0_25px_rgba(255,255,255,0.06)] backdrop-blur-md">
                      <span className="font-mono text-sm font-medium tracking-wider text-white/90">
                        01
                      </span>
                    </div>
                  </motion.div>

                  {/* 2. Name "FR RIFAT" */}
                  <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.1 }}
                    className="font-heading text-xl sm:text-2xl font-bold tracking-[0.35em] uppercase text-white"
                  >
                    FR RIFAT
                  </motion.h2>

                  {/* 3. Thin 1px Divider Line */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="my-3 h-[1px] w-12 bg-white/25"
                  />

                  {/* 4. Subtitle "UX / UI DESIGNER" */}
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.4em] uppercase text-white/50"
                  >
                    UX / UI DESIGNER
                  </motion.span>
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
