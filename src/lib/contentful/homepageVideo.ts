import { contentfulClient } from "./index";

export interface HomepageVideo {
  id: string;
  videoUrl: string;
  videoTitle?: string;
}

export const getHomepageVideo = async (): Promise<HomepageVideo | null> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "homepageVideo",
      limit: 1,
    });

    console.log(entries);

    if (entries.items.length === 0) {
      return null;
    }

    const item: any = entries.items[0];

    const homepageVideo: HomepageVideo = {
      id: item.sys.id,
      videoUrl:
        item.fields.video?.fields?.file?.url?.replace(/^\/\//, "https://") ??
        "",
      videoTitle: item.fields.video?.fields?.title,
    };

    return homepageVideo;
  } catch (error) {
    console.error("Error fetching homepage video:", error);
    return null;
  }
};
