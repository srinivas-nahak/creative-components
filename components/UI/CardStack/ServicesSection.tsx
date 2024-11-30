"use-client";
import useCursorVariant from "@/hooks/useCursorVariant";
import { servicesList } from "@/utils/websiteData";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./ServicesSection.module.css";
import AnimatedText from "../AnimatedText/AnimatedText";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesSection = () => {
  const [mouseEnterHandler, mouseLeaveHandler] = useCursorVariant();
  const serviceSectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: serviceSectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="services-section"
      aria-label="services-section"
      className={styles["services-section"]}
      ref={serviceSectionRef}
    >
      <AnimatedText
        el={"h1"}
        text="Let's see what we can do for you!"
        onMouseEnter={() => mouseEnterHandler("wide")}
        onMouseLeave={() => mouseLeaveHandler("default")}
      />
      {/* <h1
        onMouseEnter={() => mouseEnterHandler("wide")}
        onMouseLeave={() => mouseLeaveHandler("default")}
      >
        Let&apos;s see what we can do for you!
      </h1> */}

      <h3
        onMouseEnter={() => mouseEnterHandler("cta")}
        onMouseLeave={() => mouseLeaveHandler("default")}
      >
        We understand the blood, sweat, and tears that go into building a brand,
        and we share your excitement about seeing it reach its full potential.
      </h3>

      <div className={styles["services-card-container"]}>
        {servicesList.map((cardItem, index) => {
          const targetScale = 1 - (servicesList.length - index) * 0.05;

          return (
            <ServicesCard
              cardItem={cardItem}
              index={index}
              range={[index * 0.16, 1]}
              parentScrollProgress={scrollYProgress}
              targetScale={targetScale}
              key={index}
            />
          );
        })}
      </div>
      {/* <div className={styles["overlapping-square-container"]}>
        <div className={styles["overlapping-square"]}></div>
      </div> */}
    </section>
  );
};

export default ServicesSection;
