import CheckoutForm from "components/Page_Checkout/CheckoutForm";
import CheckoutInfo from "components/Page_Checkout/CheckoutInfo";
import { useCartProductsContext } from "context/CartProductsContext";
import { useCartProducts } from "hooks/useCartProducts";

export default function Checkout () {
    const { products } = useCartProductsContext();
    const { myCart } = useCartProducts({ productsInTheCart: products });

    return (
        <main className="flex">
            <CheckoutForm iHaveProducts={products.length > 0} />
            <CheckoutInfo myCart={myCart} />
        </main>
    )
}