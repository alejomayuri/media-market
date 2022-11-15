import style from "./style.module.css";
import BrandLogo from "components/global/BrandLogo";
import { useEffect, useRef, useState } from "react";

import lt from "media/lt.png";
import hp from "media/hp.png";
import rd from "media/rd.png";
import ap from "media/ap.png";
import lg from "media/lg.png";
import amd from "media/amd.png";

export default function HomeBrands() {
  console.log("HomeBrands");
  const thisRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("right");
  const [scrollOn, setScrollOn] = useState(true);
  const autoScroll = () => {
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
  };

  useEffect(() => {
    const interval = setInterval(autoScroll, 1);
    return () => {
      clearInterval(interval);
    };
  }, [scrollDirection, scrollOn]);
  return (
    <div>
      <div ref={thisRef} className={style.brand__logo__container}>
        <BrandLogo logo={lt} />
        <BrandLogo logo={hp} />
        <BrandLogo logo={rd} />
        <BrandLogo logo={ap} />
        <BrandLogo logo={lg} />
        <BrandLogo logo={amd} />
        <BrandLogo logo={lt} />
        <BrandLogo logo={hp} />
        <BrandLogo logo={rd} />
        <BrandLogo logo={ap} />
        <BrandLogo logo={lg} />
        <BrandLogo logo={rd} />
      </div>
    </div>
  );
}
