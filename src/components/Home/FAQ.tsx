import React, { useState } from "react";
import { Plus } from "@/assets/svgs";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is SHIFT?",
    answer:
      "Featuring MasterSessions led by licensed therapists, SHiFT offers powerful video lessons rooted in real-life experience, emotional insight, and therapeutic practice. Whether you're seeking personal growth, healing, emotional maturity, or greater self-awareness, SHIFT delivers a modern, relatable approach to mental wellness.",
  },
  {
    question: "Is this therapy?",
    answer:
      "SHIFT is not a substitute for therapy. It is a therapist-led, guided mental health education experience designed to support and empower your growth journey—before, during, and after therapy.",
  },
  {
    question: "What is the online course format?",
    answer:
      "Each MasterSession includes 6 focused video lessons, averaging 10–15 minutes each, available on demand so you can learn at your own pace. SHIFT is more than self-guided content—it's a powerful community learning experience. Our livestreams bring members together to learn alongside others on a shared journey, creating connection and meaningful support.",
  },
  {
    question: "How does SHIFT offer real transformation?",
    answer:
      "After each MasterSession, SHIFT guides you on a powerful journey of personal transformation. You'll go beyond passive learning by doing The Work—with thoughtfully designed workbooks that help you personalize each lesson, deepen your insights, build self-awareness, and create the profound internal shifts needed for real, lasting change.",
  },
  {
    question: "Do I need to join the community to participate?",
    answer:
      "Not at all. Some members love engaging in our livestreams and events. Others prefer to watch and reflect on their own. SHiFT supports both.",
  },
  {
    question: "How much time do I have to view the MasterSessions?",
    answer:
      "You'll have unlimited access to the MasterSessions for the duration of your membership. Watch and rewatch them as often as you like.",
  },
  {
    question: "How much does it cost?",
    answer:
      "During our Beta, you'll receive early access pricing and special offers for Founding Members.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We want you to feel confident about joining SHIFT. That's why we offer a 7-day free trial to explore the platform, experience a MasterSession, and decide if it's right for you. After the trial ends, memberships are non-refundable.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="px-5 lg:px-32 xl:px-48 lg:pb-52">
      <div className="flex flex-col gap-8 lg:gap-[80px]">
        {/* Header */}
        <div className="text-center flex flex-col gap-[20px]">
          <h2 className="text-3xl lg:text-5xl font-gothic font-bold text-black">
            FAQs
          </h2>
          <p className="lg:text-[24px] text-proxima text-neutral-750 max-w-[800px] mx-auto">
            Looking for details about our programs, pricing, or how SHIFT works?
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
      </div>
    </section>
  );
};

export default FAQ;
