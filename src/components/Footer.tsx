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

const socialLinks = [
  { name: "Facebook", href: "#", icon: "fab fa-facebook-f" },
  { name: "Instagram", href: "#", icon: "fab fa-instagram" },
  { name: "LinkedIn", href: "#", icon: "fab fa-linkedin-in" },
  { name: "YouTube", href: "#", icon: "fab fa-youtube" },
];

export default function Footer() {
  return (
    <footer
      className="text-white bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Newsletter */}
        <div className="md:col-span-2">
          <div className="text-xl font-semibold mb-4">SHIFT</div>
          <p className="text-sm mb-4">
            Keep up to date with new releases, live events, giveaways and
            in-person events with our monthly SHIFT news update
          </p>
          <form className="flex items-center space-x-2 mb-2">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-full w-full text-black"
            />
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 transition text-white px-5 py-2 rounded-full"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-white/80 mt-2">
            By subscribing, you agree to our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and provide your consent to receive updates from SHIFT. We will
            never share your info with anyone.
          </p>
        </div>

        {/* Dynamic Footer Sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Socials + Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6">
        <div className="text-xs text-center md:text-left">
          Copyright © 2025 | SHIFT App Inc | All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="hover:opacity-80"
            >
              <i className={`${social.icon} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
