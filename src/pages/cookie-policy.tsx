/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const PolicyLayout = ({ children, activePolicy }: { children: React.ReactNode; activePolicy: string }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section
        className="relative pt-32 pb-20 z-[10]"
        style={{
          backgroundImage: "url('/images/background-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="h-14 lg:h-20"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 px-4">
            <nav className="bg-white rounded-lg p-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className={`block px-4 py-2 transition ${
                      activePolicy === "terms"
                        ? "underline font-medium"
                        : "hover:text-gray-900"
                    }`}
                    style={{
                      color: activePolicy === "terms" ? "#2563eb" : "#4b5563"
                    }}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className={`block px-4 py-2 transition ${
                      activePolicy === "privacy"
                        ? "underline font-medium"
                        : "hover:text-gray-900"
                    }`}
                    style={{
                      color: activePolicy === "privacy" ? "#2563eb" : "#4b5563"
                    }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className={`block px-4 py-2 transition ${
                      activePolicy === "cookie"
                        ? "underline font-medium"
                        : "hover:text-gray-900"
                    }`}
                    style={{
                      color: activePolicy === "cookie" ? "#2563eb" : "#4b5563"
                    }}
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 bg-white rounded-lg p-8 lg:px-12 xl:px-16">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

const CookiePolicyPage = () => {
  return (
    <PolicyLayout activePolicy="cookie">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

        <p className="mb-8">
          This Cookie Policy explains how SHiFT APP INC ("SHiFT," "we," "us," or "our") uses cookies and similar technologies to
          recognize you when you visit our website at www.shiftmastersessions.com ("Website"). It explains what these technologies are
          and why we use them, as well as your rights to control our use of them.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
        <p className="mb-8">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely
          used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting
          information.
        </p>

        <p className="mb-8">
          Cookies set by the website owner (in this case, SHiFT) are called "first party cookies." Cookies set by parties other than the
          website owner are called "third party cookies." Third party cookies enable third party features or functionality to be provided
          on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third party cookies
          can recognize your computer both when it visits the website in question and also when it visits certain other websites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why do we use cookies?</h2>
        <p className="mb-8">
          We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our
          Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track
          and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through
          our Website for advertising, analytics, and other purposes. This is described in more detail below.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of cookies we use</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Essential website cookies</h3>
        <p className="mb-8">
          These cookies are strictly necessary to provide you with services available through our Website and to use some of its features,
          such as access to secure areas. Without these cookies, services you have asked for cannot be provided.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Performance and functionality cookies</h3>
        <p className="mb-8">
          These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use.
          However, without these cookies, certain functionality may become unavailable.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Analytics and customization cookies</h3>
        <p className="mb-8">
          These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or
          how effective our marketing campaigns are, or to help us customize our Website for you.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Advertising cookies</h3>
        <p className="mb-8">
          These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad
          from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting
          advertisements that are based on your interests.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Social networking cookies</h3>
        <p className="mb-8">
          These cookies are used to enable you to share pages and content that you find interesting on our Website through third party
          social networking and other websites. These cookies may also be used for advertising purposes too.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How can you control cookies?</h2>
        <p className="mb-8">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your
          preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you
          accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
        </p>

        <p className="mb-8">
          You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may
          still use our website though your access to some functionality and areas of our website may be restricted. As the means by
          which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's
          help menu for more information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How often will we update this Cookie Policy?</h2>
        <p className="mb-8">
          We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for
          other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about
          our use of cookies and related technologies.
        </p>

        <p className="mb-8">
          The date at the bottom of this Cookie Policy indicates when it was last updated.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Where can you get further information?</h2>
        <p className="mb-8">
          If you have any questions about our use of cookies or other technologies, please email us at support@shiftmastersessions.com
          or contact us at:
          <br />
          SHiFT APP INC
          <br />
          Email: support@shiftmastersessions.com
        </p>

        <p className="text-sm text-gray-600 mt-12">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </PolicyLayout>
  );
};

export default CookiePolicyPage;