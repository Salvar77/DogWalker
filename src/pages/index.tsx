import Hero from "@/components/Main/Hero";
import Presale from "@/components/Main/Presale";
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
    </div>
  );
}
