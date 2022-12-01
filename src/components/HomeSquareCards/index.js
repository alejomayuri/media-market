import style from "./style.module.css";

import squarea from "media/squarea.png";
import squareb from "media/squareb.png";
import squarec from "media/squarec.png";

export default function HomeSquareCards() {
  return (
    <>
      <div className={style.container}>
        <div className={style.square__cards__container}>
          <div className={`${style.square__card} ${style.square__card_a}`}>
            <img src={squarea} alt="squarea" />
          </div>
          <div className={style.sub__container}>
            <div className={style.inner__container}>
              <div className={`${style.square__card} ${style.square__card_b}`}>
                <img src={squareb} alt="squareb" />
              </div>
              <div className={`${style.square__card} ${style.square__card_c}`}>
                <img src={squareb} alt="squareb" />
              </div>
            </div>
            <div className={`${style.square__card} ${style.square__card_d}`}>
              <img src={squarec} alt="squarec" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
