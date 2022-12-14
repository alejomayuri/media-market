import { useRoute } from "wouter"
import { useEffect, useState } from "react"
import { useSingleProduct } from "hooks/useSingleProduct"
import MainProductContent from "components/Page_Product/MainProductContent"
import ProductFeatures from "components/Page_Product/ProductFeatures"

export default function Product() {
    const [, params] = useRoute("/productos/:id")
    const [productId, setProductId] = useState()
    const { product, loading } = useSingleProduct(productId)

    let images = [];
    let title = null;
    let brand = null;
    let price = null;
    let id = null;
    let productFeatures = null;

    if (product) {
        images = product.image
        title = product.name
        brand = product.marca
        price = product.precio
        id = product.id
        productFeatures = product.caracteristicasDestacadas
    }

    useEffect(() => {
        setProductId(params.id)
    }, [params.id])

    return (
        <>
            <main>
                <MainProductContent
                    images={images}
                    title={title}
                    brand={brand}
                    price={price}
                    loading={loading}
                    id={id}
                />
                <ProductFeatures data={productFeatures} />
            </main>
        </>
    )
}