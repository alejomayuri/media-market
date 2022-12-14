import style from "./style.module.css";
import Features from "./Features";

export default function ProductFeatures({ data }) {
    return (
        <div className={style.container}>
            <h2 className={style.product__title}>Características destacadas</h2>
            <div className={style.product__features}>
                {
                    data && data.map((item, index) => {
                        return (
                            <div key={index} className={style.product__feature}>
                                <Features data={item} />
                            </div>
                        )
                    })
                }  
            </div>
        </div>
    )
}