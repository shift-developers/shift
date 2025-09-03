import { Check, LogoColor } from "@/assets/svgs";
import Button from "../common/Button";

const MasterSessions = () => {
  return (
    <section className="my-container my-14 lg:my-64">
      <div className="grid lg:grid-cols-2 gap-[45px] items-center">
        <div className="w-full">
          <h2 className="text-3xl lg:text-5xl font-light leading-tight font-gothic">
            Master new skills with <br className="max-lg:hidden" />
            <span className="font-bold">SHiFT MasterSessions</span>
          </h2>

          <p className="text-[24px] text-neutral-750 mt-[20px] font-medium">
            Getting Started Is Simple:
          </p>

          <ul className="pt-5 lg:mt-10 flex flex-col gap-5 lg:gap-[30px] text-black lg:text-[22px] font-proxima">
            <li className="flex gap-3 lg:gap-5">
              <Check className="max-lg:!size-6" />
              <span>Choose a MasterSession that speaks to you.</span>
            </li>
            <li className="flex gap-3 lg:gap-5">
              <div>
                <Check className="max-lg:!size-6" />
              </div>
              <span>
                Join our MasterSession livestreams, events, and Q&As, or move
                through it solo.
              </span>
            </li>
            <li className="flex gap-3 lg:gap-5">
              <Check className="max-lg:!size-6" />
              <span>
                Use the workbooks to turn learning into lasting change.
              </span>
            </li>
          </ul>

          <p className="italic text-black mt-[40px] font-proxima">
            No perfection. Just progress. Healing starts where you are.
          </p>
        </div>

        {/* Right Card */}
        <div className="flex flex-col items-center bg-pure-white rounded-2xl shadow-md p-7 lg:py-[50px] lg:px-[40px] h-full mx-auto gap-[25px]">
          <div className="flex justify-center mb-6">
            <LogoColor width={55} />
          </div>

          <h3 className="text-3xl lg:text-5xl font-gothic font-bold text-center">
            SHiFT MasterSessions
          </h3>
          <div className="flex flex-col gap-[14px] items-center">
            <div className="flex items-center">
              <p className="text-center text-2xl lg:text-[30px] font-bold font-gothic">
                $49
              </p>
              <span className="text-sm font-normal lg:text-[22px] font-proxima mt-[12px]">
                /month, less than a single therapy session
              </span>
            </div>

            <Button
              type="primary"
              color="blue"
              text="Coming Soon"
              href="/"
              className="w-[270px]"
            />
          </div>
          <div className="flex flex-col items-center gap-[14px]">
            <p className="text-center text-2xl lg:text-[30px] font-bold font-gothic">
              $29
              <span className="text-sm font-normal lg:text-[22px] font-proxima mt-[12px]">
                /month, founders rate, for our beta
              </span>
            </p>

            <Button
              type="secondary"
              color="blue"
              text="Join Waitlist"
              href="/"
              className="w-[270px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterSessions;
