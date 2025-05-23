import Hero from "@/components/Main/Hero";
import Presale from "@/components/Main/Presale";
import Staking from "@/components/Main/Staking";
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
    </div>
  );
}
