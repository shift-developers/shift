import Button from "./Button";

interface BannerProps {
  header: string;
  description: string;
  buttons?: { type: "primary" | "secondary"; text: string; href: string }[];
}

const Banner = ({ header, description, buttons }: BannerProps) => {
  return (
    <section
      className="relative pt-32 lg:pt-48 xl:pt-56 pb-28 lg:pb-72 z-[10]"
      style={{
        backgroundImage: "url('/images/background-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="my-container flex flex-col gap-5 lg:gap-10">
        <h1 className="text-4xl lg:text-7xl 2xl:text-8xl text-pure-white font-bold font-gothic leading-[110%]">
          {header}
        </h1>
        <p className="text-sm lg:text-lg 2xl:text-xl text-pure-white font-bold font-gothic leading-[110%] lg:w-1/2">
          {description}
        </p>

        {buttons && (
          <div className="flex gap-5">
            {buttons.map(({ type, text, href }, idx) => (
              <Button
                text={text}
                type={type}
                href={href}
                key={idx}
                className="lg:w-[223px] text-[18px]"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner;
