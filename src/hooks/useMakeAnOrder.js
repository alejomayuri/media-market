import { useCallback, useState } from "react"
import { getFirestore } from "../firebase"
import useLocation from "wouter/use-location"

export default function useMakeAnOrder({ formData } = {}) {

    const [loadingOrder, setLoadingOrder] = useState(false)
    const [, setLocation] = useLocation()
    const handleMakeAnOrder = useCallback((e) => {
        e.preventDefault();
        setLoadingOrder(true)
        const db = getFirestore();
        db.collection('orders').add(formData)
            .then((res) => {
                console.log(res)
                setLocation(`/confirmacion/${res.id}`)
                setLoadingOrder(false)
            })
            .catch(err => console.log(err))
    }, [formData])

    return {
        loadingOrder,
        handleMakeAnOrder
    };
}