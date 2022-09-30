import style from "./style.module.css";
import BrandLogo from "components/global/BrandLogo";

import lt from "media/lt.png";
import hp from "media/hp.png";
import rd from "media/rd.png";
import ap from "media/ap.png";
import lg from "media/lg.png";
import amd from "media/amd.png";

export default function HomeBrands() {
  return (
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
  );
}
