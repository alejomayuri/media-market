import style from "./style.module.css";
import LocationIcon from "components/global/Icons/LocationIcon";

import banner_1 from "media/banner-1.png";
import banner_2 from "media/banner-2.png";
import banner_3 from "media/banner-3.png";
import { useEffect, useState } from "react";

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
    </>
  );
}
