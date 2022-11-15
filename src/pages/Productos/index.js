import style from "./style.module.css";
import ProductsFilter from "components/ProductsFilter";
import ProductsContainer from "components/ProductsContainer";
import HomeBanner from "components/HomeBanner";

export default function Productos() {
  return (
    <>
      <HomeBanner />
      <main>
        <div className={style.product__page__container}>
          <ProductsFilter />
          <ProductsContainer />
        </div>
      </main>
    </>
  );
}
