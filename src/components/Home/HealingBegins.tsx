import React from "react";
import Image from "next/image";
import Button from "../common/Button";

const HealingBegins = () => {
  return (
    <section className="relative flex items-center justify-center mb-40">
      <img src="/images/abstract-1.png" alt="abstract" className="w-full max-lg:h-[1220px]" />
      <div className="absolute inset-0 z-10 flex">
        <div className="my-container flex-1 flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="text-white text-left gap-[30px] flex flex-col max-w-[600px]">
              <h1 className="text-3xl lg:text-4xl md:text-6xl font-gothic font-bold">
                This is where healing begins.
              </h1>
              <p className="lg:text-[24px] text-proxima leading-relaxed text-pure-white">
                Whether you&apos;re starting fresh or going deeper, SHiFT helps
                you create your Best Year Ever—emotionally, mentally, and
                relationally. Be part of the change.
              </p>
              <p className="lg:text-[24px] text-proxima italic text-pure-white">
                Beta members get exclusive access, special events, and founding
                perks.
              </p>
              <div className="flex flex-row gap-4">
                <Button
                  href="/"
                  text="Join Now"
                  type="primary"
                  color="blue"
                  className="lg:w-[200px]"
                />
                <Button
                  href="/"
                  text="Invite a friend"
                  type="secondary"
                  className="lg:w-[200px]"
                />
              </div>
            </div>

            <Image
              src="/images/shift-phone.png"
              alt="SHiFT app on phone"
              width={320}
              height={640}
              className="w-64 md:w-80 h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealingBegins;
