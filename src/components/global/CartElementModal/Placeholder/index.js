import style from "./style.module.css";

export default function Placeholder() {
    return (
        <div className={style.placeholder}>
            <div className={style.placeholder__box}>
                <div className={style.placeholder__image}></div>
                <div className={style.placeholder__info}>
                    <div className={style.placeholder__info__name}></div>
                    <div className={style.placeholder__info__marca}></div>
                    <div className={style.placeholder__info__price}></div>
                </div>
            </div>
        </div>
    )
}