import localFont from "next/font/local";

const ProductSans = localFont({
  src: [
    {
      path: "../public/fonts/product-sans-thin.ttf",
      weight: "100",
    },
    {
      path: "../public/fonts/product-sans-regular.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/product-sans-italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/product-sans-medium.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/product-sans-bold.ttf",
      weight: "bold",
    },
    {
      path: "../public/fonts/product-sans-bold-italic.ttf",
      weight: "bold",
      style: "italic",
    },
  ],

  variable: "--product-sans",
});

export { ProductSans };
