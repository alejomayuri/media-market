import style from "./style.module.css";
import { useEffect, useState } from "react";

import LocationIcon from "components/global/Icons/LocationIcon";
import Cupon from "components/global/Cupon";
import SaleTimerBox from "components/SaleTimerBox";
import BrandLogo from "components/global/BrandLogo";
import HomeCategory from "components/global/HomeCategory";

import banner_1 from "media/banner-1.png";
import banner_2 from "media/banner-2.png";
import banner_3 from "media/banner-3.png";

import lt from "media/lt.png";
import hp from "media/hp.png";
import rd from "media/rd.png";
import ap from "media/ap.png";
import lg from "media/lg.png";
import amd from "media/amd.png";
import g from "media/cat-gamer.png";

const CUPONS = [
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/2m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/3m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/1m.jpg",
];

const HOME__CATEGORIES = [
  {
    category: "teclados",
    color: "red",
  },
  {
    category: "mouse",
    color: "green",
  },
  {
    category: "audífonos",
    color: "blue",
  },
  {
    category: "gamer",
    color: "purple",
  },
  {
    category: "celulares",
    color: "orange",
  },
  {
    category: "cámaras",
    color: "cyan",
  },
];

export default function Home() {
  const [banner, setBanner] = useState(banner_1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (banner === banner_1) {
        setBanner(banner_2);
      } else if (banner === banner_2) {
        setBanner(banner_3);
      } else {
        setBanner(banner_1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [banner]);

  return (
    <>
      <div className={style.location}>
        <h3>
          <a
            rel="noreferrer"
            href="https://www.youtube.com/watch?v=RVGFM7i1CqM"
            target="_blank"
          >
            NUESTRA TIENDA
          </a>
        </h3>
        <LocationIcon />
      </div>
      <div className={style.banner}>
        <img className={style.img} src={banner} alt="banner" />
      </div>
      <div>
        <div className={style.destacados__container}>
          {CUPONS.map((promocion, index) => (
            <Cupon key={index} images={promocion} w="three" />
          ))}
        </div>
      </div>
      <SaleTimerBox />
      <div>
        <div className={style.brand__logo__container}>
          <BrandLogo logo={lt} />
          <BrandLogo logo={hp} />
          <BrandLogo logo={rd} />
          <BrandLogo logo={ap} />
          <BrandLogo logo={lg} />
          <BrandLogo logo={amd} />
        </div>
      </div>
      <div>
        <div className={style.home__categories__container}>
          {HOME__CATEGORIES.map((category, index) => (
            <HomeCategory
              key={index}
              image={g}
              title={category.category}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </>
  );
}
