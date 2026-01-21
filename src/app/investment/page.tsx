import { KeyCompanyMilestones } from "@/components/KeyCompanyMilestones";
import { HealthStatsSection } from "@/components/HealthStatsSection";
import { DetailsSection } from "@/components/DetailsSection";
import { getPartners } from "@/lib/contentful/partners";
import { OurPartners } from "@/components/OurPartners";
import { InfoBanner } from "@/components/InfoBanner";
import { Banner } from "@/components";

export const revalidate = 60;

export default async function InvestmentPage() {
  const partners = await getPartners();

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
}
