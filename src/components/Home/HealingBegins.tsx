import React from "react";
import Image from "next/image";
import Button from "../common/Button";

const HealingBegins = () => {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-no-repeat pt-40 mb-40"
      style={{
        backgroundImage: "url('/images/abstract-1.png')",
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-5 lg:px-32 xl:px-48 pb-20 lg:pb-[600px]">
        {/* Left Section - Text and CTA */}
        <div className="lg:flex-1 text-white text-left gap-[30px] flex flex-col">
          <h1 className="text-3xl lg:text-4xl md:text-6xl font-gothic font-bold text-[48px]">
            This is where healing begins.
          </h1>
          <p className="lg:text-[24px] text-proxima leading-relaxed text-pure-white">
            Whether you&apos;re starting fresh or going deeper, SHiFT helps you
            create your Best Year Ever—emotionally, mentally, and relationally.
            Be part of the change.
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

        {/* Right Section - Phone Mockup */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
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
