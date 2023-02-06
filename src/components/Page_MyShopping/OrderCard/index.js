import style from './style.module.css'
import ProductInOrder from "../ProductInOrder"
import { formatDate } from "utils/formatDate"
import { formatPrice } from 'utils/formatPrice'
import { Link } from 'wouter'

export default function OrderCard ({ order, seeDetails = true }) {
    let date = null
    let fullQuantity = null
    let total = null

    if (order) {
        date = formatDate(order?.createdAt?.seconds)
        total = formatPrice(order?.total)

        if (order.products) {
            let arr
            arr = order.products.map((item) => {
                return item.quantity
            })

            fullQuantity = arr.reduce((acc, item) => {
                return acc + item
            }, 0)
        }
        
    }

    if (!order) {
        return (
            <article>
                <p>No hay ordenes</p>
            </article>
        )
    }

    return (
        order && (
            <article className={style.article}>
                <div>
                    {
                        order?.products?.map((product) => {
                            return (
                                <ProductInOrder item={product} />
                            )
                        })
                    }
                </div>
                <div className={style.order_info}>
                    {order?.createdAt && <p><b>Fecha: </b>{date}</p>}
                    <p><b>Cantidad de productos: </b>{
                        isNaN(fullQuantity) ? 0 : fullQuantity
                    }</p>
                    {order?.total && <p><b>Total: </b>{total}</p>}
                </div>
                {
                    seeDetails && (
                        <Link href={`/mis-compras/${order?.id}`}>
                            <button className={style.button}>Ver detalles</button>
                        </Link>
                    )
                }
            </article>
        )
    )
}