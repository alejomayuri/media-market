import style from './style.module.css'
import { useEffect, useState } from 'react'
import AddToCart from "components/global/AddToCart"

export default function MainProductContent({images, loading, title, brand, price, id}) {
    const [mainImage, setMainImage] = useState()
    const [miniImages, setMiniImages] = useState()
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

    return (
        <div className={style.container}>
            <div className={style.imageSite}>
                <div className={style.miniImg__container}>
                    {miniImages && miniImages.map( image => (
                        <div key={image} onClick={handleChabgeMainImage} className={`${style.miniImg} ${mainImage === image ? style.selected : ``}`}>
                            <img src={image} alt="miniImage" />
                        </div>
                    ))}
                </div>
                <div className={style.mainImg}>
                    {
                        loading ? <p>Cargando...</p> : <img src={mainImage} alt="mainImage" />
                    }
                </div>  
            </div>
            <div className={style.textSite}>
                <h2>{brand}</h2>
                <h1>{title}</h1>
                <span>
                    <bdi>
                        {/* Esto hay que arreglar */}
                        <span>S/</span>
                        {price}
                        <span>0 </span>
                    </bdi>
                </span>
                <div className={style.selectQuantity}>
                    <button
                        disabled={cuantity === 1}
                        onClick={() => setCuantity(cuantity - 1)}>
                         -
                    </button>
                    <span>{cuantity}</span>
                    <button
                        disabled={cuantity === 10}
                        onClick={() => setCuantity(cuantity + 1)}>
                         +
                    </button>
                </div>
                <div className={style.buttonContainer}>
                    <AddToCart onAdd={cuantity} canOpenModal={false} product={id} />
                </div>
            </div>
        </div>
    )
}