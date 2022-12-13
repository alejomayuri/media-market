import { useRoute } from "wouter"
import { useEffect, useState } from "react"
import { useSingleProduct } from "hooks/useSingleProduct"

export default function Product() {
    const [, params] = useRoute("/productos/:id")
    const [productId, setProductId] = useState()
    const { product, loading } = useSingleProduct(productId)

    useEffect(() => {
        setProductId(params.id)
    }, [params.id])

    console.log(productId)
    console.log(product)
    console.log(loading)

    return (
        <>
            <h1>product</h1>
        </>
    )
}