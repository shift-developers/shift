import Link from "next/link";

export default function PolicyLayout({
  children,
  activePolicy,
}: {
  children: React.ReactNode;
  activePolicy: string;
}) {
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
                      color: activePolicy === "terms" ? "#2563eb" : "#4b5563",
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
                      color: activePolicy === "privacy" ? "#2563eb" : "#4b5563",
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
                      color: activePolicy === "cookie" ? "#2563eb" : "#4b5563",
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
}
