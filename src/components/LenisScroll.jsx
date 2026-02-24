import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      anchors: {
        offset: -100,
      },
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        lenis.scrollTo(hash);
      }, 300);
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
