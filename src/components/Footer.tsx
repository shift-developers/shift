import React, { useState } from "react";
import {
  LogoWhite,
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
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookies Policy", href: "/cookie-policy" },
    ],
  },
  {
    title: "SHiFT",
    links: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "What We Do", href: "/what-we-do" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "For Investors", href: "/investment" },
      { label: "Contact Us", href: "/contact-us" },
    ],
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
      className="relative text-white pb-8 md:pb-14 bg-cover bg-no-repeat pt-[200px]"
      data-footer-version="v5-min-width-no-wrap-2024-11-27"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
    >
      <div className="my-container">
        <div className="flex flex-col gap-16">
          {/* Top Section: Logo, Newsletter, and Social Icons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Logo and Newsletter */}
            <div className="flex flex-col max-w-[500px]">
              <div className="mb-8">
                <LogoWhite className="size-[100px]" />
              </div>
              <p className="text-[18px] md:text-[20px] font-proxima font-bold leading-relaxed text-pure-white mb-4">
                Keep up to date with new releases, live events, giveaways
                and in-person events with our SHiFT news update.
              </p>
              <form onSubmit={handleSubmit} className="mb-4">
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
              <p className="text-[14px] text-pure-white/80 leading-relaxed">
                By subscribing, you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:no-underline">
                  Privacy Policy
                </Link>{" "}
                and provide your consent to receive updates from SHiFT. We
                will never share your info with anyone.
              </p>
            </div>

            {/* Right: Footer Links and Social Icons */}
            <div className="flex flex-col gap-12 lg:justify-end">
              {/* Footer Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
                {footerSections.map((section) => (
                  <div key={section.title} className="flex flex-col min-w-[140px] sm:min-w-[160px]">
                    <h4 className="text-pure-white font-bold font-proxima text-[16px] sm:text-[18px] md:text-[18px] lg:text-[18px] whitespace-nowrap sm:whitespace-normal mb-4 sm:mb-6">
                      {section.title}
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-[14px] md:text-[16px] font-proxima text-pure-white/90 hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 lg:justify-end">
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

          {/* Copyright */}
          <div className="text-[14px] md:text-[16px] text-pure-white font-proxima font-bold border-t border-white/20 pt-6">
            © 2025 | SHiFT App Inc | All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
