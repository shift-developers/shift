import Image from "next/image";
import { Banner, ShiftIntro, TherapistsSection } from "@/components";
import { GetStaticProps } from "next";
import { getTags, getTherapists } from "@/lib/contentful";

interface HomeProps {
  therapists: Therapist[];
  tags: Tag[];
}

const Home = ({ therapists, tags }: HomeProps) => (
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
      <Image
        src="/images/video-thumbnail.png"
        width={1600}
        height={358}
        alt="Video Thumbnail"
      />
    </div>
    <TherapistsSection therapists={therapists} tags={tags} />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const therapists = await getTherapists();
  const tags = await getTags();

  return {
    props: {
      therapists,
      tags,
    },
    revalidate: 60,
  };
};

export default Home;
