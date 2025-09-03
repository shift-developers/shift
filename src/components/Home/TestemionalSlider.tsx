import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Quote, ArrowLeft, ArrowRight } from "@/assets/svgs";
import { useState } from "react";
import { Testimonial } from "@/lib/contentful/testimonials";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1301px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      const slideIndex = slider.track.details.rel;
      setCurrentSlide(slideIndex + 1);
    },
  });

  const next = () => {
    if (instanceRef.current) {
      instanceRef.current.next();
    }
  };

  const prev = () => {
    if (instanceRef.current) {
      instanceRef.current.prev();
    }
  };

  const isSlideActive = (slideIndex: number) => {
    return slideIndex === currentSlide;
  };

  return (
    <section className="my-container">
      <div className="flex flex-col items-center justify-center text-center gap-[20px] lg:mb-[100px]">
        <h2 className="text-3xl lg:text-5xl font-gothic font-bold">
          What They Say About Our
          <br />
          MasterSessions
        </h2>
        <p className="text-gray-750 lg:text-2xl font-proxima max-w-2xl mx-auto">
          Hear from our users who have transformed their lives with SHiFT&apos;s
          authentic and empowering MasterSessions.
        </p>
      </div>

      <div className="relative lg:mt-12 flex justify-center">
        <div ref={sliderRef} className="keen-slider py-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-pure-white rounded-xl shadow-md p-[30px] flex flex-col justify-between text-center transition-all duration-300 ease-in-out"
              style={{
                transform: `scale(${isSlideActive(i) ? 1 : 0.6})`,
                opacity: isSlideActive(i) ? 1 : 0.5,
              }}
            >
              <Quote className="text-[#006FFF] mb-4 mx-auto" width={78} />
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {t.quote.replace(/"/g, "")}
              </p>
              <div className="mt-auto">
                <p className="text-sm font-bold text-[#001b52]">{t.name}</p>
                <p className="text-sm font-medium text-gray-600">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 max-lg:hidden"
            >
              <ArrowLeft width={22} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 max-lg:hidden"
            >
              <ArrowRight width={22} />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default TestimonialSlider;
