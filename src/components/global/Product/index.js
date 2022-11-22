import style from "./style.module.css";
import { useState } from "react";
import AddToCart from "../AddToCart";

export default function Product({ product }) {
  const { name, precio, image, marca, nuevo, top, id } = product;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className={style.catalogue__product}
    >
      <div className={style.product__image}>
        {nuevo && <p className={style.product__feature__new}>Nuevo</p>}
        {top && <p className={style.product__feature__top}>Top ventas</p>}
        <img src={image} alt={name} />
      </div>
      <p className={style.product__brand}>{marca}</p>
      <h2 className={style.product__name}>
        {name.length > 20 ? name.slice(0, 25) + "..." : name}
      </h2>
      <span className={style.product__price}>{`S/ ${precio}.00`}</span>
      <AddToCart product={id} showButton={isHover} setShowButton={setIsHover} />
    </div>
  );
}
