import { ServiceItemType } from "@/utils/customTypes";
import styles from "./WebsiteShowcaseSection.module.css";
import WebsitePreviewCard from "../UI/WebsitePreviewCard/WebsitePreviewCard";

const WebsiteShowcaseSection: React.FC<{ serviceItem: ServiceItemType }> = ({
  serviceItem,
}) => {
  return (
    <section
      aria-label="website-showcase-section"
      className={styles["website-showcase-section"]}
    >
      {serviceItem.urlGroup?.map((webUrl, index) => (
        <WebsitePreviewCard
          url={webUrl}
          imgAddress={`${serviceItem.path}-${index + 1}.png`}
          key={index}
        />
      ))}
    </section>
  );
};

export default WebsiteShowcaseSection;
