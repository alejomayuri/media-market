import style from './style.module.css'
import { useSingleProduct } from "hooks/useSingleProduct"
import { formatPrice } from "utils/formatPrice"

export default function ProductInOrder ({item}) {
    const { product, quantity} = item
    const {product: productData} = useSingleProduct(product)
    
    let image
    let name
    let precio

    if (productData) {
        if (productData.image) {
            image = productData?.image[0] || null
        }
        name = productData?.name || null
        precio = productData?.precio || null
    }

    return (
        <div>
            <div>
                <div className={style.image__container}>
                    <img className={style.image} src={image} alt={name} />
                </div>
                <h3>{name}</h3>
            </div>
            <div>
                <p>Precio: {formatPrice(precio)}</p>
                <p>Cantidad: {quantity}</p>
            </div>        
        </div>
    )
}