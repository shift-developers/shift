import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "presented tools to support individual growth.",
    masterSession: 95,
    tedTalk: 78,
  },
  {
    name: "provided insights beneficial to my well-being.",
    masterSession: 99,
    tedTalk: 85,
  },
  {
    name: "allowed me to see aspects of myself more clearly.",
    masterSession: 79,
    tedTalk: 58,
  },
  {
    name: "felt personal, as if the speaker was addressing me.",
    masterSession: 80,
    tedTalk: 65,
  },
  { name: "felt like a mini-therapy session.", masterSession: 65, tedTalk: 42 },
  { name: "enhanced my self-awareness.", masterSession: 82, tedTalk: 64 },
  {
    name: "encouraged a more open-minded perspective.",
    masterSession: 96,
    tedTalk: 84,
  },
  { name: "introduced new information to me.", masterSession: 81, tedTalk: 59 },
  {
    name: "offered guidance that could improve my romantic relationships.",
    masterSession: 78,
    tedTalk: 38,
  },
  {
    name: "prompted reflection on my personal experiences.",
    masterSession: 86,
    tedTalk: 81,
  },
  { name: "contained some valuable insights.", masterSession: 95, tedTalk: 93 },
  {
    name: "sparked my interest in exploring the topic further.",
    masterSession: 78,
    tedTalk: 65,
  },
];

export const DetailsSection = () => {
  return (
    <section className="px-5 max-w-6xl mx-auto pt-10 max-md:pb-10 max-lg:pb-40">
      <h2 className="text-4xl lg:text-5xl font-gothic font-bold uppercase">
        Data talks. Don&apos;t take our word for it.
      </h2>
      <p className="text-lg 2xl:text-2xl font-proxima font-bold mt-5 mb-10">
        One MasterSession lesson outshines a TED Talk with 14 million views.
      </p>
      <ul className="flex flex-col gap-5 list-disc text-base lg:text-2xl ml-5 font-proxima mb-10">
        <li>
          44 participants watched a 10 minute lesson from our MasterSession on
          Beliefs
        </li>
        <li>
          44 participants watched a comparable 10 minute TedTalk on Mindfulness
          (14M views)
        </li>
        <li>
          Participants were randomly assigned to one of the two videos and rated
          the following statements on a Likert scale from 1 (strongly disagree)
          to 7 (strongly agree).
        </li>
      </ul>
      <p className="text-base lg:text-2xl font-proxima">
        The graph below show the percentage of participants who responded
        “somewhat agree” or higher.
      </p>
      <div className="mt-20 max-lg:overflow-x-auto">
        <div className="h-[600px] max-lg:w-[900px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              barGap={4}
              barCategoryGap={20}
              barSize={12}
            >
              <CartesianGrid strokeDasharray="1 1" horizontal={false} />
              <YAxis
                type="category"
                dataKey="name"
                fontSize={16}
                fontWeight={800}
                fontFamily="Proxima Nova"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                width={500}
              />
              <XAxis type="number" />
              <Legend verticalAlign="top" />
              <Bar
                dataKey="masterSession"
                fill="#00D6D6"
                radius={[0, 10, 10, 0]}
              />
              <Bar dataKey="tedTalk" fill="#DADADA" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <h3 className="text-3xl lgtext-4xl font-bold font-gothic mt-20">
        MasterSession{" "}
        <span className="border-b-[4px] border-[#00D6D6]">
          outperforms the TedTalk.
        </span>
      </h3>
    </section>
  );
};
