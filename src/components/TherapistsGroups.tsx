import { useMemo } from "react";

type Props = {
  therapists: Therapist[];
};

export const TherapistsGroups = ({ therapists }: Props) => {
  const groupedTherapists = useMemo(() => {
    const groups: Record<string, Therapist[]> = {};

    therapists.forEach((therapist) => {
      therapist.sessionTags.forEach((tag) => {
        if (!groups[tag.name]) {
          groups[tag.name] = [];
        }
        groups[tag.name].push(therapist);
      });
    });

    return groups;
  }, [therapists]);

  return (
    <section className="my-20 lg:my-[200px] px-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-14 lg:gap-32">
        {Object.entries(groupedTherapists).map(
          ([tagName, therapistsInGroup]) => (
            <div key={tagName} className="flex flex-col items-center w-full">
              <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-center lg:w-1/2 mb-14">
                {tagName}
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
                        {therapist.masterSessionName}
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
