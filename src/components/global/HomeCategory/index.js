import style from "./style.module.css";

export default function HomeCategory({ image, title, color }) {
  return (
    <div>
      <div className={`${style.category__img} ${style[color]}`}>
        <img src={image} alt={title} />
      </div>
      <h3 className={style.h3}>{title}</h3>
    </div>
  );
}
