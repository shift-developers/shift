import { contentfulClient } from "./index";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "testimonials",
      order: ["fields.name"],
    });

    const testimonials: Testimonial[] = entries.items.map((item: any) => ({
      id: item.sys.id,
      quote: item.fields.testimonial,
      name: item.fields.name,
      title: item.fields.occupation,
    }));

    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};
