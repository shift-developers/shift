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
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1 },
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
      <div className="flex items-center w-full justify-center">
        <div className="flex flex-wrap max-w-[850px] gap-[12px] justify-center mb-[60px] font-proxima">
          <button
            onClick={() => setActiveTag("All")}
            className={`px-[18px] py-[12px] rounded-[10px] font-semibold border transition text-[20px]  ${
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
              className={`flex items-center gap-[10px] px-[18px] py-[12px] rounded-[10px] font-semibold border transition  text-[20px] ${
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
                  className={`object-contain transition ${
                    activeTag === tag.name ? "invert brightness-0" : ""
                  }`}
                />
              )}
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full">
        {/* Scrollable wrapper with scrollbar */}
        <div className="">
          <div
            key={activeTag}
            ref={sliderRef}
            className="keen-slider min-h-[450px] h-[450px] w-max flex gap-4"
          >
            {filtered.map((t) => (
              <div
                key={t.id}
                className="keen-slider__slide !min-w-[300px] max-w-[300px] flex-shrink-0"
              >
                <div className="relative rounded-lg overflow-hidden shadow-md h-full max-h-[450px]">
                  <Image
                    src={
                      t.image.startsWith("//") ? `https:${t.image}` : t.image
                    }
                    alt={t.name}
                    width={300}
                    height={380}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 w-full text-white p-4 flex flex-col items-center h-[200px] gap-[14px] pb-[30px]">
                    <h3 className="text-[36px] font-extrabold text-center font-proxima leading-[120%] mt-auto">
                      {t.masterSessionName}
                    </h3>
                    <p className="text-[18px] font-proxima">{t.name}</p>
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 1 && (
              <div
                aria-hidden
                className="keen-slider__slide !min-w-[300px] max-w-[300px] flex-shrink-0 opacity-0 pointer-events-none"
              />
            )}
          </div>
        </div>

        {/* Right Fade Overlay */}
        <Image
          src="/images/fade.png"
          alt="Right fade"
          width={100}
          height={520}
          className="absolute right-0 top-0 h-full w-[400px] pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default TherapistSlider;
