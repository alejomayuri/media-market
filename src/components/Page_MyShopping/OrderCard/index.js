import style from './style.module.css'
import ProductInOrder from "../ProductInOrder"
import { formatDate } from "utils/formatDate"
import { Link } from 'wouter'

export default function OrderCard ({ order }) {
    let date = null
    let fullQuantity = null

    if (order) {
        date = formatDate(order.createdAt.seconds)

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
        <article className={style.article}>
            <div>
                {
                    order.products.map((product) => {
                        return (
                            <ProductInOrder item={product} />
                        )
                    })
                }
            </div>
            <div>
                <p><b>Fecha: </b>{date}</p>
                <p><b>Cantidad de productos: </b>{
                    isNaN(fullQuantity) ? 0 : fullQuantity
                }</p>
            </div>
            <Link href={`/pedidos/${order?.id}`}>
                <button>Ver detalles</button>
            </Link>
        </article>
    )
}