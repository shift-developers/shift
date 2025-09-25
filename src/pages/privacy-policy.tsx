import Link from "next/link";

const PolicyLayout = ({ children, activePolicy }: { children: React.ReactNode; activePolicy: string }) => {
  return (
    <div className="min-h-screen bg-gray-50">
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
            <nav className="bg-white rounded-lg shadow-sm p-4">
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
          <main className="flex-1 bg-white rounded-lg shadow-sm p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <PolicyLayout activePolicy="privacy">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="mb-8">
          SHiFT APP INC ("SHiFT," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit our website www.shiftmastersessions.com, including any
          other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").
          Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the
          Site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>
        <p className="mb-8">
          Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic
          information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site
          or when you choose to participate in various activities related to the Site, such as online chat and message boards. You are
          under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from
          using certain features of the Site.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Derivative Data</h3>
        <p className="mb-8">
          Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your
          operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Financial Data</h3>
        <p className="mb-8">
          Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration
          date) that we may collect when you purchase, order, return, exchange, or request information about our services from the
          Site. We store only very limited, if any, financial information that we collect.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Your Information</h2>
        <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
        <ul className="list-disc ml-6 mb-8">
          <li>Create and manage your account.</li>
          <li>Process your transactions and send you related information.</li>
          <li>Email you regarding your account or order.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
          <li>Increase the efficiency and operation of the Site.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Notify you of updates to the Site.</li>
          <li>Offer new products, services, and/or recommendations to you.</li>
          <li>Perform other business activities as needed.</li>
          <li>Request feedback and contact you about your use of the Site.</li>
          <li>Resolve disputes and troubleshoot problems.</li>
          <li>Respond to product and customer service requests.</li>
          <li>Send you a newsletter.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Disclosure of Your Information</h2>
        <p className="mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">By Law or to Protect Rights</h3>
        <p className="mb-8">
          If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential
          violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted
          or required by any applicable law, rule, or regulation.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Business Transfers</h3>
        <p className="mb-8">
          We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets,
          financing, or acquisition of all or a portion of our business to another company.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Service Providers</h3>
        <p className="mb-8">
          We may share your information with third parties that perform services for us or on our behalf, including payment processing,
          data analysis, email delivery, hosting services, customer service, and marketing assistance.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Security of Your Information</h2>
        <p className="mb-8">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken
          reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security
          measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other
          type of misuse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Policy for Children</h2>
        <p className="mb-8">
          We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected
          personal information from a child under age 13 without verification of parental consent, we will delete that information as
          quickly as possible.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-8">
          We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-8">
          If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicyPage;