import style from "./style.module.css";

export default function Cupon({ images, w }) {
  const cuponWidth = w || "100%";
  return (
    <>
      <div className={`${style.destacado} ${style[cuponWidth]}`}>
        <a href="https://www.youtube.com/watch?v=n_iOC64Xj44">
          <img src={images} alt="promocion" />
        </a>
      </div>
    </>
  );
}
