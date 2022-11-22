import style from "./style.module.css";
import ReactDOM from "react-dom";
import { useCartProductsContext } from "context/CartProductsContext";

function Modal({ children, onClose }) {
  const { products } = useCartProductsContext();
  console.log(products);
  return (
    <div className={style.modal__container}>
      <div className={style.modal__content}>
        <button className={style.modal__content__btn} onClick={onClose}>
          {/* <CloseIcon width={20} /> */}X
        </button>
        {children}
      </div>
    </div>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal-root")
  );
}