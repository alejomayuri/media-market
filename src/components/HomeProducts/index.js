import style from "./style.module.css";
import Product from "components/global/Product";

export default function HomeProducts() {
  return (
    <div>
      <div className={style.home__products}>
        <h2>Productos destacados</h2>
        <div className={style.home__products__container}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}
