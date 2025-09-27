type Props = {
  partners: string[];
};

export const OurPartners = ({ partners }: Props) => {
  // Split partners into two rows: 3 on top, 4 on bottom
  const topRowPartners = partners.slice(0, 3);
  const bottomRowPartners = partners.slice(3, 7);

  return (
    <section className="px-5 lg:px-32 xl:px-48 flex flex-col gap-9 lg:gap-20 lg:pb-[100px]">
      <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-center">
        SHiFT Partners
      </h2>
      <div className="flex flex-col gap-12">
        {/* Top row - 3 logos */}
        <div className="flex items-center justify-center gap-8 lg:gap-16">
          {topRowPartners.map((el, i) => (
            <img
              key={i}
              src={el}
              alt="SHiFT partner logo"
              className="w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
          ))}
        </div>
        {/* Bottom row - 4 logos */}
        <div className="flex items-center justify-center gap-8 lg:gap-16">
          {bottomRowPartners.map((el, i) => (
            <img
              key={i + 3}
              src={el}
              alt="SHiFT partner logo"
              className="w-32 md:w-40 lg:w-48 h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
