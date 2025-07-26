import Image from "next/image";
import Button from "../common/Button";

const ShiftIntro = () => (
  <div className="flex flex-col gap-[200px] max-w-7xl mx-auto mb-[220px]">
    <div className="flex  items-center gap-[200px]">
      <div className="flex flex-col gap-[34px] w-[50%]">
        <h3 className="text-black text-[48px] font-gothic font-bold">
          Therapy Reimagined. Healing, Redefined.
        </h3>
        <p className="text-neutral-750 text-[24px] font-proxima flex flex-col">
          SHiFT is a mental health platform like nothing you&apos;ve seen
          before. Our MasterSessions are immersive video experiences that
          deliver raw, honest, deeply human stories and lessons presented by
          therapists who&apos;ve turned their own pain into purpose. This
          isn&apos;t just clinical theory. It&apos;s lived wisdom designed to
          help you grow, heal, and transform.
          <br />
          <span className="mt-[20px]">
            Whether you&apos;re seeking to heal, grow, or simply feel less
            alone—SHiFT meets you where you are.
          </span>
        </p>
        <div className="flex gap-[20px] w-full">
          <Button
            text="Join the Beta"
            href="/"
            type="primary"
            className="text-[18px] w-[220px]"
            color="blue"
          />
          <Button
            text="Watch a Free Preview"
            href="/"
            type="secondary"
            className="text-[18px] w-[250px] border-blue text-blue hover:bg-blue hover:text-pure-white"
          />
        </div>
      </div>
      <Image
        src="/images/therapy-reimagined.png"
        width={299}
        height={358}
        alt="Therapy Reimagined"
      />
    </div>
    <div className="flex  items-center gap-[200px]">
      <Image
        src="/images/head-puzzle.png"
        width={299}
        height={358}
        alt="Therapy Reimagined"
      />
      <div className="flex flex-col gap-[34px] w-[60%]">
        <h3 className="text-black text-[48px] font-gothic font-bold">
          Our content breaks the mold.
        </h3>
        <p className="text-neutral-750 text-[24px] font-proxima flex flex-col">
          SHiFT MasterSessions is a groundbreaking video series that redefines
          what it means to learn from a therapist.
          <span className="mt-[20px]">
            This isn&apos;t theory-heavy, talking-head education. It&apos;s
            something far more powerful. We shatter the illusion of the
            all-knowing expert and pull back the curtain to reveal the untold
            stories of therapists who have faced their own struggles, done the
            work, and now use that hard-won wisdom to guide others.
          </span>
          <span className="mt-[20px]">
            Some of the topics they teach through their personal stories of
            resilience include Trauma, Communication, Imposter Syndrome,
            Burnout, Suicide, and Finding Your Voice. This humanistic approach
            not only provides the insights, awareness, and skills needed to
            shift from a victim mindset to one of empowerment - but reminds us
            that change is possible when we are willing to do the work.
          </span>
        </p>
        <p className="font-bold text-[24px] text-black italic">
          Relatable. Inspirational. Deeply human.
        </p>
      </div>
    </div>
  </div>
);

export default ShiftIntro;
