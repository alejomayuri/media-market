import { useEffect, useState } from "react"
import { productsColection } from "firebase.js"

export const useSingleProduct = id => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        productsColection().then((products) => {
            const product = products.find((product) => product.id === id)
            setProduct(product)
            setLoading(false)
        })
    }, [id])

    return { product, loading }
}