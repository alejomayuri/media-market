import { useCallback, useState } from "react"
import { getFirestore } from "../firebase"
import useLocation from "wouter/use-location"

export default function useMakeAnOrder({ formData } = {}) {

    const [loading, setLoading] = useState(false)
    const [, setLocation] = useLocation()
    const handleMakeAnOrder = useCallback((e) => {
        e.preventDefault();
        setLoading(true)
        const db = getFirestore();
        db.collection('orders').add(formData)
            .then((res) => {
                console.log(res)
                setLocation(`/confirmacion/${res.id}`)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [formData])

    return {
        loading,
        handleMakeAnOrder
    };
}