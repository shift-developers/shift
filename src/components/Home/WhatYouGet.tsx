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
    title: "The Vault",
    subtitle: "On-Demand, Anytime",
    description:
      "Unlock immediate access to our exclusive library of recorded MasterSessions, guided support circles, and transformational tools. This is your personal growth hub - available anytime, anywhere, the moment you're ready to shift your life.",
    icon: <Vault className="size-10 lg:size-14" />,
  },
  {
    title: "The Main Event",
    subtitle: "Live MasterSessions",
    description:
      "Step into the spotlight of your healing journey. These powerful livestreams are where our community gathers in real time for wisdom, experience, and life-changing breakthroughs. No replays. Just connection - it's your invitation to transform alongside others doing the work.",
    icon: <Party className="size-10 lg:size-14" />,
  },
  {
    title: "SHiFT Sanctuary",
    subtitle: "Your Private Community",
    description:
      "More than a community, this is your sacred space. Here, you'll find real talk, deep connection, and the unwavering support of people who've been there. This is where courage meets belonging, and you remember—you're never alone.",
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
    subtitle: "Weekly Prompts and Monthly Challenges",
    description:
      "We don't just talk about change - we live it. Each week and month, we deliver the challenges and practices designed to build the habits you need to fuel transformation. Consistency creates community and growth becomes your way of life.",
    icon: <GearLightbulb className="size-10 lg:size-14" />,
  },
  {
    title: "The Founders Circle",
    subtitle: "Monthly with The Team",
    description:
      "This is your behind-the-scenes pass to the spirit of SHiFT. Sit shoulder to shoulder with the founders, hear the intention behind what's shared, and get your burning questions answered.",
    icon: <UserLigthbulb className="size-10 lg:size-14" />,
  },
];

const WhatYouGet = () => {
  return (
    <section className="px-5 lg:px-32 xl:px-48">
      <h2 className="text-5xl text-black font-gothic mb-8 font-bold">
        What you get
      </h2>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex flex-col bg-pure-white rounded-xl shadow-sm p-5 lg:p-6 border border-gray-200 hover:shadow-md transition gap-3 w-full lg:w-1/3 2xl:w-1/4">
          <div>
            <SuitcaseFlower className="size-10 lg:size-14" />
          </div>
          <h3 className="font-bold text-xl lg:text-[32px] font-proxima">
            SHiFT IRL
          </h3>
          <p className="lg:text-[18px] text-dark-blue font-proxima font-semibold">
            Retreats and Camps
          </p>
          <p className="text-sm lg:text-base font-proxima text-neutral-750">
            This is where the magic gets real. Our immersive, in-person retreats
            and camps are the culmination of your Best Year Ever. You&apos;ll
            laugh, cry, grow, and connect in ways that will shift your life
            forever. This is not a break from the work - it&apos;s the
            embodiment of it.
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
