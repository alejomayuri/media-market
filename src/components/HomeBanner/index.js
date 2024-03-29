import style from "./style.module.css";
import { useEffect, useState } from "react";

import banner_1 from "media/banner-1.png";
import banner_2 from "media/banner-2.png";
import banner_3 from "media/banner-3.png";

export default function HomeBanner() {
  const [banner, setBanner] = useState(banner_1);
  const images = [banner_1, banner_2, banner_3];
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
      <ul className={style.banner__selector}>
        {
          images.map((image, index) => {
            return (
              <li
                key={index}
                className={`${style.banner__selector__button} ${banner === image ? style.active : ""}`}
                onClick={() => setBanner(image)}
              ></li>
            );
          })
        }
      </ul>
    </div>
  );
}
