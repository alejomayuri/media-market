import style from "./style.module.css";
import { useEffect, useState } from "react";
import CartIcon from "../Icons/CartIcon";
import Modal from "components/Modal";
import { useCartProductsContext } from "context/CartProductsContext";
import ModalCart from "components/ModalCart";

export default function AddToCart({
  product,
  onAdd,
  showButton,
  setShowButton,
}) {
  const [showModal, setShowModal] = useState(false);

  const { products, setProducts } = useCartProductsContext();

  const handleClick = () => {
    setShowModal(true);
    handleAddToCart(product);
    // onAdd(product);
  };

  const handleAddToCart = (newProduct) => {
    if (products.find((item) => item.product === newProduct)) {
      setProducts((prev) => {
        return prev.map((item) => {
          if (item.product === newProduct) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      });
    } else {
      setProducts((prev) => [...prev, { product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

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

      {showModal && (
        <Modal onClose={handleClose}>
          <ModalCart onClose={handleClose} />
        </Modal>
      )}
    </>
  );
}
