import { useOrders } from "hooks/useOrders"
import MyShoppingList from "components/Page_MyShopping/MyShoppingList"

export default function MyShopping () {
    const { orders, loading } = useOrders()

    const ordersFirstSorted = orders.sort((a, b) => {
        return b.createdAt.seconds - a.createdAt.seconds
    })

    return (
        <main>
            <h1 className="main-title">
                Mis compras
            </h1>
            {
                loading
                    ? <p>Cargando...</p>
                    : <MyShoppingList orders={ordersFirstSorted} />
            }
        </main>
    )
}