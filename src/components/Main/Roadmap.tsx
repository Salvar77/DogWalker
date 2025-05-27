import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import classes from "./Roadmap.module.scss";
import { useEffect, useState } from "react";
import RoadmapBackground from "@/assets/img/RoadmapBackground.svg";
import LearnMoreArrow from "@/assets/img/PresaleArrow.svg";

type Phase = {
  label: string;
  items: string[];
  goal: string;
};

const Roadmap = () => {
  const { t } = useTranslation("roadmap");
  const phases = t("phases", { returnObjects: true }) as Phase[];

  return (
    <div className={classes.background}>
      <div className={classes.bgWrapper}>
        <Image
          src={RoadmapBackground}
          alt=""
          fill
          className={classes.bg}
          priority
        />
      </div>

      <section className={classes.roadmap} id="roadmap">
        {/* header */}
        <div className={classes.header}>
          <h2 className={classes.title}>{t("title")}</h2>
          <button className={classes.learnMore}>
            {t("learnMore")}
            <span className={classes.arrow}>
              <Image src={LearnMoreArrow} alt="" width={12} height={12} />
            </span>
          </button>
        </div>

        {/* subtitle & intro */}
        <span className={classes.subtitle}>{t("subtitle")}</span>
        <h3 className={classes.heading}>{t("heading")}</h3>
        <p className={classes.description}>{t("description")}</p>

        {/* cards */}
        <div className={classes.cards}>
          {phases.map((phase, i) => (
            <div key={i} className={classes.card}>
              <h4 className={classes.cardTitle}>{phase.label}</h4>
              <ul className={classes.list}>
                {phase.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
              <div className={classes.goal}>
                <span className={classes.goalLabel}>{t("goalLabel")}: </span>
                <span className={classes.goalText}>{phase.goal}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
