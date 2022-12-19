import style from "./style.module.css";

export default function ProductDetail ({ data, sku }) {
    const isEven = (num) => !(num % 2);

    return (
        <section className={style.container}>
            <h2 className={style.product__title}>Detalle del producto</h2>
            <div className={style.product__features}>
                <div className={style.product__feature}>
                    <h3>SKU</h3>
                    <p>
                        {sku}
                    </p>
                </div>
                {
                    data && data.map((item, index) => {
                        return (
                            <div key={index} className={`
                                    ${style.product__feature}
                                    ${isEven(index) 
                                        ? style.product__feature__even 
                                        : ""
                                    }
                                `}>
                                <h3>{item.name}</h3>
                                <p>
                                    {item.content}
                                </p>
                            </div>
                        )
                    })
                }  
            </div>
        </section>
    )
}