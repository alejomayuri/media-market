import style from "./style.module.css";
import ProductsFilter from "components/ProductsFilter";
import ProductsContainer from "components/ProductsContainer";
import HomeBanner from "components/HomeBanner";
import HomeBrands from "components/HomeBrands";

export default function Productos() {
  return (
    <>
      <HomeBanner />
      <main>
        <div className={style.product__page__container}>
          <ProductsFilter />
          <ProductsContainer />
        </div>
        <HomeBrands />
      </main>
    </>
  );
}
