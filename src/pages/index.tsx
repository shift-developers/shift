import { GetStaticProps } from "next";
import Image from "next/image";

import { HomepageVideo } from "@/lib/contentful/homepageVideo";
import { Testimonial } from "@/lib/contentful/testimonials";
import {
  getHomepageVideo,
  getTestimonials,
  getTherapists,
  getTags,
} from "@/lib/contentful";
import {
  Banner,
  FAQ,
  HealingBegins,
  MasterSessions,
  ShiftIntro,
  TestemionalSlider,
  TherapistsSection,
  VideoPlayer,
  WhatYouGet,
} from "@/components";

interface HomeProps {
  therapists: Therapist[];
  tags: Tag[];
  testimonials: Testimonial[];
  homepageVideo: HomepageVideo | null;
}

const Home = ({ therapists, tags, testimonials, homepageVideo }: HomeProps) => (
  <div className="w-full">
    <Banner
      header="A New Era of Mental Health. A Movement of Healing - Together."
      description="Therapists who have navigated life's challenges use their experience to guide and support your healing and transformation."
      buttons={[
        { type: "primary", text: "Begin Journey", href: "#" },
        { type: "secondary", text: "Free Trial", href: "#" },
      ]}
    />
    <ShiftIntro />
    <div className="px-5 lg:px-32 xl:px-48 my-14 lg:mt-56 lg:mb-36">
      {homepageVideo?.videoUrl ? (
        <VideoPlayer
          src={homepageVideo.videoUrl}
          height={358}
          poster="/images/video-thumbnail.png"
          className="w-full"
        />
      ) : (
        <Image
          src="/images/video-thumbnail.png"
          height={358}
          className="w-full"
          alt="Video Thumbnail"
        />
      )}
    </div>
    <TherapistsSection therapists={therapists} tags={tags} />
    <section
      className="relative bg-cover bg-no-repeat px-5 lg:px-32 xl:px-48 pb-[200px] pt-[250px] lg:py-[350px] lg:mt-14"
      style={{
        backgroundImage: "url('/images/abstract.png')",
      }}
    >
      <div className="flex max-lg:flex-col lg:justify-between gap-10 max-lg:-mt-10 lg:pt-20">
        <h3 className="text-3xl lg:text-5xl text-pure-white font-gothic lg:-mt-20">
          Representation
          <br /> Matters
        </h3>
        <p className="text-pure-white lg:text-xl font-proxima max-w-[707px] max-lg:px-5 pb-20">
          At SHiFT, we&apos;re changing the mental health landscape by elevating
          therapists from diverse backgrounds, races, and lived experiences. We
          know that people of color and LGBTQ+ communities face unique
          challenges, and representation is critical for those seeking support
          and for those providing it. Our therapists reflect diverse
          backgrounds, identities, and lived experiences.
        </p>
      </div>
    </section>
    <WhatYouGet />
    <MasterSessions />
    <TestemionalSlider testimonials={testimonials} />
    <HealingBegins />
    <FAQ />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getTags();
  const therapists = await getTherapists();
  const testimonials = await getTestimonials();
  const homepageVideo = await getHomepageVideo();

  return {
    props: {
      therapists,
      tags,
      testimonials,
      homepageVideo,
    },
    revalidate: 60,
  };
};

export default Home;
