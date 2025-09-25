import React, { useState } from "react";
import { Plus } from "@/assets/svgs";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is SHiFT?",
    answer:
      "Featuring MasterSessions led by licensed therapists, SHiFT offers powerful video lessons rooted in real-life experience, emotional insight, and therapeutic practice. Whether you're seeking personal growth, healing, emotional maturity, or greater self-awareness, SHiFT delivers a modern, relatable approach to mental wellness.",
  },
  {
    question: "Is this therapy?",
    answer:
      "SHiFT is not a substitute for therapy. It is a therapist-led, guided mental health education experience designed to support and empower your growth journey - before, during, and after therapy.",
  },
  {
    question: "What is the online course format?",
    answer:
      "Each MasterSession includes 6 focused video lessons, averaging 10–15 minutes each, available on demand so you can learn at your own pace. SHiFT is more than self-guided content - it's a powerful community learning experience. Our livestreams bring members together to learn alongside others on a shared journey, creating connection and meaningful support.",
  },
  {
    question: "How does SHiFT offer real transformation?",
    answer:
      "After each MasterSession, SHiFT guides you on a powerful journey of personal transformation. You'll go beyond passive learning by doing The Work - with thoughtfully designed workbooks that help you personalize each lesson, deepen your insights, build self-awareness, and create the profound internal shifts needed for real, lasting change.",
  },
  {
    question: "Do I have to engage in community learning to participate?",
    answer:
      "Not at all. SHiFT was designed to meet you where you are. If you prefer to go at your own pace, The Vault gives you full access - no pressure to join live sessions or engage in community until (or unless) it feels right for you.",
  },
  {
    question: "What is your refund policy during the beta period?",
    answer:
      "During the beta, we're offering early access to SHiFT at a significantly reduced rate as we build and grow together. Because this is a limited-time opportunity with exclusive pricing, all beta memberships are non-refundable. We recommend exploring our previews and session teasers before joining to make sure it's the right fit for you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="my-container lg:pb-52">
      <div className="flex flex-col gap-8 lg:gap-[80px]">
        {/* Header */}
        <div className="text-center flex flex-col gap-[20px]">
          <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-black">
            FAQs
          </h2>
          <p className="lg:text-[24px] text-proxima text-neutral-750 max-w-[800px] mx-auto">
            Looking for details about our programs, pricing, or how SHiFT works?
            You&apos;ll find clear answers here.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-pure-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-[30px] flex flex-col gap-[20px]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full  text-left flex items-center justify-between "
              >
                <h3 className="text-gothic text-lg lg:text-[28px] font-bold text-black">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <Plus
                    width={24}
                    className={`text-blue-500 transition-transform ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </div>
              </button>

              {openIndex === index && (
                <p className="text-gray-750 font-proxima lg:text-[24px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Privacy Disclaimer */}
        <div className="text-center">
          <p className="text-sm lg:text-base text-neutral-750 font-proxima">
            By subscribing, you agree to our Privacy Policy and provide your consent to receive updates from SHiFT. We will never share your info with anyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
