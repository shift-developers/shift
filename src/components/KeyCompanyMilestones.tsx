import { Badge, Hands, Know, Rocket, TodoList } from "@/assets/svgs";

const cards = [
  {
    id: 1,
    icon: Hands,
    title: "Built Team & Therapist Partners",
    date: "December 2020",
  },
  {
    id: 2,
    icon: Know,
    title: "MasterSessions Production Complete",
    date: "June 2022",
  },

  {
    id: 3,
    icon: Badge,
    title: "Wireframes & Branding Complete",
    date: "September 2023",
  },
  {
    id: 4,
    icon: TodoList,
    title: "Curriculum Design Complete",
    date: "January 2024",
  },
  {
    id: 5,
    icon: Rocket,
    title: "Beta Launch",
    date: "February 2025",
  },
];

export const KeyCompanyMilestones = () => {
  return (
    <section className="px-5 lg:px-32 xl:px-48 flex flex-col gap-9 lg:gap-20">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-3xl lg:text-5xl font-gothic font-bold">
          Key Company Milestones
        </h2>
        <p className="text-neutral-950 text-xl lg:text-2xl font-proxima">
          We’ve already achieved some remarkable milestones.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-9">
        {cards.map((card) => (
          <div
            key={card.id}
            className="text-center flex flex-col gap-5 items-center bg-white shadow-xl px-5 lg:px-2 py-7 rounded-[20px] w-full lg:w-[250px]"
          >
            <div className="size-14 rounded-full bg-neutral-200 flex items-center justify-center">
              <card.icon className="size-8 text-dark-blue" />
            </div>
            <h3 className="text-xl font-gothic font-bold">{card.title}</h3>
            <p className="text-lg text-neutral-750 font-proxima font-bold">
              {card.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
