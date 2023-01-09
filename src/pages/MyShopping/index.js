import { useOrders } from "hooks/useOrders"

export default function MyShopping () {
    const { orders } = useOrders()

    const ordersFirstSorted = orders.sort((a, b) => {
        return b.createdAt.seconds - a.createdAt.seconds
    })

    const ordersSecondSorted = ordersFirstSorted.sort((a, b) => {
        return b.createdAt.nanoseconds - a.createdAt.nanoseconds
    })

    return (
        <main>
            <h1 className="main-title">
                Mis compras
            </h1>
        </main>
    )
}