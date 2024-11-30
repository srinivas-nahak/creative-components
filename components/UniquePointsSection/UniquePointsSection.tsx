import { useEffect, useRef } from "react";
import styles from "./UniquePointsSection.module.css";
//import lottie, { AnimationItem } from "lottie-web";
import iterationAnimation from "../../public/assets/animation/infinity-animation.json";
import customerSupportAnimation from "../../public/assets/animation/customer-support-animation.json";
import graphicDesignAnimation from "../../public/assets/animation/graphic-design-animation.json";

const UniquePointsSection = () => {
  const containerOneRef = useRef<HTMLDivElement | null>(null);
  const containerTwoRef = useRef<HTMLDivElement | null>(null);
  const containerThreeRef = useRef<HTMLDivElement | null>(null);

  //const animationRefs = useRef<AnimationItem[]>([]);

  // useEffect(() => {
  //   if (animationRefs.current) {
  //     animationRefs.current[0] = lottie.loadAnimation({
  //       container: containerOneRef.current!,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: customerSupportAnimation,
  //     });
  //     animationRefs.current[1] = lottie.loadAnimation({
  //       container: containerTwoRef.current!,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: graphicDesignAnimation,
  //     });
  //     animationRefs.current[2] = lottie.loadAnimation({
  //       container: containerThreeRef.current!,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: iterationAnimation,
  //     });
  //   }

  //   // Clean up animation when component unmounts
  //   return () => {
  //     if (animationRefs.current) {
  //       animationRefs.current.forEach((animation) => animation.destroy());
  //     }
  //   };
  // }, []);

  return (
    <section
      aria-label="unique-points-section"
      className={styles["unique-points-section"]}
    >
      <div className={styles["unique-points-item"]}>
        <div className={styles["unique-points-circle"]}>
          <div
            ref={containerOneRef}
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        </div>
        <h2>Get complete personal assistance with your projects.</h2>
      </div>
      <div className={styles["unique-points-item"]}>
        <div className={styles["unique-points-circle"]}>
          <div
            ref={containerTwoRef}
            style={{
              width: "130%",
              height: "130%",
              cursor: "pointer",
            }}
          />
        </div>
        <h2>Receive your design within two business days on average.</h2>
      </div>
      <div className={styles["unique-points-item"]}>
        <div className={styles["unique-points-circle"]}>
          <div
            ref={containerThreeRef}
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          />
        </div>
        <h2>We&apos;ll revise the designs until you&apos;re 100% satisfied.</h2>
      </div>
    </section>
  );
};

export default UniquePointsSection;
