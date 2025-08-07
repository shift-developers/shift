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
    icon: <Vault />,
  },
  {
    title: "The Main Event",
    subtitle: "Live MasterSessions",
    description:
      "Step into the spotlight of your healing journey. These powerful livestreams are where our community gathers in real time for wisdom, experience, and life-changing breakthroughs. No replays. Just connection - it's your invitation to transform alongside others doing the work.",
    icon: <Party />,
  },
  {
    title: "SHiFT Sanctuary",
    subtitle: "Your Private Community",
    description:
      "More than a community, this is your sacred space. Here, you'll find real talk, deep connection, and the unwavering support of people who've been there. This is where courage meets belonging, and you remember—you're never alone.",
    icon: <UsersFlower />,
  },
  {
    title: "SHiFT's MiniSessions",
    subtitle: "Workshops with Industry Leaders",
    description:
      "Experience breakthrough insights from the world's top healers, teachers, and visionaries. These intimate live workshops are where time transformation collides. You'll love every MiniSession change - and deeply seen.",
    icon: <UsersGear />,
  },
  {
    title: "The Practice",
    subtitle: "Weekly Prompts and Monthly Challenges",
    description:
      "We don't just talk about change - we live it. Each week and month, we deliver the challenges and practices designed to build the habits you need to fuel transformation. Consistency creates community and growth becomes your way of life.",
    icon: <GearLightbulb />,
  },
  {
    title: "The Founders Circle",
    subtitle: "Monthly with The Team",
    description:
      "This is your behind-the-scenes pass to the spirit of SHiFT. Sit shoulder to shoulder with the founders, hear the intention behind what's shared, and get your burning questions answered.",
    icon: <UserLigthbulb />,
  },
];

const WhatYouGet = () => {
  return (
    <section className="w-full max-w-7xl mx-auto  mb-[240px]">
      <h2 className="text-[48px] text-black font-gothic mb-[30px] font-bold">
        What you get
      </h2>
      <div className="flex gap-[14px]">
        <div className="flex flex-col bg-pure-white rounded-xl shadow-sm p-[24px] border border-gray-200 hover:shadow-md transition gap-[14px] ">
          <div>
            <SuitcaseFlower />
          </div>
          <h3 className="font-bold text-[32px] font-proxima">SHiFT IRL</h3>
          <p className="text-[18px] text-dark-blue font-proxima font-semibold">
            Retreats and Camps
          </p>
          <p className="text-[16px] font-proxima text-neutral-750">
            This is where the magic gets real. Our immersive, in-person retreats
            and camps are the culmination of your Best Year Ever. You&apos;ll
            laugh, cry, grow, and connect in ways that will shift your life
            forever. This is not a break from the work - it&apos;s the
            embodiment of it.
          </p>
          <div className="my-auto mx-auto">
            <LogoColor width={200} className="" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-pure-white rounded-xl shadow-sm p-[24px] border border-gray-200 hover:shadow-md transition gap-[14px]"
            >
              <div>{item.icon}</div>
              <h3 className="font-bold text-[32px] font-proxima">
                {item.title}
              </h3>
              <p className="text-[18px] text-dark-blue font-proxima font-semibold">
                {item.subtitle}
              </p>
              <p className="text-[16px] font-proxima text-neutral-750">
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
