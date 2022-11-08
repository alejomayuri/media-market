import style from "./style.module.css";

export default function Cupon({ images, w }) {
  const cuponWidth = w || "100%";
  return (
    <>
      <div className={`${style.destacado} ${style[cuponWidth]}`}>
        <img src={images} alt="Promocion" />
      </div>
    </>
  );
}
