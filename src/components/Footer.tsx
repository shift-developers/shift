import React, { useState } from "react";
import {
  Logo,
  FacebookSVG,
  InstagramSVG,
  LinkedInSVG,
  YoutubeSVG,
} from "@/assets/svgs";
import Link from "next/link";

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
      { label: "Who We Are", href: "/who-we-are" },
      { label: "What We Do", href: "/what-we-do" },
    ],
  },
  {
    title: "Get Involved",
    links: [{ label: "For Investors", href: "/investment" }],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/shiftmastersessions",
    icon: FacebookSVG,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shift_mastersessions/",
    icon: InstagramSVG,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/shift-mastersessions/posts/?feedView=all",
    icon: LinkedInSVG,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@theshiftmastersessions",
    icon: YoutubeSVG,
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
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Something went wrong. Please try again.");
        setIsError(true);
        return;
      }

      setMessage("Thank you! You've been subscribed to our newsletter.");
      setIsError(false);
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setMessage("Something went wrong. Please try again.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="relative text-white pb-4 md:pb-14 bg-cover bg-no-repeat pt-[200px]"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
    >
      <div className="my-container flex items-end">
        <div className="relative z-[1] flex flex-col gap-8 2xl:gap-24 w-full">
          <div className="flex">
            <div className="flex flex-col 2xl:flex-row 2xl:items-start gap-8 lg:gap-16 w-full">
              <div className="lg:flex-1 flex lg:items-start lg:justify-between flex-col lg:flex-row max-lg:gap-8">
                <div className="flex flex-col lg:max-w-[350px] xl:max-w-[450px]">
                  <div className="mb-8">
                    <Logo className="size-[100px]" />
                  </div>
                  <p className="md:text-xl font-proxima font-bold leading-relaxed text-pure-white">
                    Keep up to date with new releases, live events, giveaways
                    and in-person events with our SHiFT news update.
                  </p>
                  <form onSubmit={handleSubmit} className="my-4">
                    <div className="flex items-center gap-0 relative">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-6 pr-24 lg:pr-36 py-3 lg:py-3.5 rounded-full text-black text-base focus:outline-none border-none w-full"
                        disabled={isSubmitting}
                      />
                      <div className="absolute right-0">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#1a4fa0] hover:bg-[#164080] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white px-6 lg:px-12 py-3 lg:py-3.5 rounded-full text-base font-semibold"
                        >
                          {isSubmitting ? "Sending..." : "Send"}
                        </button>
                      </div>
                    </div>
                    {message && (
                      <p
                        className={`text-xs mt-2 ${
                          isError ? "text-yellow-200" : "text-green-300"
                        }`}
                      >
                        {message}
                      </p>
                    )}
                  </form>
                  <p className="text-sm md:text-base text-pure-white leading-relaxed">
                    By subscribing, you agree to our{" "}
                    <a href="#" className="underline hover:no-underline">
                      Privacy Policy
                    </a>{" "}
                    and provide your consent to receive updates from SHIFT. We
                    will never share your info with anyone.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:flex items-start gap-8 xl:gap-12 lg:mt-[132px]">
                  {footerSections.map((section) => (
                    <div key={section.title}>
                      <h4 className="mb-5 md:mb-10 text-pure-white font-bold font-proxima text-xl max-w-[150px]">
                        {section.title}
                      </h4>
                      <ul className="flex flex-col gap-4 md:gap-6">
                        {section.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-sm md:text-base font-bold font-proxima text-pure-white hover:text-white/80 transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-5 2xl:mt-[132px]">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="text-white hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="cursor-pointer hover:scale-110 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-sm md:text-base text-pure-white font-proxima font-bold">
            Copyright @ 2025 | SHIiFT App Inc | All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
