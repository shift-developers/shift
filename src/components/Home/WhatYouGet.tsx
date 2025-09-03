import {
  GearLightbulb,
  LogoColor,
  Party,
  SuitcaseFlower,
  UserLigthbulb,
  UsersFlower,
  UsersGear,
  Vault,
} from "@/assets/svgs";

const items = [
  {
    title: "The Main Event",
    subtitle: "Live MasterSessions",
    description:
      "Step into the spotlight of your healing journey. These powerful livestreams are where our community gathers in real time for wisdom, experience, and life-changing breakthroughs. No replays. Just connection - it's your invitation to transform alongside others doing the work.",
    icon: <Party className="size-10 lg:size-14" />,
  },
  {
    title: "SHiFT Sanctuary",
    subtitle: "Speak and Be Seen",
    description:
      "This is a space for real connection and real progress. In the SHiFT Sanctuary, you’re free to be honest about where you are and what you need. It’s a space built on respect, safety, and shared commitment to personal growth. Here, your voice matters, your growth is recognized, and your presence contributes to something meaningful. No performance. No pretending. Just people doing the work, together.",
    icon: <UsersFlower className="size-10 lg:size-14" />,
  },
  {
    title: "SHiFT's MiniSessions",
    subtitle: "Workshops with Industry Leaders",
    description:
      "Experience breakthrough insights from the world's top healers, teachers, and visionaries. These intimate live workshops are where time transformation collides. You'll love every MiniSession change - and deeply seen.",
    icon: <UsersGear className="size-10 lg:size-14" />,
  },
  {
    title: "The Practice",
    subtitle: "Daily Prompts. Weekly Challenges.",
    description:
      "This is where growth gets real—and doable. Every day, you’ll get quick questions and polls to spark insight. Each week, a challenge to stretch your habits. And every month, a theme to help you focus on what matters most. It’s all designed to build emotional strength, deepen self-awareness, and keep you moving forward—one small shift at a time.",
    icon: <GearLightbulb className="size-10 lg:size-14" />,
  },
  {
    title: "The Founders Circle",
    subtitle: "Your Welcome Party",
    description:
      "Imagine walking into the coolest gathering - you're greeted at the door, introduced to a few great people, and given the inside scoop on where things are happening. That’s what The Founders Circle is. A live monthly gathering where you’ll be welcomed by the SHiFT hosts and some of our Inner Circle - longtime members who know the space, love the mission, and are here to make sure you feel right at home.",
    icon: <UserLigthbulb className="size-10 lg:size-14" />,
  },
  {
    title: "SHiFT Retreats",
    subtitle: "Retreats and Camps",
    description:
      "This is where the magic gets real. Our immersive, in-person retreats and camps are the culmination of your Best Year Ever. You'll laugh, cry, grow, and connect in ways that will shift your life forever. This is not a break from the work - it's the embodiment of it.",
    icon: <SuitcaseFlower className="size-10 lg:size-14" />,
  },
];

const WhatYouGet = () => {
  return (
    <section className="my-container">
      <h2 className="text-5xl text-black font-gothic mb-8 font-bold">
        What you get
      </h2>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex flex-col bg-pure-white rounded-xl shadow-sm p-5 lg:p-6 border border-gray-200 hover:shadow-md transition gap-3 w-full lg:w-1/3 2xl:w-1/4">
          <div>
            <Vault className="size-10 lg:size-14" />
          </div>
          <h3 className="font-bold text-xl lg:text-[32px] font-proxima">
            The Vault
          </h3>
          <p className="lg:text-[18px] text-dark-blue font-proxima font-semibold">
            On-Demand, Anytime
          </p>
          <p className="text-sm lg:text-base font-proxima text-neutral-750">
            {`Unlock immediate access to our exclusive library of recorded
            MasterSessions, guided support circles, and transformational tools.
            This is your personal growth hub - available anytime, anywhere, the
            moment you're ready to shift your life.`}
          </p>
          <div className="flex items-center justify-center flex-1">
            <LogoColor className="w-[61px] lg:w-[100px]" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-3 flex-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-pure-white rounded-xl shadow-sm p-5 lg:p-6 border border-gray-200 hover:shadow-md transition gap-3"
            >
              <div>{item.icon}</div>
              <h3 className="font-bold text-xl lg:text-[32px] font-proxima">
                {item.title}
              </h3>
              <p className="lg:text-[18px] text-dark-blue font-proxima font-semibold">
                {item.subtitle}
              </p>
              <p className="text-sm lg:text-base font-proxima text-neutral-750">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
