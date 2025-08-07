import React, { useState } from "react";
import {
  Logo,
  FacebookSVG,
  InstagramSVG,
  LinkedInSVG,
  YoutubeSVG,
} from "@/assets/svgs";
import Button from "./common/Button";

const footerSections = [
  {
    title: "Our lawyers told us to tell you",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookies Policy", href: "#" },
    ],
  },
  {
    title: "SHIFT",
    links: [
      { label: "Who We Are", href: "#" },
      { label: "What We Do", href: "#" },
      { label: "Who We Serve", href: "#" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "For Investors", href: "#" },
      { label: "Media", href: "#" },
      { label: "Join The Movement", href: "#" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous messages
    setMessage("");
    setIsError(false);

    // Validate email
    if (!email.trim()) {
      setMessage("Please enter your email address");
      setIsError(true);
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
      setIsError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would normally send the email to your backend/newsletter service
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate success
      setMessage("Thank you! You've been subscribed to our newsletter.");
      setIsError(false);
      setEmail(""); // Clear the input
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="relative text-white bg-cover bg-no-repeat pt-20 pb-12"
      style={{
        backgroundImage: "url('/images/background.png')",
        minHeight: "900px",
      }}
    >
      <div className="relative z-10 px-[160px] mx-auto w-full mt-[200px] flex flex-col justify-between">
        <div className="flex flex-row gap-8 lg:gap-12 mb-16 w-full justify-between">
          <div className="flex flex-col justify-start w-full max-w-[30%] gap-[20px]">
            <div className="mb-8">
              <Logo width={100} />
            </div>
            <p className="text-[20px] font-proxima font-bold leading-relaxed text-pure-white">
              Keep up to date with new releases, live events, giveaways and
              in-person events with our monthly SHIFT news update.
            </p>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex items-center gap-0 relative w-[400px]">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 py-2 rounded-full text-black text-sm focus:outline-none border-none w-full"
                  disabled={isSubmitting}
                />
                <div className="absolute right-[-10px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#1a4fa0] hover:bg-[#164080] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white px-6 py-2 rounded-full text-sm font-semibold"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
              {message && (
                <p
                  className={`text-xs mt-2 ${isError ? "text-yellow-200" : "text-green-300"}`}
                >
                  {message}
                </p>
              )}
            </form>
            <p className="text-[16px] text-pure-white leading-relaxed">
              By subscribing, you agree to our{" "}
              <a href="#" className="underline hover:no-underline">
                Privacy Policy
              </a>{" "}
              and provide your consent to receive updates from SHIFT. We will
              never share your info with anyone.
            </p>
            <div className="text-[16px] text-pure-white font-proxima font-bold">
              Copyright @ 2025 | SHIiFT App Inc | All rights reserved.
            </div>
          </div>

          <div className="flex gap-[60px] ml-auto mt-[100px] items-start">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-[40px] text-pure-white font-bold font-proxima text-[20px]">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[16px] font-bold font-proxima text-pure-white hover:text-white/80 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex items-center gap-6">
              <FacebookSVG className="cursor-pointer hover:scale-110 transition-all duration-300" />
              <InstagramSVG className="cursor-pointer hover:scale-110 transition-all duration-300" />
              <LinkedInSVG className="cursor-pointer hover:scale-110 transition-all duration-300" />
              <YoutubeSVG className="cursor-pointer hover:scale-110 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
