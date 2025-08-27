import { GetStaticProps } from "next";

import { KeyCompanyMilestones } from "@/components/KeyCompanyMilestones";
import { HealthStatsSection } from "@/components/HealthStatsSection";
import { DetailsSection } from "@/components/DetailsSection";
import { getPartners } from "@/lib/contentful/partners";
import { OurPartners } from "@/components/OurPartners";
import { InfoBanner } from "@/components/InfoBanner";
import { Banner } from "@/components";

type Props = {
  partners: string[];
};

const InvestmentPage = ({ partners }: Props) => {
  return (
    <div className="w-full bg-white">
      <Banner
        header="Investment"
        description="Meeting A Global Need In Mental Health"
      />
      <HealthStatsSection />
      <KeyCompanyMilestones />
      <img src="/images/blue-vector.png" alt="shift" className="w-full" />
      <DetailsSection />
      <InfoBanner />
      <OurPartners partners={partners} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const partners = await getPartners();

  return {
    props: {
      partners,
    },
    revalidate: 60,
  };
};

export default InvestmentPage;
