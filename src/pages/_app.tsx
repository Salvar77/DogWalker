// pages/_app.tsx
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config";
import LayoutClient from "../components/More/LayoutClient";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DogWalker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* tutaj nakładasz czcionki i antialiased na cały wrapper */}
      <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container">
          <LayoutClient>
            <Component {...pageProps} />
          </LayoutClient>
        </div>
      </div>
    </>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
