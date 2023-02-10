import style from "./style.module.css";
import useQueryParams from "hooks/useQueryParams";
import { useProducts } from "hooks/useProducts";
import { REAL_CATEGORIES } from "assets/cats";
import { Link } from "wouter";
import ProductsFilter from "components/ProductsFilter";
import ProductsContainer from "components/ProductsContainer";
import HomeBanner from "components/HomeBanner";
import HomeBrands from "components/HomeBrands";
import DownArrowIcon from "components/global/Icons/DownArrowIcon";

export default function Productos() {
  const params = useQueryParams();
  const { productsPerCategory, productsAreChanged } = useProducts(params);

  let sectionTitle = null;
  let breadcrumb = null;

  if (params && Object.keys(params) && Object.keys(params).length > 0) {
    if (params?.categoria) {
      const categoria = REAL_CATEGORIES.categories.find(
        (categoria) => categoria.db_name === params?.categoria
      );
      console.log("categoria", categoria)
      sectionTitle = categoria?.name || "Productos";
      if (categoria) {
        breadcrumb = (
          <>
            <Link href="/">
              Inicio
            </Link>
            <DownArrowIcon stroke={"#5c5c5c"} width={"20px"} />
            <Link href={categoria?.slug}>
              {categoria?.name}
            </Link>
          </>
        )
      }
    }
    if (params?.subcategoria) {
      const categoria = REAL_CATEGORIES.categories.find(
        (categoria) => categoria.db_name === params?.categoria
      );
      let subcategoria = null;
      if (categoria) {
        subcategoria = categoria.subcategories.find(
          (subcategoria) => subcategoria.db_name === params?.subcategoria
        );
      }
      sectionTitle = subcategoria?.name || categoria?.name || "Productos";
      if (subcategoria) {
        breadcrumb = (
          <>
            <Link href="/">
              Inicio
            </Link>
            <DownArrowIcon stroke={"#5c5c5c"} width={"20px"} />
            <Link href={categoria?.slug}>
              {categoria?.name}
            </Link>
            <DownArrowIcon stroke={"#5c5c5c"} width={"20px"} />
            <Link href={subcategoria?.slug}>
              {subcategoria?.name}
            </Link>
          </>
        )
      } else {
        breadcrumb = null
      }
    }
  }

  return (
    <>
      <HomeBanner />
      <main>
        <h1 className={style.h1}>{sectionTitle}</h1>
        <nav className={style.nav}>{breadcrumb}</nav>
        <div className={style.product__page__container}>
          <ProductsFilter params={params} products={productsPerCategory} />
          <ProductsContainer params={params} products={productsPerCategory} productsAreChanged={productsAreChanged} /> 
        </div>
        <HomeBrands />
      </main>
    </>
  );
}
