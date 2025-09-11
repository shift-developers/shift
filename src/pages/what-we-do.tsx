import { GetStaticProps } from "next";

import { TherapistsGroups } from "@/components/TherapistsGroups";
import { getTherapists } from "@/lib/contentful";
import { Banner, Button } from "@/components";

type Props = {
  therapists: Therapist[];
};

const WhatWeDoPage = ({ therapists }: Props) => (
  <div className="w-full">
    <Banner
      header="What We Do"
      description="SHiFT: a product that helps people unlock their potential, and a platform where therapists share their stories."
    />

    <section className="-mt-[200px] -z-[10]">
      <div
        className="relative h-[750px] lg:h-[880px] py-[200px]"
        style={{
          backgroundImage: `url(/images/what-we-do-banner.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="my-container flex items-center lg:justify-end h-full">
          <div className="flex flex-col gap-5 lg:text-3xl font-proxima font-bold text-white max-w-[500px] z-[1] mt-6">
            <p>
              Designed To Heal: We go beyond mere content delivery, to offer a
              personalized actionable roadmap for real mental health progress.
            </p>
            <p>
              In the rapidly growing online education and personal growth
              industry, SHiFT uniquely bridges the gap with a
              scientifically-backed,data-driven approach, distinguishing us from
              other mental health products.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-dark-blue/10" />

        <img
          src="/images/blue-vector.png"
          alt="shift"
          className="absolute -bottom-10 lg:-bottom-[200px] left-0 right-0 w-full"
        />
      </div>
    </section>

    <TherapistsGroups therapists={therapists} />

    <section className="px-5 lg:px-32 xl:px-48 mt-20 lg:mt-[200px] lg:mb-[100px]">
      <div className="flex flex-col gap-6 text-center items-center justify-center max-w-[880px] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-gothic font-bold">
          Breakthroughs Once Reserved For Therapy - Now Yours
        </h2>
        <p className="text-xl lg:text-2xl font-proxima text-neutral-750">
          SHiFT’s therapist-led MasterSessions provide you with direct access to
          the same powerful tools, strategies, and inner work that have changed
          thousands of lives. This is your chance to do the work - guided by
          experts who bring both lived and clinical experience. This self-paced
          transformational journey, combined with our revolutionary community
          learning approach, gives you the support, accountability, and
          connection you need to live your best life.
        </p>
        <Button text="Begin Journey" type="primary" />
      </div>
    </section>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const therapists = await getTherapists();

  return {
    props: {
      therapists,
    },
    revalidate: 60,
  };
};

export default WhatWeDoPage;
