import {
  FacebookSVG,
  InstagramSVG,
  LinkedInSVG,
  YoutubeSVG,
} from "@/assets/svgs";
import Link from "next/link";

const navLinks = [
  { name: "Who We Are", href: "/who-we-are" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "For Investors", href: "/investment" },
  { name: "Media", href: "/media" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: <FacebookSVG />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <InstagramSVG />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <LinkedInSVG />,
  },
  {
    name: "YouTube",
    href: "#",
    icon: <YoutubeSVG />,
  },
];

type Props = {
  onClose?: () => void;
};

export const NavbarMenu = ({ onClose }: Props) => (
  <div className="max-lg:flex-col flex lg:items-center gap-10 xl:gap-24 max-lg:justify-between max-lg:flex-1">
    <nav className="text-white font-bold xl:text-xl font-proxima flex max-lg:flex-col lg:items-center gap-7">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:opacity-80 transition"
          onClick={onClose}
        >
          {link.name}
        </Link>
      ))}
    </nav>

    <div className="flex items-center gap-5 max-lg:justify-center max-lg:w-full">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          aria-label={social.name}
          className="text-white hover:opacity-80"
        >
          {social.icon}
        </a>
      ))}
    </div>
  </div>
);
