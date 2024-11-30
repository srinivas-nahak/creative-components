import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ZoomImageSection.module.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
// import { getPlaiceholder } from "plaiceholder";

const ZoomImageSection: React.FC<{ scrollIntoView?: boolean }> = ({
  scrollIntoView,
}) => {
  const container = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "/assets/images/pic-1.jpg",
      scale: scale4,
    },
    {
      src: "/assets/images/pic-2.jpg",
      scale: scale5,
    },
    {
      src: "/assets/images/pic-3.jpg",
      scale: scale6,
    },
    {
      src: "/assets/images/pic-4.jpg",
      scale: scale5,
    },
    {
      src: "/assets/images/pic-1.jpg",
      scale: scale6,
    },
    {
      src: "/assets/images/pic-2.jpg",
      scale: scale8,
    },
    {
      src: "/assets/images/pic-3.jpg",
      scale: scale9,
    },
  ];

  useEffect(() => {
    if (scrollIntoView && container.current) {
      container.current.scrollIntoView();
    }
  }, [scrollIntoView]);

  return (
    <section
      id="zoom-image-section"
      aria-label="zoom-image-section"
      ref={container}
      className={styles.container}
    >
      <motion.h1
        className={styles["zoom-image-section-text"]}
        style={{ scale: textOpacity, opacity: textOpacity }}
      >
        Want to be the next big thing in city?
      </motion.h1>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          // const buffer = await fetch(src).then(async (res) =>
          //   Buffer.from(await res.arrayBuffer())
          // );
          // const { base64 } = await getPlaiceholder(buffer);

          return (
            <motion.div
              key={index}
              style={{ scale, opacity: imgOpacity }}
              className={styles.el}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={src}
                  fill
                  alt="image"
                  // placeholder="blur"
                  // blurDataURL={base64}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ZoomImageSection;
