import { contentfulClient } from "./index";

export const getTherapists = async (): Promise<Therapist[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "therapists",
      order: ["fields.name"],
      "fields.showOnHomepage": true,
    });

    const therapists: Therapist[] = entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      masterSessionName: item.fields.masterSessionName,
      image:
        item.fields.image?.fields?.file?.url?.replace(/^\/\//, "https://") ??
        "",
      sessionTags: (item.fields.sessionTags ?? []).map((tag: any) => ({
        name: tag.fields?.name,
        icon: tag.fields?.icon?.fields?.file?.url
          ? tag.fields.icon.fields.file.url.startsWith("//")
            ? `https:${tag.fields.icon.fields.file.url}`
            : tag.fields.icon.fields.file.url
          : null,
      })),
    }));

    return therapists;
  } catch (error) {
    console.error("Error fetching therapists:", error);
    return [];
  }
};
