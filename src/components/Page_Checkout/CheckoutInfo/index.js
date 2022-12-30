import style from "./style.module.css";
import { formatPrice } from "utils/formatPrice"


export default function CheckoutInfo ({ myCart, loading, subtotal, delivery, total }) {

    const ready = !loading && myCart.length > 0;

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
                                            formatPrice(subtotal)
                                        }
                                    </span>
                                </div>
                                <div className={style.flexShowPrices}>
                                    <span>
                                        Delivery
                                    </span>

                                    <span>
                                        {
                                            typeof delivery === "number" ? formatPrice(delivery) : delivery
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className={style.totalContainer}>
                                <div className={style.flexShowPrices}>
                                    <span>
                                        Total
                                    </span>

                                    <span>
                                        {
                                            typeof total === "number" ? formatPrice(total) : total
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