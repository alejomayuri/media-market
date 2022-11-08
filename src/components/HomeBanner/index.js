import style from "./style.module.css";
import { useEffect, useState } from "react";

import banner_1 from "media/banner-1.png";
import banner_2 from "media/banner-2.png";
import banner_3 from "media/banner-3.png";

export default function HomeBanner() {
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
    <div className={style.banner}>
      <img className={style.img} src={banner} alt="banner" />
      <div className={style.banner__selector}>
        <button
          className={
            banner === banner_1
              ? style.banner__selector__button_active
              : style.banner__selector__button
          }
          onClick={() => setBanner(banner_1)}
        ></button>
        <button
          className={
            banner === banner_2
              ? style.banner__selector__button_active
              : style.banner__selector__button
          }
          onClick={() => setBanner(banner_2)}
        ></button>
        <button
          className={
            banner === banner_3
              ? style.banner__selector__button_active
              : style.banner__selector__button
          }
          onClick={() => setBanner(banner_3)}
        ></button>
      </div>
    </div>
  );
}
