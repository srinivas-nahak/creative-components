"use-client";
import { useEffect, useRef, useState } from "react";
import styles from "./ZoomTextSection.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const ZoomTextSection: React.FC<{ className?: string }> = ({ className }) => {
  const zoomTextSectionRef = useRef<HTMLElement | null>(null);
  const [clipValue, setClipValue] = useState(0);
  const [boxSize, setBoxSize] = useState(0);

  const { scrollYProgress } = useScroll({
    target: zoomTextSectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-40%"]);
  const size = useTransform(scrollYProgress, [0, 1], [5, 20]);
  const opacity = useTransform(scrollYProgress, [0.2, 1], [0.3, 1]);
  const textClipPath = useTransform(scrollYProgress, [0.48, 1], [0, 100]);

  const handleScroll = () => {
    setClipValue(textClipPath.get());
    setBoxSize(size.get());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="zoom-text-section"
      aria-label="zoom-text-section"
      className={`${styles["zoom-text-section"]} ${className}`}
      ref={zoomTextSectionRef}
    >
      <div className={styles["zoom-text-text-container"]}>
        <motion.div
          style={{ width: `${boxSize}rem`, height: `${boxSize}rem`, opacity }}
          className={styles["zoom-text-square"]}
        />
        <motion.h1
          style={{
            x,
            clipPath: `polygon(0 0, ${clipValue}% 0, ${clipValue}% 140%, 0% 140%)`,
          }}
          className={styles["solid-text"]}
        >
          Want to be the next big thing in town?
        </motion.h1>
        <motion.h1
          style={{
            x,
            clipPath: `polygon(140% 0, ${clipValue}% 0, ${clipValue}% 140%, 140% 140%)`,
          }}
          className={styles["outlined-text"]}
        >
          Want to be the next big thing in town?
        </motion.h1>
      </div>
    </section>
  );
};

export default ZoomTextSection;
