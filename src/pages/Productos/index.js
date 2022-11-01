import style from "./style.module.css";
import ProductsFilter from "components/ProductsFilter";
import ProductsContainer from "components/ProductsContainer";

export default function Productos() {
  return (
    <main>
      <div className={style.product__page__container}>
        <ProductsFilter />
        <ProductsContainer />
      </div>
    </main>
  );
}
