import React from "react";

export const InfoBanner = () => {
  return (
    <section className="relative bg-dark-blue my-20 lg:my-96">
      <img src="/images/blue-section-top-vector.png" alt="shift" className="w-full absolute bottom-[95%] lg:bottom-[80%]" />
      <img src="/images/blue-section-bottom-vector.png" alt="shift" className="w-full absolute bottom-0 lg:-bottom-[150px] xl:-bottom-[200px] 2xl:-bottom-[250px] z-[1]" />
      <img src="/images/dark-blue-bottom-vector.png" alt="shift" className="w-full absolute bottom-10 lg:-bottom-24" />
      <div className="px-5 lg:px-32 xl:px-48 text-white relative">
        <div className="flex flex-col gap-5 lg:ml-20">
          <p className="text-xl 2xl:text-3xl font-proxima font-bold uppercase">
            head of investor relations
          </p>
          <h2 className="text-6xl 2xl:text-9xl font-gothic font-bold uppercase max-lg:mb-6">
            Lauren mahoney
          </h2>
        </div>
        <div className="flex max-lg:flex-col-reverse gap-10">
          <img
            src="/images/woman.png"
            alt="shift"
            className="w-full md:size-1/2 max-md:-ml-5"
          />
          <div className="flex flex-col max-w-[533px] gap-5 pt-10">
            <h3 className="text-2xl 2xl:text-4xl font-gothic font-bold">
              Embark on a journey with us.
            </h3>
            <p className="text-base 2xl:text-2xl font-proxima font-bold">
              Book your meeting today and become a part of reshaping the mental
              health and personal wellness industry.
            </p>
            <a
              href="mailto:lauren@shiftmastersessions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base 2xl:text-2xl font-proxima font-bold"
            >
              lauren@shiftmastersessions.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
