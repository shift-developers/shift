import { GetStaticProps } from "next";
import Image from "next/image";

import { HomepageVideo } from "@/lib/contentful/homepageVideo";
import { Testimonial } from "@/lib/contentful/testimonials";
import {
  getHomepageVideo,
  getTestimonials,
  getTherapists,
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
  testimonials: Testimonial[];
  homepageVideo: HomepageVideo | null;
}

const Home = ({ therapists, testimonials, homepageVideo }: HomeProps) => {
  return (
    <div className="w-full">
      <Banner
        header={
          <>
            A Modern Approach to Mental Health. A Movement of Healing -{" "}
            <span className="italic">Together.</span>
          </>
        }
        description="Therapists who have navigated life's challenges use their lived experience to guide and support your healing and transformation."
        buttons={[
          { type: "primary", text: "Coming Soon", href: "#" },
          { type: "secondary", text: "Join Waitlist", href: "https://shiftmastersessions.kit.com/02136d09de" },
        ]}
      />
    <ShiftIntro />
    <div className="my-container my-14 lg:mt-56 lg:mb-36">
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
    <TherapistsSection therapists={therapists} />
    <div>
      <section className="relative lg:mt-14">
        <img
          src="/images/abstract.png"
          alt="abstract"
          className="w-full h-[1100px]"
        />
        <div className="absolute inset-0 z-10 flex">
          <div className="flex items-center justify-center flex-1 my-container max-lg:items-start max-lg:pt-72">
            <div className="flex gap-10 max-lg:flex-col lg:justify-between w-full">
              <h3 className="text-3xl lg:text-5xl text-pure-white font-gothic lg:-mt-20">
                Representation
                <br /> Matters
              </h3>
              <div className="text-pure-white lg:text-xl font-proxima max-w-[707px] max-lg:px-5 pb-20">
                At SHiFT, we&apos;re changing the mental health landscape by
                elevating therapists from diverse backgrounds, races, and lived
                experiences. We know that people of color and LGBTQ+ communities
                face unique challenges, and representation is critical for those
                seeking support and for those providing it. Our therapists
                reflect diverse backgrounds, identities, and lived experiences.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      <WhatYouGet />
      <MasterSessions />
      <TestemionalSlider testimonials={testimonials} />
      <HealingBegins />
      <FAQ />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const therapists = await getTherapists();
  const testimonials = await getTestimonials();
  const homepageVideo = await getHomepageVideo();

  return {
    props: {
      therapists,
      testimonials,
      homepageVideo,
    },
    revalidate: 60,
  };
};

export default Home;
