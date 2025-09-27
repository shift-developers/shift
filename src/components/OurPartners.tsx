type Props = {
  partners: string[];
};

export const OurPartners = ({ partners }: Props) => {
  // Split partners into two rows: 3 on top, 4 on bottom
  const topRowPartners = partners.slice(0, 3);
  const bottomRowPartners = partners.slice(3, 7);

  return (
    <section className="px-5 lg:px-32 xl:px-48 flex flex-col gap-9 lg:gap-20 py-16 lg:pb-[100px]">
      <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-center">
        SHiFT Partners
      </h2>
      <div className="flex flex-col gap-8 md:gap-12">
        {/* Top row - 3 logos */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-center justify-items-center">
          {topRowPartners.map((el, i) => (
            <img
              key={i}
              src={el}
              alt="SHiFT partner logo"
              className="w-20 sm:w-28 md:w-36 lg:w-48 h-auto object-contain max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32"
            />
          ))}
        </div>
        {/* Bottom row - 4 logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-16 items-center justify-items-center">
          {bottomRowPartners.map((el, i) => (
            <img
              key={i + 3}
              src={el}
              alt="SHiFT partner logo"
              className="w-20 sm:w-28 md:w-36 lg:w-48 h-auto object-contain max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
