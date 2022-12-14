import style from "./style.module.css";
import Features from "./Features";

export default function ProductFeatures({ data }) {
    // let name = null;
    // let features = [];

    // console.log(data)
   
    
    return (
        <div className={style.container}>
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