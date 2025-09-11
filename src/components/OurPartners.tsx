type Props = {
  partners: string[];
};

export const OurPartners = ({ partners }: Props) => {
  return (
    <section className="px-5 lg:px-32 xl:px-48 flex flex-col gap-9 lg:gap-20 lg:pb-[100px]">
      <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-center">
        SHiFT Partners
      </h2>
      <div className="flex items-center gap-10 justify-between overflow-y-auto">
        {partners.map((el, i) => (
          <img key={i} src={el} alt="shift" className="w-28" />
        ))}
      </div>
    </section>
  );
};
