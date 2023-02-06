import { useRoute } from "wouter"
import { useSingleOrder } from "hooks/useSingleOrder"
import GreenMessage from "components/Page_Confirmation/GreenMessage"
import OrderCard from "components/Page_MyShopping/OrderCard"
import ThanksMessage from "components/Page_Confirmation/ThanksMessage"

export default function Confirmation () {
    const [ , params ] = useRoute("/confirmacion/:id")
    const { order } = useSingleOrder({ id: params.id })

    return (
        <main>
            <GreenMessage />
            {order && <OrderCard order={order} seeDetails={false} />}
            <ThanksMessage />
        </main>
    )
}