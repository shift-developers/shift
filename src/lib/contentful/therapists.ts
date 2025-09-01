import { contentfulClient } from "./index";

export const getTherapists = async (): Promise<Therapist[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "therapists",
      order: ["fields.order"],
    });

    const therapists: Therapist[] = entries.items.map((item: any) => ({
      id: item.sys.id,
      name: item.fields.name,
      specialization: item.fields.specialization,
      order: item.fields.order,
      sessionNumber: item.fields.sessionNumber,
      image:
        item.fields.image?.fields?.file?.url?.replace(/^\/\//, "https://") ??
        "",
    }));

    return therapists;
  } catch (error) {
    console.error("Error fetching therapists:", error);
    return [];
  }
};
