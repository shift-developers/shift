import { DefaultSeoProps } from "next-seo";

const defaultSEOConfig: DefaultSeoProps = {
  title: "SHiFT – A New Era of Mental Health",
  defaultTitle: "SHiFT – A New Era of Mental Health",
  description:
    "SHiFT is reimagining mental health through engaging content, expert voices, and an inclusive movement. Explore real healing with relatable therapy, trusted resources, and daily support in your journey to better mental well-being.",
  canonical: "https://shiftmastersessions.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiftmastersessions.com",
    siteName: "SHiFT",
    title: "SHiFT – A New Era of Mental Health",
    description:
      "SHiFT is reimagining mental health through engaging content, expert voices, and an inclusive movement. Explore real healing with relatable therapy, trusted resources, and daily support in your journey to better mental well-being.",
    images: [
      {
        url: "https://shiftmastersessions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHiFT – Mental Health Reinvented",
      },
    ],
  },
  twitter: {
    handle: "@shiftapp", // Replace if different
    site: "@shiftapp",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "mental health, therapy, healing, support, wellness, mindfulness, self-care, SHiFT app, emotional health, online therapy, daily support, mental wellness, holistic health, guided healing",
    },
    {
      name: "theme-color",
      content: "#002766", //
    },
  ],
};

export default defaultSEOConfig;
