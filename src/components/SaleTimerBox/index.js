import SaleTimer from "./SaleTimer";
import style from "./style.module.css";
import CuponBox from "components/global/CuponBox";
import HeaderSectionContainer from "components/global/HeaderSectionContainer";

const CUPONS = [
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/2m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/3m.jpg",
  "https://home.ripley.com.pe/minisitios/home/c/22/09/17/ADV/2m.jpg",
];

export default function SaleTimerBox() {
  return (
    <>
      <HeaderSectionContainer>
        <div className={style.sellTimer__container}>
          <div className={style.SaleTimerHeader}>
            <SaleTimer />
          </div>
          <CuponBox cupons={CUPONS} />
        </div>
      </HeaderSectionContainer>
    </>
  );
}
