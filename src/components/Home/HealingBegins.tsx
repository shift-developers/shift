import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
import Button from "../common/Button";

const InviteFriendButtonComponent = () => {
  const emailBody = `Hey [Friend's Name],

I just discovered something really special, and it made me think of you.

It's called SHiFT, and it just feels real. It's a space for personal growth, led by therapists who are sharing the messy, honest stuff they've been through and how it led them to help others. No theory heavy talking heads - just humans being human that makes you think, "I could actually do this, too."

Wherever you are on your growth journey, it meets you exactly where you are. You can go solo at your own pace or join a new kind of community learning experience where you're doing the work alongside a million growth buddies.

Check it out here: https://www.shiftmastersessions.com/

Just felt like this was something worth passing along.

Love,
[Your Name]`;

  const mailtoLink = `mailto:?subject=${encodeURIComponent("Check out SHiFT - Something special I wanted to share")}&body=${encodeURIComponent(emailBody)}`;

  return (
    <a
      href={mailtoLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        text="Invite a friend"
        type="secondary"
        className="lg:w-[200px]"
      />
    </a>
  );
};

const InviteFriendButton = dynamic(
  () => Promise.resolve(InviteFriendButtonComponent),
  {
    ssr: false,
  }
);

const HealingBegins = () => {
  return (
    <section className="relative flex items-center justify-center mb-40">
      <img
        src="/images/abstract-1.png"
        alt="abstract"
        className="w-full max-lg:h-[1220px]"
      />
      <div className="absolute inset-0 z-10 flex">
        <div className="my-container flex-1 flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="text-white text-left gap-[30px] flex flex-col max-w-[600px]">
              <h1 className="text-3xl lg:text-4xl md:text-6xl font-gothic font-bold">
                This is where healing begins.
              </h1>
              <p className="lg:text-[24px] text-proxima leading-relaxed text-pure-white">
                Whether you&apos;re starting fresh or going deeper, SHiFT helps
                you create your Best Year Ever - emotionally, mentally, and
                relationally.
              </p>
              <div className="flex flex-row gap-4">
                <Button
                  href="https://shiftmastersessions.kit.com/02136d09de"
                  text="Join Waitlist"
                  type="primary"
                  color="blue"
                  className="lg:w-[200px]"
                />
                <InviteFriendButton />
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
