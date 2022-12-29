import CheckoutForm from "components/Page_Checkout/CheckoutForm";
import CheckoutInfo from "components/Page_Checkout/CheckoutInfo";
import { useCartProductsContext } from "context/CartProductsContext";
import { useCartProducts } from "hooks/useCartProducts";
import { useState } from "react";

export default function Checkout () {
    const { products } = useCartProductsContext();
    const { myCart, loading } = useCartProducts({ productsInTheCart: products });

    const [despachoDelibery, setDespachoDelibery] = useState(false);

    return (
        <main className="flex">
            <CheckoutForm iHaveProducts={products.length > 0} despachoDelibery={despachoDelibery} setDespachoDelibery={setDespachoDelibery} loading={loading} />
            <CheckoutInfo despachoDelibery={despachoDelibery} myCart={myCart} loading={loading} />
        </main>
    )
}