import TherapistSlider from "./TherapistSlider";

interface TherapistSectionProps {
  therapists: Therapist[];
  tags: Tag[];
}

const TherapistsSection = ({ therapists, tags }: TherapistSectionProps) => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-4xl lg:text-5xl text-center font-bold mb-8 max-w-[660px] leading-[120%] font-gothic px-5">
        Meet the Therapists Who Are Changing the Game.
      </h2>
      <TherapistSlider therapists={therapists} tags={tags} />
    </section>
  );
};

export default TherapistsSection;
