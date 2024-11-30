import ContactUsSection from "@/components/ContactUsSection/ContactUsSection";
import FlipBookViewer from "@/components/FlipBookViewer/FlipBookViewer";
import FloatingContacts from "@/components/FloatingContacts/FloatingContacts";
import FooterSection from "@/components/FooterSection/FooterSection";
import PreloadScreen from "@/components/PreloadScreen/PreloadScreen";
import TopBar from "@/components/TopBar/TopBar";
import AnimatedText from "@/components/UI/AnimatedText/AnimatedText";
import CustomGrid from "@/components/UI/CustomGrid/CustomGrid";
import ImageAccordion from "@/components/UI/ImageAccordion/ImageAccordion";
import WebsiteShowcaseSection from "@/components/WebsiteShowcaseSection/WebsiteShowcaseSection";
import { ServiceItemType } from "@/utils/customTypes";
import { servicesList } from "@/utils/websiteData";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/ServiceItem.module.css";

const ServiceItem = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const receivedServiceItem: ServiceItemType =
    servicesList.find(
      (item) => item.id === router.query["service-item-id"]?.toString()
    ) ?? servicesList[0];

  //Scrolling to top on screen start
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Clean up timeout and animation when component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return <PreloadScreen showText />;
  }

  const getPortfolioSection = () => {
    if (
      router.asPath.includes("logo-design") ||
      router.asPath.includes("production-design") ||
      router.asPath.includes("social-media")
    ) {
      return (
        <CustomGrid
          gridType={
            receivedServiceItem.id === "production-design" ? "video" : "image"
          }
          itemGroupPath={receivedServiceItem.path}
          gridLength={receivedServiceItem.length ?? 0}
          style={
            router.asPath.includes("brochure-design")
              ? { marginTop: "5rem" }
              : {}
          }
          instaLinks={
            router.asPath.includes("social-media")
              ? receivedServiceItem.urlGroup
              : undefined
          }
          staticGrid
        />
      );
    } else if (router.asPath.includes("brochure-design")) {
      return <FlipBookViewer />;
    } else if (router.asPath.includes("printable-media")) {
      return (
        <div className={styles["printable-accordion"]}>
          {receivedServiceItem?.itemGroup?.map((brochureGroupItem, index) => {
            const imagePath = `${receivedServiceItem.path}/${brochureGroupItem.groupTitle}/${brochureGroupItem.groupTitle}-printable-media`;

            return (
              <ImageAccordion
                serviceGroupItem={brochureGroupItem}
                imagePath={imagePath}
                key={index}
              />
            );
          })}
        </div>
      );
    } else if (router.asPath.includes("website-development")) {
      return <WebsiteShowcaseSection serviceItem={receivedServiceItem} />;
    }
  };

  return (
    <>
      <TopBar />
      <FloatingContacts />
      <main className={styles["main-service-item"]}>
        <div className={styles["service-item-banner-container"]}>
          <AnimatedText
            text={receivedServiceItem.title}
            el="h1"
            textColor="white"
          />
          <Image
            className={styles["service-item-banner-image"]}
            src={receivedServiceItem.imgLink}
            fill
            alt={receivedServiceItem.title}
          />
        </div>

        <div className={styles["main-service-item-description-container"]}>
          <Image
            className={styles["main-service-item-quote"]}
            src="/assets/icons/quote.svg"
            alt="Quote"
            width={125}
            height={125}
          />
          <AnimatedText
            text={receivedServiceItem.description}
            el="h3"
            blockAnimation
            className={styles["main-service-item-description"]}
          />
        </div>

        {getPortfolioSection()}

        <ContactUsSection className={styles["main-service-contact-us"]} />
      </main>
      <FooterSection />
    </>
  );
};

export default ServiceItem;
