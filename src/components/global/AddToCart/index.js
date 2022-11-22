import style from "./style.module.css";
import { useState } from "react";
import CartIcon from "../Icons/CartIcon";
import Modal from "components/Modal";
import { useCartProductsContext } from "context/CartProductsContext";

export default function AddToCart({
  product,
  onAdd,
  showButton,
  setShowButton,
}) {
  const [showModal, setShowModal] = useState(false);

  const { setProducts } = useCartProductsContext();

  const handleClick = () => {
    setShowModal(true);
    setProducts((prev) => [...prev, product]);
    // onAdd(product);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowButton && setShowButton(false);
  };

  let showButtonClass = showButton ? style.show : style.show__none;

  return (
    <>
      <div
        className={`${style.add__button__container} 
        ${showButtonClass}
        `}
      >
        <button onClick={handleClick} className={style.add__button}>
          <CartIcon width={20} />
          <span className={style.add__button__text__desktop}>
            Agregar al carrito
          </span>
          <span className={style.add__button__text__mobile}>Agregar</span>
        </button>
      </div>

      {showModal && <Modal onClose={handleClose}>Modal</Modal>}
    </>
  );
}
