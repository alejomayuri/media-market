import style from "./style.module.css";
import product from "media/product.png";

export default function Product() {
  return (
    <div className={style.product}>
      <div className={style.product__image}>
        <img src={product} alt="product" />
      </div>
      <div className={style.product__info}>
        <p className={style.product__categoria}>Teclado Gamer</p>
        <h3>Redragon Mecánico Kumara K552 RGB</h3>
        <p className={style.product__price}>S/ 450.00</p>
      </div>
    </div>
  );
}
