"use-client";
import ServicesSection from "@/components/UI/CardStack/ServicesSection";
import ZoomTextSection from "@/components/UI/ZoomTextSection/ZoomTextSection";
import ZoomImageSection from "@/components/ZoomImageSection/ZoomImageSection";
import useScreenSize from "@/hooks/useScreenSize";
import styles from "@/styles/Home.module.css";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isSmallScreen] = useScreenSize();
  const [goIntoView, setGoIntoView] = useState("");
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Smooth Scroll
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    const element = document.getElementById(
      router.asPath.substring(router.asPath.indexOf("#"), router.asPath.length)
    );
    if (element) {
      // Calculate the vertical offset of the element
      const offset = element.offsetTop;
      // Scroll to the element
      lenis.scrollTo(element);
    }

    // Clean up timeout and animation when component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main ref={containerRef} className={styles.main}>
      <ServicesSection />

      {!isSmallScreen && (
        <ZoomImageSection scrollIntoView={goIntoView === "zoom-image"} />
      )}
      <ZoomTextSection />
    </main>
  );
}
