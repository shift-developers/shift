import { contentfulClient } from "./index";

export const getPartners = async (): Promise<string[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "partners",
    });

    const partners: string[] = entries.items.map(
      (item: any) =>
        item.fields.media?.fields?.file?.url?.replace(/^\/\//, "https://") ?? ""
    );

    return partners;
  } catch (error) {
    console.error("Error fetching therapists:", error);
    return [];
  }
};
