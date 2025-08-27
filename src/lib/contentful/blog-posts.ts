import { contentfulClient } from "./index";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "blog",
      order: ["fields.title"],
    });

    const blogPosts: BlogPost[] = entries.items.map((item: any) => ({
      id: item.sys.id,
      slug: item.fields.slug,
      title: item.fields.title,
      description: item.fields.description,
      content: item.fields.content,
      image:
        item.fields.media?.fields?.file?.url?.replace(/^\/\//, "https://") ??
        "",
    }));

    return blogPosts;
  } catch (error) {
    console.error("Error fetching therapists:", error);
    return [];
  }
};
