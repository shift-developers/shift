import { createClient, ContentfulClientApi } from "contentful";

let _client: ContentfulClientApi<undefined> | null = null;

export function getContentfulClient() {
  if (!_client) {
    if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
      throw new Error("Contentful environment variables not configured");
    }
    _client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }
  return _client;
}

// Deprecated: use getContentfulClient() instead
export const contentfulClient = {
  getEntries: (...args: Parameters<ContentfulClientApi<undefined>["getEntries"]>) =>
    getContentfulClient().getEntries(...args),
};

export { getTherapists } from "./therapists";
export { getTestimonials } from "./testimonials";
export { getHomepageVideo } from "./homepageVideo";
