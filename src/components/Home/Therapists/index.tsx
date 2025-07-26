import TherapistSlider from "./TherapistSlider";

interface TherapistSectionProps {
  therapists: Therapist[];
  tags: Tag[];
}

const TherapistsSection = ({ therapists, tags }: TherapistSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto py-20 flex flex-col items-center">
      <h2 className="text-[48px] text-center font-bold mb-[30px] max-w-[660px] leading-[120%] font-gothic">
        Meet the Therapists Who Are Changing the Game.
      </h2>
      <TherapistSlider therapists={therapists} tags={tags} />
    </div>
  );
};

export default TherapistsSection;
