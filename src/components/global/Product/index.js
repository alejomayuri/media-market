import style from "./style.module.css";
import { useState } from "react";
import AddToCart from "../AddToCart";
import { Link } from "wouter";
import { formatPrice } from "utils/formatPrice";
import Image from "components/global/Image";

export default function Product({ product }) {
  const { name, precio, image, marca, nuevo, top, id } = product;
  const [isHover, setIsHover] = useState(false);

  let price = product ? formatPrice(precio) : null;
  let src = image ? image[0] : null;

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className={style.catalogue__product}
    >
      <Link href={`/productos/${id}`}>
        <div className={style.product__image}>
          {nuevo && <p className={style.product__feature__new}>Nuevo</p>}
          {top && <p className={style.product__feature__top}>Top ventas</p>}
          
            <Image src={src} alt={name} />
          
        </div>
      </Link>
      <p className={style.product__brand}>{marca}</p>
      <Link href={`/productos/${id}`}>
        <h2 className={style.product__name}>
            {name.length > 20 ? name.slice(0, 25) + "..." : name}
        </h2>
      </Link>
      <span className={style.product__price}>{price}</span>
      <AddToCart product={id} showButton={isHover} setShowButton={setIsHover} />
    </div>
  );
}
