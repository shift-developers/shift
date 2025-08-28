import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

interface Props {
  therapists: Therapist[];
  tags: Tag[]; // ✅ Tag now passed in as prop
}

const TherapistSlider = ({ therapists, tags }: Props) => {
  const [activeTag, setActiveTag] = useState<string>("All");

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 9.5,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1921px)": {
        slides: { perView: 5.5 },
      },
      "(max-width: 1440px)": {
        slides: { perView: 4.5 },
      },
      "(max-width: 1000px)": {
        slides: { perView: 3.5 },
      },
      "(max-width: 750px)": {
        slides: { perView: 2.5 },
      },
      "(max-width: 500px)": {
        slides: { perView: 1.5 },
      },
    },
  });

  const filtered =
    activeTag === "All"
      ? therapists
      : therapists.filter(
          (t) =>
            Array.isArray(t.sessionTags) &&
            t.sessionTags
              .filter((tag) => typeof tag?.name === "string")
              .map((tag) => tag.name.toLowerCase())
              .includes(activeTag.toLowerCase())
        );

  return (
    <div className="w-full">
      <div className="relative max-lg:grid">
        <div className="flex lg:items-center lg:w-full lg:justify-center max-lg:overflow-x-auto max-lg:px-5">
          <div className="flex lg:flex-wrap lg:max-w-[850px] gap-3 lg:justify-center lg:mb-14 font-proxima">
            <button
              onClick={() => setActiveTag("All")}
              className={`px-3 lg:px-[18px] py-2 rounded-[10px] font-semibold border transition lg:text-xl max-lg:whitespace-nowrap ${
                activeTag === "All"
                  ? "bg-blue text-white"
                  : "bg-neutral-500/20 text-neutral-500 hover:bg-[#dce3ea]"
              }`}
            >
              All
            </button>

            {tags.map((tag) => (
              <button
                key={tag.name}
                onClick={() => setActiveTag(tag.name)}
                className={`flex items-center gap-[10px] px-3 lg:px-[18px] py-2 rounded-[10px] font-semibold border transition lg:text-xl max-lg:whitespace-nowrap ${
                  activeTag === tag.name
                    ? "bg-blue text-white"
                    : "bg-neutral-500/20 text-neutral-500 hover:bg-[#dce3ea]"
                }`}
              >
                {tag.icon && (
                  <Image
                    src={tag.icon}
                    alt={tag.name}
                    width={20}
                    height={20}
                    className={`object-contain transition flex-shrink-0 ${
                      activeTag === tag.name ? "invert brightness-0" : ""
                    }`}
                  />
                )}
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="my-container !ml-auto !mr-0 !pr-0">
        <div className="relative w-full max-lg:mt-8">
          {/* Scrollable wrapper with scrollbar */}
          <div>
            <div
              key={activeTag}
              ref={sliderRef}
              className="keen-slider flex gap-4"
            >
              {[...filtered, ...filtered].map((t) => (
                <div key={t.id} className="keen-slider__slide">
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <img
                      src={
                        t.image.startsWith("//") ? `https:${t.image}` : t.image
                      }
                      alt={t.name}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-5 text-center text-white gap-3">
                      <h3 className="text-2xl 2xl:text-3xl font-extrabold font-proxima leading-[120%] break-words w-full">
                        {t.masterSessionName}
                      </h3>
                      <p className="text-sm lg:text-[18px] font-proxima">
                        {t.name}
                      </p>
                    </div>
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
