import Image from "next/image";
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
import { GetStaticProps } from "next";
import {
  getTags,
  getHomepageVideo,
  getTestimonials,
  getTherapists,
} from "@/lib/contentful";
import { Testimonial } from "@/lib/contentful/testimonials";
import { HomepageVideo } from "@/lib/contentful/homepageVideo";

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
    <div className="flex flex-col items-center max-w-7xl mx-auto mb-[150px]">
      {homepageVideo?.videoUrl ? (
        <VideoPlayer
          src={homepageVideo.videoUrl}
          width={1600}
          height={358}
          poster="/images/video-thumbnail.png"
        />
      ) : (
        <Image
          src="/images/video-thumbnail.png"
          width={1600}
          height={358}
          alt="Video Thumbnail"
        />
      )}
    </div>
    <TherapistsSection therapists={therapists} tags={tags} />
    <section
      className="relative py-24 md:py-32 mt-[200ox] bg-cover bg-no-repeat h-[1200px]"
      style={{
        backgroundImage: "url('/images/abstract.png')",
      }}
    >
      <div className="max-w-7xl flex justify-between items-center w-full mx-auto h-[75%]">
        <div className="flex items-start justify-start h-[40%] w-full mr-[200px]">
          <h3 className="text-[48px] text-pure-white font-gothic">
            Representation Matters
          </h3>
        </div>
        <div className="flex mt-auto pb-[150px]">
          <p className="text-pure-white text-[24px] font-proxima">
            At SHiFT, we&apos;re changing the mental health landscape by
            elevating therapists from diverse backgrounds, races, and lived
            experiences. We know that people of color and LGBTQ+ communities
            face unique challenges, and representation is critical for those
            seeking support and for those providing it. Our therapists reflect
            diverse backgrounds, identities, and lived experiences.
          </p>
        </div>
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
