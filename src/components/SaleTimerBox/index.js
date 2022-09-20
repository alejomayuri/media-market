import Cupon from "components/global/Cupon";
import SaleTimer from "./SaleTimer";
import style from "./style.module.css";

const CUPONS = [
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/2m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/3m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/1m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/2m.jpg",
];

export default function SaleTimerBox() {
  return (
    <>
      <div>
        <div className={style.container}>
          <div className={style.SaleTimerHeader}>
            <SaleTimer />
          </div>
          <div className={style.SaleTimerBody}>
            {CUPONS.map((promocion, index) => (
              <Cupon key={index} images={promocion} w="four" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
