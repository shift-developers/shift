import { contentfulClient } from "./index";

export const getTeam = async (): Promise<TeamMember[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "team",
      order: ["fields.order"],
    });

    const team: TeamMember[] = entries.items.map((item: any) => ({
      id: item.sys.id,
      fullName: item.fields.fullName,
      jobTitle: item.fields.jobTitle,
      order: item.fields.order,
      image:
        item.fields.image?.fields?.file?.url?.replace(/^\/\//, "https://") ??
        "",
    }));

    return team;
  } catch (error) {
    console.error("Error fetching therapists:", error);
    return [];
  }
};
