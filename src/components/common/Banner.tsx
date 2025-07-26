import Button from "./Button";

interface BannerProps {
  header: string;
  description: string;
  buttons: { type: "primary" | "secondary"; text: string; href: string }[];
}

const Banner = ({ header, description, buttons }: BannerProps) => {
  return (
    <section
      className="relative py-24 md:py-32 mt-[200ox] bg-cover bg-no-repeat h-[1200px]"
      style={{
        backgroundImage: "url('/images/background-1.png')",
        backgroundPositionY: "-200px",
      }}
    >
      <div className="flex flex-col max-w-7xl mx-auto pt-[100px] text-center gap-[40px]  items-start justify-start">
        <h1 className="text-[72px] text-pure-white font-bold font-gothic text-left leading-[110%]">
          {header}
        </h1>
        <p className="text-[24px] text-pure-white  text-left font-gothic leading-[110%] max-w-[900px]">
          {description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map(({ type, text, href }, idx) => (
            <Button
              text={text}
              type={type}
              href={href}
              key={idx}
              className="w-[220px] text-[18px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
