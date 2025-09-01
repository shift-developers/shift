import { GetStaticProps } from "next";

import { CircleCheck, MetnalPractice, VideoPlay } from "@/assets/svgs";
import { Banner, Button } from "@/components";
import { getTeam } from "@/lib/contentful/team";

const cards = [
  {
    id: 1,
    title: "Original Content Led by Licensed Therapists",
    description:
      "MasterSessions designed for your mental health journey. Every series is thoughtfully developed by our instructors - offering powerful, one-of-a-kind content you won’t find anywhere else.",
    icon: CircleCheck,
  },
  {
    id: 2,
    title: "Videos That Cut to the Chase",
    description:
      "Each MasterSession is structured into 6 concise, focused sessions that get to the heart of the issue and more importantly, the solution. Meaningful guidance that you can start applying immediately.",
    icon: VideoPlay,
  },
  {
    id: 3,
    title: "Foundational, practical, relatable content",
    description:
      "Offering teachings rooted in lived experience and proven therapeutic practice - not theory. This foundational content is delivered in a way that’s real, relevant and relatable to your life.",
    icon: MetnalPractice,
  },
];

type Props = {
  team: TeamMember[];
};

const WhoWeArePage = ({ team }: Props) => (
  <div className="w-full bg-white">
    <Banner
      header="Who We Are"
      description="The mental health field has long lacked diversity. Both people of color and LGBTQ+ communities face unique challenges, and it’s crucial to have diverse voices guiding their healing and growth. SHiFT brings therapists from all backgrounds, so that everyone feels seen, heard, and understood."
    />

    <section className="-mt-[200px] -z-[10]">
      <div className="bg-gradient-to-b from-dark-blue to-light-blue text-white pt-[300px] pb-[200px] lg:py-[300px] relative">
        <div className="my-container">
          <div className="flex flex-col gap-5 mb-7 lg:mb-14">
            <h2 className="text-3xl lg:text-5xl font-gothic font-bold">
              Our Commitment to Mental Health
            </h2>
            <p className="text-base lg:text-2xl font-proxima">
              Empowering Individuals and Communities Through{" "}
              <br className="hidden lg:block" /> Accessible Mental Health
              Education and Meaningful Support
            </p>
          </div>

          <div className="grid xl:grid-cols-3 gap-4 lg:gap-7">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col gap-3 lg:gap-5 p-5 2xl:p-7 bg-white/5 border border-white/20 rounded-[20px] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1.5 lg:gap-5">
                  <card.icon className="size-9 lg:size-14 2xl:size-[62px]" />
                  <h3 className="text-lg 2xl:text-[22px] font-gothic font-bold flex-1">
                    {card.title}
                  </h3>
                </div>
                <p className="text-base lg:text-xl font-proxima">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10 mb-0 2xl:mb-40">
            <Button type="primary" text="Begin Journey" />
          </div>
        </div>

        <img
          src="/images/blue-vector.png"
          alt="shift"
          className="absolute -bottom-10 lg:-bottom-[200px] left-0 right-0 w-full"
        />
      </div>
    </section>
    <section className="my-container mt-20 lg:mt-[200px]">
      <h2 className="text-4xl lg:text-5xl font-gothic font-bold text-center mb-10 lg:mb-20">
        The Team Ushering in a New Era of Mental Health
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {team.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 p-8 items-center justify-center bg-white rounded-[20px] shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div
              className="size-36 lg:size-[189px] rounded-full"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-xl lg:text-2xl text-blue-500 font-gothic font-bold">
                {item.fullName}
              </h3>
              <p className="text-sm lg:text-xl font-proxima text-neutral-500 font-bold">
                {item.jobTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const team = await getTeam();

  return {
    props: {
      team,
    },
    revalidate: 60,
  };
};

export default WhoWeArePage;
