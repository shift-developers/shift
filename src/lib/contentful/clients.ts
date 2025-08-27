import { contentfulClient } from "./index";

export const getClients = async (): Promise<Client[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "clients",
      order: ["fields.fullName"],
    });

    const clients: Client[] = entries.items.map((item: any) => ({
      id: item.sys.id,
      fullName: item.fields.fullName,
      jobTitle: item.fields.jobTitle,
      description: item.fields.description,
      image:
        item.fields.profilePicture?.fields?.file?.url?.replace(/^\/\//, "https://") ??
        "",
    }));

    return clients;
  } catch (error) {
    console.error("Error fetching therapists:", error);
    return [];
  }
};
