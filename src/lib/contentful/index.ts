import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export { getTherapists } from "./therapists";
export { getTestimonials } from "./testimonials";
export { getHomepageVideo } from "./homepageVideo";
