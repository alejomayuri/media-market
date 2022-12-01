import style from "./style.module.css";
import { useCartProductsContext } from "context/CartProductsContext";
import { useCartProducts } from "hooks/useCartProducts";
import CartElementModal from "components/global/CartElementModal";
import { Link } from "wouter";
import CartIcon from "components/global/Icons/CartIcon";

export default function ModalCart({ onClose }) {
  const { products } = useCartProductsContext();
  // console.log(products);
  const { myCart } = useCartProducts({ productsInTheCart: products });
  console.log("myCart", myCart);
  return (
    <div>
      <h3 className={style.cart__title}>
        <CartIcon style={{ marginRight: "10px" }} stroke={"#000"} width={30} />
        Productos en el carrito
      </h3>

      <div className={style.products__container}>
        {myCart.length > 0 ? (
          myCart.map((element, key) => (
            <CartElementModal
              key={element?.product?.id || key}
              element={element}
            />
          ))
        ) : (
          <p className={style.noProducts__message}>
            No hay productos en el carrito
          </p>
        )}
      </div>
      <div className={style.modal__footer}>
        <button className={style.stayHere} onClick={onClose}>
          Seguir comprando
        </button>
        <Link href="/carrito">
          <button className={style.goToTheCart}>Ir al carrito</button>
        </Link>
      </div>
    </div>
  );
}
