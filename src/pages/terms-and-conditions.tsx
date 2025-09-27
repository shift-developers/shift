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
          <main className="flex-1 bg-white rounded-lg p-8 lg:px-12 xl:px-16">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

const TermsAndConditionsPage = () => {
  return (
    <PolicyLayout activePolicy="terms">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

        <p className="mb-8">
          These terms of use ("Terms") govern your use of the websites, subdomains, products, and services SHiFT APP INC or its
          affiliates ("SHiFT", "us", "our", and "we"), including, without limitation, your use of www.shiftmastersessions.com, any other SHiFT
          websites, and any mobile applications made available to you by SHiFT (collectively, the "Services"). SHiFT owns all rights, title
          and interest in and to our Services, including all intellectual property rights, and any suggestions, ideas or other feedback
          provided by you to us relating to our Services. We will solely and exclusively own any copy, modification, revision, enhancement,
          adaptation, translation, or derivative work of or created from our Services. As between you and us, we own any and all patent
          rights, copyrights, trade secret rights, trademark rights, and all other proprietary rights relating to our Services. Except for that
          information which is in the public domain, meaning such information exists in a location other than on our website behind
          registration, you may not copy, modify, publish, transmit, distribute, or sell any of our proprietary information without express
          written permission. Certain features of the Services may be subject to additional guidelines, terms, or rules, which may be
          additionally shared when engaging with such features. All such additional terms, guidelines, and rules, including our Privacy
          Policy (as defined below), are incorporated by reference into these terms of use (together, these "Terms").
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What do these Terms cover?</h2>
        <p className="mb-8">
          These Terms are the terms and conditions that govern your access to, and use of, the Services. The Services are not intended
          for individuals below 18 years of age and you should not use or access the Services (and/or accept these Terms) if you are
          below 18 years of age.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Why should you read these Terms?</h2>
        <p className="mb-8">
          These terms create a legally binding agreement between you and us. By accessing or using the Services, you are accepting
          these Terms. You confirm that you can enter the agreement. You confirm and promise to us that you have the right, authority,
          and legal capacity to enter into these Terms. If you are accessing or using the Services on behalf of another person or entity,
          you confirm that you are authorized to accept these Terms on that person or entity's behalf and that the person or entity
          agrees to be responsible to us if you or the other person or entity violates these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
        <p className="mb-8">
          By accessing or using our Services, you signify that you have read, understood, and agree to be bound by these Terms and our
          Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms or the Privacy Policy, you must
          not access or use our Services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
        <p className="mb-8">
          We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this
          page and updating the "Last Updated" date. Your continued use of the Services after any such changes constitutes your
          acceptance of the new Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
        <p className="mb-8">
          You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
        </p>
        <ul className="list-disc ml-6 mb-8">
          <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
          <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
          <li>To impersonate or attempt to impersonate SHiFT, a SHiFT employee, another user, or any other person or entity</li>
          <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
          <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Account Registration</h2>
        <p className="mb-8">
          To access certain features of our Services, you may be required to register for an account. You agree to provide accurate,
          current, and complete information during the registration process and to update such information to keep it accurate, current,
          and complete. You are responsible for safeguarding your account password and for any activities or actions under your
          account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Policy</h2>
        <p className="mb-8">
          Your use of our Services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the Site
          and informs users of our data collection practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
        <p className="mb-8">
          If you have any questions about these Terms, please contact us at:
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

export default TermsAndConditionsPage;