import { useMemo } from "react";

type Props = {
  therapists: Therapist[];
};

export const TherapistsGroups = ({ therapists }: Props) => {
  const groupBySessionNumber = useMemo(() => {
    return therapists.reduce((acc: Record<number, Therapist[]>, therapist) => {
      acc[therapist.sessionNumber] = [
        ...(acc[therapist.sessionNumber] || []),
        therapist,
      ];
      return acc;
    }, {});
  }, [therapists]);

  return (
    <section className="my-20 lg:my-[200px] px-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 lg:gap-32">
        {Object.entries(groupBySessionNumber).map(
          ([sessionNum, therapistsInGroup]) => (
            <div key={sessionNum} className="flex flex-col items-center w-full">
              <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-center lg:w-1/2 mb-14">
                Meet Your MasterSession™ Season {sessionNum} Therapists
              </h2>

              <div className="flex flex-wrap justify-center gap-20">
                {therapistsInGroup.map((therapist) => (
                  <div
                    key={therapist.id}
                    className="text-center flex flex-col items-center gap-5"
                  >
                    <div
                      className="size-[350px] rounded-full"
                      style={{
                        backgroundImage: `url(${therapist.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                      }}
                    />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-3xl font-gothic font-semibold">
                        {therapist.name}
                      </h4>
                      <p className="text-gray-600 text-xl font-proximanova">
                        {therapist.specialization}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
