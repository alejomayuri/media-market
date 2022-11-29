import style from "./style.module.css";
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
  return (
    <div className={style.modal__container}>
      <div className={style.modal__content}>{children}</div>
    </div>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal-root")
  );
}
