import style from './style.module.css'
import { useEffect, useState } from 'react'
import AddToCart from "components/global/AddToCart"
import { formatPrice } from "utils/formatPrice"
import Image from "components/global/Image"
import Minus from 'components/global/Icons/Minus'
import Plus from 'components/global/Icons/Plus'
import MainImage from '../MainImage'

export default function MainProductContent({
    images, 
    loading, 
    title, 
    brand, 
    price, 
    stock, 
    noStockSell, 
    id
}) {
    const [mainImage, setMainImage] = useState("")
    const [miniImages, setMiniImages] = useState("")
    const [cuantity, setCuantity] = useState(1)

    useEffect(() => {
        if (images) {
            setMainImage(images[0])
            setMiniImages(images)
        }
    }, [images])

    const handleChabgeMainImage = (e) => {
        setMainImage(e.target.src)
    }
    
    let priceProduct = price ? formatPrice(price) : null;

    return (
        <section className={style.container}>
            <div className={style.imageSite}>
                <div className={style.miniImg__container}>
                    {miniImages && miniImages.map( image => (
                        <div key={image} onClick={handleChabgeMainImage} className={`${style.miniImg} ${mainImage === image ? style.selected : ``}`}>
                            <Image src={image} alt={title} />
                        </div>
                    ))}
                </div>
                <MainImage loading={loading} mainImage={mainImage} title={title} />
            </div>
            <div className={style.textSite}>
                <h2>{brand}</h2>
                <h1>{title}</h1>
                { !noStockSell && stock === 0 &&
                    <p>
                        Sin stock
                    </p>
                }
                <span className={style.price}>
                    <bdi>
                        {priceProduct}
                    </bdi>
                </span>
                <div className={style.buttonContainer_box}>
                    <div className={style.selectQuantity}>
                        <button
                            disabled={cuantity === 1}
                            onClick={() => setCuantity(cuantity - 1)}>
                            <Minus width={25} fill={'#000'} />
                        </button>
                        <span>{cuantity}</span>
                        <button
                            disabled={stock > 0 ? cuantity === stock : true}
                            onClick={() => setCuantity(cuantity + 1)}>
                            <Plus width={25} fill={'#000'} />
                        </button>
                    </div>
                    <div className={style.buttonContainer}>
                        <AddToCart
                            disabled={!noStockSell && stock === 0} 
                            onAdd={cuantity} 
                            bigBtn={true} 
                            product={id} 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}