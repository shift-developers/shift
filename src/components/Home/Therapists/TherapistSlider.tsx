import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

interface Props {
  therapists: Therapist[];
}

const TherapistSlider = ({ therapists }: Props) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6.5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 2200px)": {
        slides: { perView: 5.5 },
      },
      "(max-width: 1600px)": {
        slides: { perView: 4.5 },
      },
      "(max-width: 1300px)": {
        slides: { perView: 3.5 },
      },
      "(max-width: 900px)": {
        slides: { perView: 2.5 },
      },
      "(max-width: 600px)": {
        slides: { perView: 1.5 },
      },
    },
  });

  const firstSessionTherapists = therapists.filter(
    (t) => t.sessionNumber === 1
  );

  return (
    <div className="w-full overflow-hidden">
      <div className="custom-padding">
        <div className="relative w-full max-lg:mt-8 max-[1920px]:max-w-[1920px] min-[1920px]:!pl-0 min-[1920px]:ml-[calc((100%-1600px)/2)] ">
          {/* Scrollable wrapper with scrollbar */}
          <div>
            <div ref={sliderRef} className="keen-slider flex gap-4">
              {firstSessionTherapists.map((t) => (
                <div
                  key={t.id}
                  className="keen-slider__slide h-[456px] 2xl:h-[556px] shadow-md relative rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${t.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-5 text-center text-white gap-3">
                    <h3 className="text-2xl 2xl:text-3xl font-extrabold font-proxima leading-[120%] break-words w-full">
                      {t.specialization}
                    </h3>
                    <p className="text-sm lg:text-[18px] font-proxima">
                      {t.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Fade Overlay */}
        <Image
          src="/images/fade.png"
          alt="Right fade"
          width={100}
          height={520}
          className="absolute right-0 top-0 h-full w-[400px] pointer-events-none select-none max-lg:hidden"
        />
      </div>
    </div>
  );
};

export default TherapistSlider;
