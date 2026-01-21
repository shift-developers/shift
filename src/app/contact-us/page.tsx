import { Banner } from "@/components";
import ContactForm from "./ContactForm";

export default function ContactUsPage() {
  return (
    <div className="w-full bg-white">
      <Banner
        header="Contact Us"
        description="Our partners match our mission, reflect our values, and share our passion for reimagining mental health."
      />
      <div className="my-container py-20">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-20 mb-10">
          <ContactForm />
          <div className="text-dark-blue font-bold text-2xl font-proxima flex flex-col gap-5">
            <p>
              We partner with individuals and organizations committed to
              creating a mentally healthy world by utilizing evidence-based
              approaches to deliver transformative content.
            </p>

            <p>
              If you&apos;re part of an organization in search of a
              scientifically endorsed mental health and well-being partner,
              allow us to demonstrate the impact SHiFT can make.
            </p>

            <p>
              We welcome mental health professionals and leaders of personal
              growth who are passionate about educating and empowering others,
              to explore the many ways to participate and join our team.
            </p>

            <p>We absolutely love what we do and we think you will too.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
