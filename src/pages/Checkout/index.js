import CheckoutForm from "components/Page_Checkout/CheckoutForm";
import CheckoutInfo from "components/Page_Checkout/CheckoutInfo";
import { useCartProductsContext } from "context/CartProductsContext";
import { useCartProducts } from "hooks/useCartProducts";
import { useEffect, useState } from "react";
import { LUGARES_DE_ENVIO } from "assets/envios";
import useCheckoutForm from "hooks/useCheckoutForm";

export default function Checkout () {
    const { products } = useCartProductsContext();
    const { myCart, loading } = useCartProducts({ productsInTheCart: products });

    const [despachoDelibery, setDespachoDelibery] = useState(false);

    const [departmentSelected, setDeparmentSelected] = useState("");
    const [provinceSelected, setProvinceSelected] = useState("");
    const [distritoSelected, setDistritoSelected] = useState("");

    const {
        formData,
        disabledButton,
        handleOnChange,
        // setDisabledButton
    } = useCheckoutForm()

    console.log(formData)

    let delivery = null
    let total = null

    let subtotal = myCart && myCart.reduce((acc, product) => {
        return acc + (product?.product?.precio * product.quantity)
    }, 0)

    if (despachoDelibery) {
        if (departmentSelected === "" && provinceSelected === "" && distritoSelected === "") {
            delivery = ""
            total = ""
        } else {
            if (departmentSelected === "Lima") {
                if (provinceSelected === "Lima") {
                    if (distritoSelected === "") {
                        delivery = ""
                        total = ""
                    } else {
                        delivery = LUGARES_DE_ENVIO.filter((item) => item?.department === departmentSelected)[0]?.provinces?.filter((item) => item.name === provinceSelected )[0]?.districts?.filter((item) => item.name === distritoSelected)[0]?.price
                        total = LUGARES_DE_ENVIO.filter((item) => item?.department === departmentSelected)[0]?.provinces?.filter((item) => item.name === provinceSelected )[0]?.districts?.filter((item) => item.name === distritoSelected)[0]?.price + myCart.reduce((acc, product) => {
                            return acc + (product?.product?.precio * product.quantity)
                        }, 0)
                    }
                } else {
                    if (provinceSelected === "") {
                        delivery = ""
                        total = ""
                    } else {
                        delivery = "Por coordinar"
                        total = "Por coordinar"
                    }
                }
            } else {
                delivery = "Por coordinar"
                total = "Por coordinar"
            }
        }
    } else {
        delivery = 0
        total = subtotal
    }

    useEffect(() => {
        formData.subtotal = Math.round(subtotal * 100) / 100
        formData.deliveryPrice = delivery
        formData.total = Math.round(total * 100) / 100
    }, [formData, subtotal, delivery, total])

    useEffect(() => {
        formData.delivery = despachoDelibery
        FormData.wayToPay = null
    }, [formData, despachoDelibery])

    return (
        <main>
            <h1 className="main-title">
                Finaliza tu compra
            </h1>
            <div className="flex">
                <CheckoutForm 
                    iHaveProducts={products.length > 0} 
                    despachoDelibery={despachoDelibery} 
                    setDespachoDelibery={setDespachoDelibery}
                    loading={loading}
                    departmentSelected={departmentSelected}
                    setDeparmentSelected={setDeparmentSelected}
                    distritoSelected={distritoSelected}
                    setDistritoSelected={setDistritoSelected}
                    provinceSelected={provinceSelected}
                    setProvinceSelected={setProvinceSelected}
                    places={LUGARES_DE_ENVIO}
                    handleOnChange={handleOnChange}
                />

                <CheckoutInfo 
                    departmentSelected={departmentSelected} 
                    provinceSelected={provinceSelected} 
                    distritoSelected={distritoSelected} 
                    despachoDelibery={despachoDelibery}
                    myCart={myCart} 
                    loading={loading}
                    subtotal={subtotal}
                    delivery={delivery}
                    total={total}
                />
            </div>
        </main>
    )
}