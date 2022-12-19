import style from "./style.module.css";

export default function ProductDescription({ description }) {
    return (
        <section className={style.container}>
            <h2 className={style.product__title}>Descripción</h2>
            <p>{description}</p>
        </section>
    )
}