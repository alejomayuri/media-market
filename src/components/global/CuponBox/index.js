import style from "./style.module.css";
import Cupon from "components/global/Cupon";

export default function CuponBox({ cupons }) {
  return (
    <div className={style.destacados__container}>
      {cupons.map((promocion, index) => (
        <Cupon key={index} images={promocion} w="three" />
      ))}
    </div>
  );
}
