import { ServiceItemType, VideoItemType } from "./customTypes";

const servicesList: ServiceItemType[] = [
  {
    id: "logo-design",
    title: "Logo Design",
    path: "/assets/services-section/logo/logo-design",
    length: 7,
    description:
      "Your logo is your face to the world. We design logos that's unique, memorable, and captures the essence of your brand. Think of it as your superhero symbol, ready to conquer the market.",
    imgLink: "https://images.unsplash.com/photo-1709273954172-22f5c735e6fe",
    backgroundColor: "#57BDA8",
  },
  {
    id: "brochure-design",
    title: "Brochure Design",
    path: "/assets/services-section/logo/logo-design",
    length: 8,
    description:
      "Forget boring pamphlets. We'll craft stunning, impactful brochures that tell your story in a way that resonates with your audience. Like a love letter to your brand, designed to win hearts and minds.",
    imgLink: "https://images.unsplash.com/photo-1707343848723-bd87dea7b118",
    backgroundColor: "#5A8CB0",
  },
  {
    id: "social-media",
    title: "Social Media",
    path: "/assets/services-section/social/social-media",
    urlGroup: [
      "https://www.instagram.com/barsanahotelkolkata/",
      "https://www.instagram.com/bajlacollection/",
      "https://www.instagram.com/primeluxeslg",
      "https://www.instagram.com/berliadevelopers",
      "https://www.instagram.com/azure_glitz",
    ],
    length: 5,
    description:
      "At our core, we specialize in social media management. Through meticulous strategy, we tailor content to your brand's voice, fostering connections with your audience & elevating your brand.",
    imgLink: "https://images.unsplash.com/photo-1704138160435-bc0848d02813",
    backgroundColor: "#D47E65",
  },
  {
    id: "printable-media",
    title: "Printable Media",
    path: "/assets/services-section/printable",
    itemGroup: [
      { groupTitle: "hoarding", groupLength: 6, backgroundColor: "#b4d6f5" },
      { groupTitle: "invites", groupLength: 6, backgroundColor: "#eeece9" },
      { groupTitle: "menu", groupLength: 3, backgroundColor: "#f3d7b8" },
      {
        groupTitle: "newspaper-ad",
        groupLength: 3,
        backgroundColor: "#ccb39d",
      },
      { groupTitle: "standee", groupLength: 3, backgroundColor: "#dae9f8" },
      {
        groupTitle: "visiting-card",
        groupLength: 3,
        backgroundColor: "#ebebeb",
      },
    ],
    description:
      "Dive into the realm of printable media. With precision and creativity, we craft tangible assets that capture attention, reflect your brand essence, and leave a lasting impression.",
    imgLink: "https://images.unsplash.com/photo-1707343848723-bd87dea7b118",
    backgroundColor: "#AC8AD9",
  },
  {
    id: "website-development",
    title: "Website Development",
    path: "/assets/services-section/web/website",
    length: 3,
    urlGroup: [
      "https://coloursuraksha.com/",
      "https://mkgroupslg.com/",
      "https://panchnaigroup.com/",
    ],
    description:
      "Your website is your online home. We'll create a user-friendly, visually stunning site that converts visitors into fans, showcasing your awesomeness.",
    imgLink: "https://images.unsplash.com/photo-1709273954172-22f5c735e6fe",
    backgroundColor: "#C44F6E",
  },
  {
    id: "production-design",
    title: "Production Design",
    path: "/assets/services-section/production/production-design",
    length: 6,
    description:
      "We craft captivating narratives and stunning visuals to ensure your brand shines. Whether showcasing luxury real estate or tantalizing cuisine, we guarantee an unforgettable presence.",
    imgLink: "https://images.unsplash.com/photo-1709287061508-f2de3d8d8418",
    backgroundColor: "#c2b582",
  },

  // {
  //   title: "Voice-over Ads",
  //   description:
  //     "We speak for your brand with captivating voice-over ads that resonate with your audience, delivering your message with clarity, emotion, and authenticity.",
  //   imgLink: "https://images.unsplash.com/photo-1709287061441-d9cc9c0d6b28",
  //   backgroundColor: "#B5EBE0",
  // },
];

const dummyVideoCardList: VideoItemType[] = [
  {
    videoTitle: "Item1",
    videoLink: "https://www.youtube.com/embed/VjOZXCQFDTE",
  },
  {
    videoTitle: "Item2",
    videoLink: "https://www.youtube.com/embed/wZUfXTGsg6o",
  },
  {
    videoTitle: "Item3",
    videoLink: "https://www.youtube.com/embed/4Qm1q4EG4lQ",
  },
  {
    videoTitle: "Item4",
    videoLink: "https://www.youtube.com/embed/qZ1uajaazzw",
  },
  {
    videoTitle: "Item5",
    videoLink: "https://www.youtube.com/embed/Vt63u9tihtw",
  },
];

export { servicesList, dummyVideoCardList };

// {
//   title: "Logo Design",
//   description:
//     "Your logo is your face to the world. We design logos that's unique, memorable, and captures the essence of your brand. Think of it as your superhero symbol, ready to conquer the market.",
//   imgLink: "https://images.unsplash.com/photo-1709273954172-22f5c735e6fe",
//   backgroundColor: "#57BDA8",
//   hasCta: true,
// },
// {
//   title: "Brochure Design",
//   description:
//     "Forget boring pamphlets. We'll craft stunning, impactful brochures that tell your story in a way that resonates with your audience. Like a love letter to your brand, designed to win hearts and minds.",
//   imgLink: "https://images.unsplash.com/photo-1707343848723-bd87dea7b118",
//   backgroundColor: "#5A8CB0",
// },
// {
//   title: "Social Media",
//   description:
//     "At our core, we specialize in social media management. Through meticulous strategy, we tailor content to your brand's voice, fostering connections with your audience and elevating your brand presence.",
//   imgLink: "https://images.unsplash.com/photo-1704138160435-bc0848d02813",
//   backgroundColor: "#D47E65",
// },
// {
//   title: "Event Branding",
//   description:
//     "Your event should be unforgettable. We'll create a brand identity that reflects your vision, ignites emotions, and leaves a lasting impression, transporting your guests to a world uniquely yours.",
//   imgLink: "https://images.unsplash.com/photo-1707343848723-bd87dea7b118",
//   backgroundColor: "#AC8AD9",
// },
// {
//   title: "Website Development",
//   description:
//     "Your website is your online home. We'll create a user-friendly, visually stunning site that converts visitors into fans, showcasing your awesomeness.",
//   imgLink: "https://images.unsplash.com/photo-1709273954172-22f5c735e6fe",
//   backgroundColor: "#C44F6E",
// },
// {
//   title: "Production Design",
//   description:
//     "We craft captivating narratives and stunning visuals to ensure your brand shines. Whether showcasing luxury real estate or tantalizing cuisine, we guarantee an unforgettable presence.",
//   imgLink: "https://images.unsplash.com/photo-1709287061508-f2de3d8d8418",
//   backgroundColor: "#D4C794",
// },
