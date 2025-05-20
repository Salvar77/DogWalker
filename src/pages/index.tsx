import Hero from "@/components/Main/Hero";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      // dodajemy 'hero' obok pozostałych
      ...(await serverSideTranslations(locale, ["common", "nav", "hero"])),
    },
  };
}

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
