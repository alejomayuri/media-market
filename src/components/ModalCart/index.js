import { useCartProductsContext } from "context/CartProductsContext";
import { useCartProducts } from "hooks/useCartProducts";

export default function ModalCart({ onClose }) {
  const { products } = useCartProductsContext();
  // console.log(products);
  const { myCart } = useCartProducts({ productsInTheCart: products });
  console.log("myCart", myCart);
  return (
    <div>
      <h1>ModalCart</h1>
      <button onClick={onClose}>cerrar</button>
    </div>
  );
}
