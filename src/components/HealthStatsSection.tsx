import {
  HeadPuzzleGreen,
  HealthGroup,
  PercentageCircleChart,
} from "@/assets/svgs";
import React from "react";

export const HealthStatsSection = () => {
  return (
    <section className="px-5 max-w-6xl mx-auto mb-20 lg:mb-44 lg:pt-[100px]">
      <div className="flex flex-col gap-5 lg:gap-10">
        <div className="flex max-lg:flex-col lg:items-end gap-5 lg:gap-10">
          <div className="flex flex-col gap-5 items-center py-7 px-5 bg-white rounded-[20px] shadow-xl w-full lg:w-fit">
            <h2 className="text-3xl lg:text-5xl font-gothic font-bold">
              1 in 5
            </h2>
            <p className="text-neutral-750 lg:text-2xl font-proxima">
              Adults in US that struggle with
              <br className="hidden lg:block" /> mental health issues
            </p>
            <HeadPuzzleGreen className="max-lg:size-44" />
          </div>

          <div className="flex flex-col gap-5 items-center py-7 px-5 bg-white rounded-[20px] shadow-xl max-lg:w-full lg:flex-1">
            <div className="flex max-lg:flex-col lg:items-center gap-5">
              <PercentageCircleChart className="max-lg:size-24" />
              <h2 className="text-3xl lg:text-5xl font-gothic font-bold">
                people want <br className="hidden lg:block" /> emotional
                maturity
              </h2>
            </div>
            <p className="text-neutral-750 lg:text-2xl font-proxima">
              5000 adults surveyed want “emotional maturity” more than any other
              quality in a partner
            </p>
          </div>
        </div>

        <div className="flex max-lg:flex-col gap-5 items-center py-7 px-5 bg-white rounded-[20px] shadow-xl w-full">
          <div className="flex-1 flex flex-col gap-5">
            <h2 className="text-3xl lg:text-5xl font-gothic font-bold">
              SHiFT is the solution.
            </h2>
            <p className="text-neutral-750 lg:text-2xl font-proxima">
              SHiFT delivers therapist-led MasterSessions and a revolutionary
              community learning model that combines clinical and lived expertise
              to make transformational mental health support accessible,
              self-paced, and powerfully effective.
            </p>
          </div>
          <HealthGroup />
        </div>
      </div>
    </section>
  );
};
