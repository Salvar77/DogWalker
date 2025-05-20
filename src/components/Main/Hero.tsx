// components/Main/Hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import walletIcon from "@/assets/img/walletIcon.svg";
import rocketIcon from "@/assets/img/rocket.svg";
import PhoneIconHero from "@/assets/img/PhoneIconHero.svg";
import BackgroundPhoneIconHero from "@/assets/img/BackgroundPhoneIconHero.svg";
// import BackgroundPhoneIconHero2 from "@/assets/img/BackgroundPhoneIconHero2.svg";
import BackgroundPhoneIconHero3 from "@/assets/img/BackgroundPhoneIconHero3.svg";
import BackgroundPhoneIconRect from "@/assets/img/BackgroundPhoneIconRect.svg";
import BackgroundPhoneIconHeroRect from "@/assets/img/BackgroundPhoneIconHeroRect.svg";
import DogTracesImage from "@/assets/img/DogTracesImage.svg";
import Ellipse2 from "@/assets/img/Ellipse 2.svg";
import Vector2 from "@/assets/img/Vector2.svg";

import classes from "./Hero.module.scss";

const Hero: React.FC = () => {
  const { t } = useTranslation("hero");

  return (
    <section className={classes.hero}>
      {/* psie ślady */}
      <div className={classes.tracesWrapper}>
        <Image src={DogTracesImage} alt="" />
      </div>

      {/* tekst */}
      <div className={classes.content}>
        <h1 className={classes.title}>{t("title")}</h1>
        <p className={classes.subtitle}>{t("subtitle")}</p>
        <p className={classes.tagline}>{t("tagline")}</p>
        <div className={classes.ctaGroup}>
          <button className={classes.ctaPrimary}>
            <Image src={walletIcon} alt={t("ctaPrimary")} />
            <span>{t("ctaPrimary")}</span>
          </button>
          <button className={classes.ctaSecondary}>{t("ctaSecondary")}</button>
        </div>
      </div>

      {/* grafika */}
      <div className={classes.images}>
        <Image src={BackgroundPhoneIconHero} alt="" className={classes.bg1} />
        <Image src={BackgroundPhoneIconHero3} alt="" className={classes.bg2} />
        <Image
          src={BackgroundPhoneIconHeroRect}
          alt=""
          className={classes.dashed}
        />
        <Image
          src={BackgroundPhoneIconRect}
          alt=""
          className={classes.dotted}
        />
        <Image
          src={Ellipse2}
          alt=""
          className={classes.circle}
          width={700}
          height={700}
        />
        <Image src={Vector2} alt="" className={classes.vector} />
        <div className={classes.phoneTop}>
          <Image src={PhoneIconHero} alt="" width={700} height={700} />
        </div>
        <Image src={rocketIcon} alt="" className={classes.rocket} />
      </div>
    </section>
  );
};

export default Hero;
