import { useOrders } from "hooks/useOrders"
import MyShoppingList from "components/Page_MyShopping/MyShoppingList"
import useUser from "hooks/useUser";
import LoginWithGoogle from "components/global/LoginWithGoogle";

export default function MyShopping () {
    const { orders, loading } = useOrders()
    const { isNotLogged } = useUser();

    const ordersFirstSorted = orders.sort((a, b) => {
        return b.createdAt.seconds - a.createdAt.seconds
    })

    return (
        <main>
            <h1 className="main-title">
                Mis compras
            </h1>
            {
                !isNotLogged ? (
                    loading
                    ? <p>Cargando...</p>
                    : <MyShoppingList orders={ordersFirstSorted} />
                ) : (
                    <div className="login__container">
                        <p>
                            Inicia sesión para poder ver todas tus compras.
                        </p>
                        <LoginWithGoogle />
                    </div>
                )
            }
        </main>
    )
}