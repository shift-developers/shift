import {
  FacebookSVG,
  InstagramSVG,
  LinkedInSVG,
  Logo,
  YoutubeSVG,
} from "@/assets/svgs";

// components/Navbar.tsx
const navLinks = [
  { name: "Who We Are", href: "#who" },
  { name: "What We Do", href: "#what" },
  { name: "For Investors", href: "#investors" },
  { name: "Media", href: "#media" },
  { name: "Join Us", href: "#join" },
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

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-blue/40 shadow-sm">
      <div className=" mx-auto py-[20px] flex items-center justify-between px-[160px]">
        <Logo width={100} />
        <div className="flex items-center gap-[100px]">
          <nav className="hidden md:flex space-x-8 text-white font-bold text-[20px] font-proxima">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:opacity-80 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex space-x-4 items-center">
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
      </div>
    </header>
  );
}
