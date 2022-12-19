import style from './style.module.css'
import Image from 'components/global/Image'
import { useRef, useState } from 'react'
import { useDeviceWidth } from 'hooks/useDeviceWidth'

export default function MainImage ({ loading, mainImage, title }) {
    const mainImg = useRef(null)
    const [showImage, setShowImage] = useState(true)
    const deviceWidth = useDeviceWidth()
    let backgroundStyle = null;

    if (deviceWidth > 1024) {
        backgroundStyle = {
            backgroundImage: `url(${mainImage})`
        }
    }

    const productZoom = (e) => {
        if (deviceWidth > 1024) {
            const img = mainImg.current
            const imgWidth = img.offsetWidth
            const imgHeight = img.offsetHeight
            const imgRect = img.getBoundingClientRect()
            const x = e.pageX - imgRect.left
            const y = e.pageY - imgRect.top
            const xPercent = x / imgWidth * 100
            const yPercent = y / imgHeight * 100
            setShowImage(false)
            
            img.style.backgroundPosition = `${xPercent}% ${yPercent}%`
        }
    }

    const productZoomOut = () => setShowImage(true)
    
    return (
        <div 
            onMouseMove={productZoom}
            onMouseLeave={productZoomOut}
            className={style.mainImg}
            ref={mainImg}
            style={backgroundStyle}
        >
            {showImage && (
                loading ? <p>Cargando...</p> : <Image src={mainImage} alt={title} />
            )}
        </div> 
    )
}