import style from "./style.module.css";
import { useCartProductsContext } from "context/CartProductsContext";

export default function CartElementModal({ element }) {
  let productImg = null;
  let productInfo = null;

  const { setProducts } = useCartProductsContext();

  const handleQuantity = (e) => {
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.product === element.product.id) {
          return {
            ...item,
            quantity: parseInt(e.target.value),
          };
        }
        return item;
      });
    });
  };

  const handleDelete = () => {
    setProducts((prev) => {
      return prev.filter((item) => item.product !== element.product.id);
    });
  };

  if (element.product) {
    const { product } = element;
    productImg = <img src={product.image} alt={product.name} />;
    productInfo = (
      <>
        <h3>{product.name}</h3>
        <p>{product.marca}</p>
        <span>{`S/ ${product.precio}`}</span>
      </>
    );
  }

  return (
    <article className={style.element__container}>
      <div className={style.image__container}>{productImg}</div>
      <div className={style.info__container}>{productInfo}</div>
      <div className={style.quantity__container}>
        <div className={style.numberBox}>
          <button
            className={style.numberBox__button}
            disabled={element.quantity === 1}
            value={element.quantity - 1}
            onClick={handleQuantity}
          >
            -
          </button>
          <span>{element?.quantity}</span>
          <button
            className={style.numberBox__button}
            disabled={element.quantity === 10}
            value={element.quantity + 1}
            onClick={handleQuantity}
          >
            +
          </button>
        </div>

        <button className={style.deleteButton} onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </article>
  );
}
