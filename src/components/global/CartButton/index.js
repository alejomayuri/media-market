import style from "./style.module.css";
import CartIcon from "components/global/Icons/CartIcon";

export default function CartButton() {
  return (
    <button className={style.button}>
      <CartIcon className={style.icon} width={40} />
    </button>
  );
}
