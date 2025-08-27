import { contentfulClient } from "./index";

export const getTags = async (): Promise<Tag[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "sessionTag",
      order: ["fields.name"],
    });

    const tags: Tag[] = entries.items.map((item: any) => ({
      name: item.fields.name,
      icon:
        item.fields.icon?.fields?.file?.url?.replace(/^\/\//, "https://") ??
        null,
    }));

    return tags;
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};
