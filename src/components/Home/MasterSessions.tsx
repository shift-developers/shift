import { Check, LogoColor } from "@/assets/svgs";
import Button from "../common/Button";

const MasterSessions = () => {
  return (
    <section className="w-full mb-[240px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-[45px] items-center">
        <div className="w-full">
          <h2 className="text-[48px] font-light leading-tight font-gothic">
            Master new skills with <br />
            <span className="font-bold">SHiFT MasterSessions</span>
          </h2>

          <p className="text-[24px] text-neutral-750 mt-[20px] font-medium">
            Getting Started Is Simple:
          </p>

          <ul className="mt-[40px] flex flex-col gap-[30px] text-black text-[22px] font-proxima">
            <li className="flex gap-[20px]">
              <Check />
              <span>Choose a MasterSession that speaks to you.</span>
            </li>
            <li className="flex gap-[20px]">
              <div>
                <Check />
              </div>
              <span>
                Join our MasterSession livestreams, events, and Q&As, or move
                through it solo.
              </span>
            </li>
            <li className="flex gap-[20px]">
              <Check />
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
        <div className="flex flex-col items-center bg-pure-white rounded-2xl shadow-md py-[50px] px-[40px] h-full mx-auto gap-[25px]">
          <div className="flex justify-center mb-6">
            <LogoColor width={55} />
          </div>

          <h3 className="text-[48px] font-gothic font-bold text-center">
            SHiFT MasterSessions
          </h3>
          <div className="flex flex-col gap-[14px] items-center">
            <div className="flex items-center">
              <p className="text-center text-[30px] font-bold font-gothic">
                $49
              </p>
              <span className="text-sm font-normal text-[22px] font-proxima mt-[12px]">
                /month, less than a single therapy session
              </span>
            </div>

            <Button
              type="primary"
              color="blue"
              text="Begin Journey"
              href="/"
              className="w-[270px]"
            />
          </div>
          <div className="flex flex-col items-center gap-[14px]">
            <p className="text-center text-[30px] font-bold font-gothic">
              $29
              <span className="text-sm font-normal text-[22px] font-proxima mt-[12px]">
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
