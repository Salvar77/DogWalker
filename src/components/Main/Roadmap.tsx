"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Roadmap.module.scss";

import RoadmapBackground from "@/assets/img/RoadmapBackground.svg";
import LearnMoreArrow from "@/assets/img/PresaleArrow.svg";

type Phase = {
  label: string;
  items: string[];
  goal: string;
};

const Roadmap: React.FC = () => {
  const { t } = useTranslation("roadmap");
  const phases = t("phases", { returnObjects: true }) as Phase[];

  // czy jesteśmy na desktopie (slider tylko tam)
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 992);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // slider tylko dla desktopu
  const sliderRef = useRef<Slider>(null);
  const [current, setCurrent] = useState(0);
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    afterChange: (idx: number) => setCurrent(idx),
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
    ],
  };

  // oblicz przesunięcie paska (desktop)
  const progressPercent = Math.min(100, ((current + 4) / phases.length) * 100);

  return (
    <div className={classes.background}>
      <div className={classes.bgWrapper}>
        <Image src={RoadmapBackground} alt="" fill className={classes.bg} />
      </div>

      <section className={classes.roadmap} id="roadmap">
        <div className={classes.header}>
          <h2 className={classes.title}>{t("title")}</h2>
          <button className={classes.learnMore}>
            {t("learnMore")}
            <span className={classes.arrow}>
              <Image src={LearnMoreArrow} alt="" width={12} height={12} />
            </span>
          </button>
        </div>
        <div className={classes.text}>
          <span className={classes.subtitle}>{t("subtitle")}</span>
          <h3 className={classes.heading}>{t("heading")}</h3>
          <p className={classes.description}>{t("description")}</p>
        </div>

        <div className={classes.cards}>
          {isDesktop ? (
            <>
              <Slider ref={sliderRef} {...settings}>
                {phases.map((phase, i) => (
                  <div key={i} className={classes.card}>
                    <h4 className={classes.cardTitle}>{phase.label}</h4>
                    <ul className={classes.list}>
                      {phase.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                    <div className={classes.goal}>
                      <span className={classes.goalLabel}>
                        {t("goalLabel")}:
                      </span>
                      <span className={classes.goalText}>{phase.goal}</span>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className={classes.progressBar}>
                <div className={classes.progressTrack}>
                  <div
                    className={classes.progressFill}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            // mobile: zwykła kolumna
            phases.map((phase, i) => (
              <div key={i} className={classes.card}>
                <h4 className={classes.cardTitle}>{phase.label}</h4>
                <ul className={classes.list}>
                  {phase.items.map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
                <div className={classes.goal}>
                  <span className={classes.goalLabel}>{t("goalLabel")}:</span>
                  <span className={classes.goalText}>{phase.goal}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
