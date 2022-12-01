import style from "./style.module.css";
import BrandLogo from "components/global/BrandLogo";
import { useCallback, useEffect, useRef, useState } from "react";

import logitech from "media/LOGITECH.png";
import jbl from "media/JBL.png";
import apple from "media/APPLE.png";
import kingston from "media/KINGSTON.png";
import tplink from "media/TPLINK.png";
import xiaomi from "media/XIAOMI.png";
import samsung from "media/SAMSUNG.png";
import motorola from "media/MOTOROLA.png";
import huawei from "media/HUAWEI.png";
import lenovo from "media/LENOVO.png";
import philips from "media/PHILIPS.png";
import sony from "media/SONY.png";
import sandisk from "media/SANDISK.png";
import genius from "media/GENIUS.png";
import micronics from "media/MICRONICS.png";
import halion from "media/HALION.png";
import targus from "media/TARGUS.png";
import maxell from "media/MAXELL.png";
import skullcandy from "media/SKULLCANDY.png";
import baseus from "media/BASEUS.png";
import tec from "media/TEC.png";
import klipxtreme from "media/KLIP_XTREME.png";
import hp from "media/HP.png";
import cybertel from "media/CYBERTEL.png";
import xblade from "media/XBLADE.png";
import enkore from "media/ENKORE.png";
import hikvision from "media/HIK_VISION.png";
import toshiba from "media/TOSHIBA.png";
import cybercool from "media/CYBERCOOL.png";
import iblue from "media/IBLUE.png";
import cdp from "media/CDP.png";
import powerlite from "media/POWER_LITE.png";
import forza from "media/FORZA.png";
import duracell from "media/DURACELL.png";
import camelion from "media/CAMELION.png";
import belkin from "media/BELKIN.png";
import maxtron from "media/MAXTRON.png";
import borofone from "media/BOROFONE.png";
import moxom from "media/MOXOM.png";
import superaz from "media/SUPERAZ.png";
import miccell from "media/MICCELL.png";

export default function HomeBrands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setBrands([
      logitech,
      jbl,
      apple,
      kingston,
      tplink,
      xiaomi,
      samsung,
      motorola,
      huawei,
      lenovo,
      philips,
      sony,
      sandisk,
      genius,
      micronics,
      halion,
      targus,
      maxell,
      skullcandy,
      baseus,
      tec,
      klipxtreme,
      hp,
      cybertel,
      xblade,
      enkore,
      hikvision,
      toshiba,
      cybercool,
      iblue,
      cdp,
      powerlite,
      forza,
      duracell,
      camelion,
      belkin,
      maxtron,
      borofone,
      moxom,
      superaz,
      miccell,
    ]);
  }, []);

  const thisRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("right");
  const [scrollOn, setScrollOn] = useState(true);
  const autoScroll = useCallback(() => {
    if (scrollDirection === "right" && scrollOn) {
      thisRef.current.scrollLeft += 1;
    }
    if (scrollDirection === "left" && scrollOn) {
      thisRef.current.scrollLeft -= 1;
    }
    if (thisRef.current.scrollLeft === 0) {
      setScrollDirection("right");
    }
    if (
      thisRef.current.scrollLeft ===
      thisRef.current.scrollWidth - thisRef.current.clientWidth
    ) {
      setScrollDirection("left");
    }

    thisRef.current.addEventListener("mouseenter", () => {
      setScrollOn(false);
    });
    thisRef.current.addEventListener("mouseleave", () => {
      setScrollOn(true);
    });
  }, [scrollDirection, scrollOn]);

  useEffect(() => {
    const interval = setInterval(autoScroll, 1);
    return () => {
      clearInterval(interval);
    };
  }, [scrollDirection, scrollOn, autoScroll]);
  return (
    <div>
      <div ref={thisRef} className={style.brand__logo__container}>
        {brands?.map((brand, index) => (
          <BrandLogo key={index} logo={brand} />
        ))}
      </div>
    </div>
  );
}
