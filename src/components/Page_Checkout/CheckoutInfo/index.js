import style from "./style.module.css";
import { formatPrice } from "utils/formatPrice"

export default function CheckoutInfo ({ myCart, loading, despachoDelibery }) {

    const ready = !loading && myCart.length > 0;

    let delivery = null

    let subtotal = myCart && formatPrice(myCart.reduce((acc, product) => {
        return acc + (product?.product?.precio * product.quantity)
    }, 0))

    if (despachoDelibery) {
        delivery = null
    } else {
        delivery = formatPrice(0)
    }

    console.log(despachoDelibery)
    console.log(delivery)

    return (
        <div className={style.container}>
            <div className={style.container__info}>
                <h2>Resumen del pedido</h2>
                {
                    ready && (
                        <>
                            <div className={style.productsConteiner}>
                                {myCart?.map((product, index) => {
                                    let Totalprice = formatPrice(product?.product?.precio * product.quantity);
                                    return (
                                        <div className={style.elementInCartContainer} key={index}>
                                            <div>
                                                <p className={style.productName}>
                                                    {product?.product?.name}
                                                </p>
                                                <p className={style.productQuantity}>
                                                    Cantidad: {product.quantity}
                                                </p>
                                            </div>
                                            <div  className={style.pricePerProduct}>
                                                <span>
                                                    {
                                                        product?.product &&  Totalprice
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div>
                                <div className={style.flexShowPrices}>
                                    <span>
                                        Subtotal
                                    </span>

                                    <span>
                                        {
                                            subtotal
                                        }
                                    </span>
                                </div>
                                <div className={style.flexShowPrices}>
                                    <span>
                                        Delivery
                                    </span>

                                    <span>
                                        {
                                            delivery
                                        }
                                    </span>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}