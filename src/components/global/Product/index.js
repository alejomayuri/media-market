import style from "./style.module.css";
export default function Product({ product }) {
  const { name, precio, image } = product;
  return (
    <div className={style.catalogue__product}>
      <div className={style.product__image}>
        <img src={image} alt={name} />
      </div>
      <h2 className={style.product__name}>
        {name.length > 20 ? name.slice(0, 40) + "..." : name}
      </h2>
      <span className={style.product__price}>{`S/ ${precio}.00`}</span>
    </div>
  );
}
