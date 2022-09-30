import style from "./style.module.css";
import Cupon from "components/global/Cupon";

const CUPONS = [
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/2m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/3m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/1m.jpg",
];

export default function HomeCoupons() {
  return (
    <div>
      <div className={style.destacados__container}>
        {CUPONS.map((promocion, index) => (
          <Cupon key={index} images={promocion} w="three" />
        ))}
      </div>
    </div>
  );
}
