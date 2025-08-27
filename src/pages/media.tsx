import { GetStaticProps } from "next";

import { getBlogPosts } from "@/lib/contentful/blog-posts";
import { getClients } from "@/lib/contentful/clients";
import { BlogPosts } from "@/components/BlogPosts";
import { Clients } from "@/components/Clients";
import { Banner } from "@/components";

type Props = {
  blogPosts: BlogPost[];
  clients: Client[];
};

const WhatWeDoPage = ({ blogPosts, clients }: Props) => {
  return (
    <div className="w-full bg-white">
      <Banner
        header="Media"
        description="Exploring the Human Side of Mental Health, One Story at a Time."
      />
      <Clients clients={clients} />
      <BlogPosts blogPosts={blogPosts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getBlogPosts();
  const clients = await getClients();

  return {
    props: {
      blogPosts,
      clients,
    },
    revalidate: 60,
  };
};

export default WhatWeDoPage;
