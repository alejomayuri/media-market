import { useRoute } from "wouter"
import { useEffect, useState } from "react"
import { useSingleProduct } from "hooks/useSingleProduct"
import MainProductContent from "components/Page_Product/MainProductContent"
import ProductFeatures from "components/Page_Product/ProductFeatures"
import ProductDetail from "components/Page_Product/ProductDetail"
import ProductDescription from "components/Page_Product/ProductDescription"

export default function Product() {
    const [, params] = useRoute("/productos/:id")
    const [productId, setProductId] = useState("")
    const { product, loading } = useSingleProduct(productId)

    let images = [];
    let title = null;
    let brand = null;
    let price = null;
    let id = null;
    let productFeatures = null;
    let productDetails = null;
    let description = null;
    let stock = null;
    let noStockSell = null;

    if (product) {
        images = product.image
        title = product.name
        brand = product.marca
        price = product.precio
        id = product.id
        stock = product.stock
        productFeatures = product.caracteristicasDestacadas
        productDetails = product.detalles
        description = product.descripcion
        noStockSell = product.ventaSinStock
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
                    stock={stock}
                    noStockSell={noStockSell}
                />
                <ProductFeatures data={productFeatures} />
                <ProductDetail sku={productId} data={productDetails} />
                <ProductDescription description={description} />
            </main>
        </>
    )
}