import style from "./style.module.css";
import { useEffect, useState } from "react";
import { useCartProductsContext } from "context/CartProductsContext";
import { useCartProducts } from "hooks/useCartProducts";
import CartElementModal from "components/global/CartElementModal";
import CartIcon from "components/global/Icons/CartIcon";
import { Link } from "wouter";
import { formatPrice } from "utils/formatPrice";

export default function Cart() {
  const { products } = useCartProductsContext();
  const { myCart, totalPrice } = useCartProducts({ productsInTheCart: products });
  const [ elementsInCart, setElementsInCart ] = useState(0);
  
  let total = totalPrice ? formatPrice(totalPrice) : 0;

  useEffect(() => {
    let total = 0;
    products.forEach((element) => {
      total += element.quantity;
    });
    setElementsInCart(total);
  }, [products]);

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, []);
  
  return (
    <main>
      <div className={style.carrito}>
        <h1 className={style.h1}>
          <CartIcon style={{ marginRight: "10px" }} stroke={"#000"} width={30} />
          Carrito
        </h1>
        {myCart.length > 0 ? (
        <div className={style.container}>
          <div className={style.card__box}>
            {
              myCart.map((element, key) => (
                <CartElementModal
                  key={element?.product?.id || key}
                  element={element}
                />
              ))
            }
          </div>
          <div className={style.total__box}>
            <h3>
              {
                elementsInCart > 0
                ? `Productos: ${elementsInCart}`
                : "Productos: 0"
              }
            </h3>
            <h3>
              {
                isNaN(totalPrice)===false
                ? `Total: ${total}`
                : "Total: S/ 0.00 "
              }
            </h3>
            <Link href="/checkout">
              <button>
                Continuar compra
              </button>
            </Link>
          </div>
        </div>
        ) : (
          <p>
            No hay productos en el carrito
          </p>
        )}
      </div>
    </main>
  );
}
