import { useEffect, useState } from "react";
import style from "./style.module.css";
import CartIcon from "components/global/Icons/CartIcon";
import { useCartProductsContext } from "context/CartProductsContext";
import { Link } from "wouter";

export default function CartButton() {
  const { products } = useCartProductsContext();
  const [ elementsInCart, setElementsInCart ] = useState(0);

  useEffect(() => {
    let total = 0;
    products.forEach((element) => {
      total += element.quantity;
    });
    setElementsInCart(total);
  }, [products]);

  return (
    <div className={style.button__container}>
      <Link href="/carrito">
        <button className={style.button}>
          <CartIcon className={style.icon} width={30} />
        </button>
        {
          elementsInCart > 0 && (
            <div className={style.elementsInCart}>
              <span>
                {elementsInCart}
              </span>
            </div>
          )
        }
      </Link>
    </div>
  );
}
