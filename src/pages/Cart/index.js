import { useCartProductsContext } from "context/CartProductsContext";
import { useCartProducts } from "hooks/useCartProducts";
import CartElementModal from "components/global/CartElementModal";

export default function Cart() {
  const { products } = useCartProductsContext();

  const { myCart } = useCartProducts({ productsInTheCart: products });
  return (
    <main>
      <div>
        <h1>Cart</h1>
        {myCart.length > 0 ? (
          myCart.map((element, key) => (
            <CartElementModal
              key={element?.product?.id || key}
              element={element}
            />
          ))
        ) : (
          <p>
            No hay productos en el carrito
          </p>
        )}
      </div>
    </main>
  );
}
