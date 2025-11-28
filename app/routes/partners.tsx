import { PartnersHero } from "../components/partners/PartnersHero";
import { PartnershipTiers } from "../components/partners/PartnershipTiers";
import { StrategicPartnerNetwork } from "../components/partners/StrategicPartnerNetwork";
import { BecomePartner } from "../components/partners/BecomePartner";
import { PastPartners } from "../components/partners/PastPartners";

export default function Partners() {
  return (
    <>
      <PartnersHero />
      <PartnershipTiers />
      <StrategicPartnerNetwork />
      <BecomePartner />
      <PastPartners />
    </>
  );
}
