import Hero from "@/components/Main/Hero";
import Presale from "@/components/Main/Presale";
import PriceGrowth from "@/components/Main/PriceGrowth";
import ReferAFriend from "@/components/Main/ReferAFriend";
import Staking from "@/components/Main/Staking";
import Tokenomics from "@/components/Main/Tokenomics";
import TokenomicsEcosystem from "@/components/Main/TokenomicsEcosystem";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      // dodajemy 'hero' obok pozostałych
      ...(await serverSideTranslations(locale, [
        "common",
        "nav",
        "hero",
        "presale",
        "staking",
        "refer",
        "tokenomics",
        "tokenomicsEcosystem",
        "priceGrowth",
      ])),
    },
  };
}

export default function Home() {
  return (
    <div>
      <div className="container">
        <Hero />
      </div>
      <Presale />
      <Staking />
      <ReferAFriend />
      <Tokenomics />
      <TokenomicsEcosystem />
      <PriceGrowth />
    </div>
  );
}
