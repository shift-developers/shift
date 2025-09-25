import {
  GearLightbulb,
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
      "This is where real growth happens​ - live, with others by your side. In every SHiFT livestream, you'll learn directly from licensed therapists and wellness experts while connecting with members walking their own growth path. These sessions are interactive, vulnerable, and transformative. You're not just holding space for others​ - you're being seen, supported, and challenged in return. For many, it's the first time they've felt this kind of emotional presence. And when you connect with someone, you don't lose them when the session ends​ - you continue the conversation, connection, and growth back on the SHiFT platform. This is where you find your people.",
    icon: <Party className="size-10 lg:size-14" />,
  },
  {
    title: "The Practice",
    subtitle: "Daily Prompts. Weekly Challenges. Monthly Focus.",
    description:
      "This is where growth gets real - and fun. Each day, you'll get a quick prompt or poll to check in, reflect, or shift your mindset. Each week, a challenge designed to stretch your habits. Every month, a theme that helps you focus and stay aligned.​ It's not about just knowing what to do - it's about actually doing it. The Practice is how we move from insight to real change. Small, consistent shifts build emotional strength, clarity, and momentum. It's through this daily investment in ourselves that we become our best selves and live our best lives.",
    icon: <GearLightbulb className="size-10 lg:size-14" />,
  },
  {
    title: "SHiFT Sanctuary",
    subtitle: "Speak and Be Seen",
    description:
      "This is your space to get real. The SHiFT Sanctuary is where members come to reflect, share, and connect around what they're actually working through​. Built on trust, respect, and a shared commitment to growth, this is a space where honesty is welcomed, boundaries are honored, and progress​ - however messy​ - is acknowledged. Your voice matters here. Your experience matters. And your willingness to show up makes this space stronger for everyone in it.",
    icon: <UsersFlower className="size-10 lg:size-14" />,
  },
  {
    title: "SHiFT MiniSessions",
    subtitle: "Live Workshops with Industry Leaders",
    description:
      "These are powerful, interactive workshops where you gather real tools for growth. Led by guest hosts - therapists, authors, healers, and wellness leaders - each MiniSession offers something tangible: a practice, framework, or insight you can apply right away. Some will teach you original techniques developed through lived and clinical experience. Others may guide you through a book club using their own work. Whether it's breathwork, journaling, relationship tools, or a new way of seeing yourself - you're not just learning, you're building a toolbox that lasts.",
    icon: <UsersGear className="size-10 lg:size-14" />,
  },
  {
    title: "The Vault",
    subtitle: "On-Demand, Anytime",
    description:
      "Prefer to move at your own pace or take time to reflect before engaging in community? You're not alone and you're in the right place. The Vault is your private entry point into growth, featuring a rich library of therapist-led MasterSessions, guided support groups, and transformational teachings designed to meet you wherever you are. Whether you're just beginning or deep in the work, this on-demand resource is your space to learn, unlearn, and integrate on your terms. It's the perfect starting place for those who value quiet, self-guided reflection and want the freedom to explore powerful content when it feels right.",
    icon: <Vault className="size-10 lg:size-14" />,
  },
  {
    title: "The Homecoming",
    subtitle: "Meet Your Personal Welcome Party",
    description:
      "We're so excited you're here! Join us for a live welcome gathering where you'll meet SHiFT's founder, our core team, and members of your new community. You'll get an inside look at what SHiFT is all about​ - plus a short tour of the platform, built with you in mind.​ This isn't just orientation​ - it's a co-creation. Your needs, insights, and voice help shape what SHiFT becomes. As we grow into a global leader in mental health and personal transformation, we're doing it with you.",
    icon: <UserLigthbulb className="size-10 lg:size-14" />,
  },
  {
    title: "SHiFT Retreats",
    subtitle: "The Breakthrough Experience",
    description:
      "SHiFT Retreats are immersive, in-person experiences where all the work you've been doing comes alive. They are the culmination of your Best Year Ever and the launchpad for becoming who you truly are in the world.​ Over the course of a few unforgettable days, you'll dive deep into guided practices, confront what's been holding you back, release it, and step into the person you're meant to be. You'll move your body, unlock emotion, connect with others on a deep level, and leave with greater clarity, confidence, and connection to our shared community.​ This is the moment that shifts everything.",
    icon: <SuitcaseFlower className="size-10 lg:size-14" />,
  },
];

const WhatYouGet = () => {
  return (
    <section className="my-container">
      <h2 className="text-5xl text-black font-gothic mb-8 font-bold">
        What you get
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, idx) => {
          const totalItems = items.length;
          const remainderLg = totalItems % 3; // For 3-column layout
          const remainderMd = totalItems % 2; // For 2-column layout
          const isInLastRowLg = idx >= totalItems - remainderLg;
          const isInLastRowMd = idx >= totalItems - remainderMd;

          // Determine column span based on breakpoint and position
          let columnSpan = '';

          // For medium screens (2 columns)
          if (isInLastRowMd && remainderMd === 1) {
            columnSpan = 'md:col-span-2';
          }

          // For large screens (3 columns) - this will override md if both apply
          if (isInLastRowLg && remainderLg === 1) {
            columnSpan += ' lg:col-span-3';
          } else if (isInLastRowLg && remainderLg === 2) {
            // Two items in last row on lg screens - they stay normal width
            // Remove the md:col-span-2 if it was added
            if (columnSpan.includes('md:col-span-2')) {
              columnSpan = 'md:col-span-1 lg:col-span-1';
            }
          }

          return (
            <div
              key={idx}
              className={`flex flex-col bg-pure-white rounded-xl shadow-sm p-5 lg:p-6 border border-gray-200 hover:shadow-md transition gap-3 ${columnSpan.trim()}`}
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
          );
        })}
      </div>
    </section>
  );
};

export default WhatYouGet;