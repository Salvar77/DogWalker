import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import classes from "./ReferAFriend.module.scss";
import ReferAFriendDogImage from "@/assets/img/ReferAFriendDogImage.svg";
import ReferAFriendRectangle1 from "@/assets/img/ReferAFriendRectangle1.svg";
import ReferAFriendRectangle2 from "@/assets/img/ReferAFriendRectangle2.svg";
import ReferAFriendBackground from "@/assets/img/ReferAFriendBackground.svg";

const ReferAFriend = () => {
  const { t } = useTranslation("refer");
  return (
    <div className={classes.background}>
      <div className={classes.bgWrapper}>
        <Image
          src={ReferAFriendBackground}
          alt=""
          fill
          className={classes.bg}
          priority
        />
      </div>
      <section className={classes.refer} id="refer-a-friend">
        <div className={classes.refer__box}>
          {/* Box One: tytuł + podtytuł + obrazek */}
          <div className={classes.refer__boxOne}>
            <div className={classes.refer__text}>
              <h2 className={classes.heading}>{t("heading")}</h2>
              <p className={classes.subheading}>{t("subheading")}</p>
            </div>
            <Image
              src={ReferAFriendDogImage}
              alt=""
              className={classes.image}
            />
          </div>

          {/* Box Two: input + przyciski */}
          <div className={classes.refer__boxTwo}>
            <div className={classes.inputGroup}>
              <input
                type="text"
                readOnly
                placeholder={t("inputPlaceholder")}
                className={classes.input}
              />
              <button className={classes.copyBtn}>{t("copyCTA")}</button>
            </div>
            <button className={classes.generateBtn}>{t("generateCTA")}</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferAFriend;
