import style from './style.module.css'
import OrderCard from '../OrderCard'

export default function MyShoppingList ({ orders }) {
    return (
        <div className={style.container}>
            {
                orders && orders.map((order) => {
                    return (
                        <OrderCard order={order} />
                    )
                })
            }
        </div>
    )
}