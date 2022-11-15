import style from "./style.module.css";
import Product from "components/global/Product";
import { useProducts } from "hooks/useProducts";
import useQueryParams from "hooks/useQueryParams";
import { BRANDS, REAL_CATEGORIES } from "assets/cats";
import { useEffect, useState } from "react";

import spinner from "media/spinner.gif";
import SortArrows from "components/global/Icons/SortArrows";

export default function ProductsContainer() {
  const params = useQueryParams();
  const { productsPerCategory, productsAreChanged } = useProducts(params);
  const [sortMethod, setSortMethod] = useState("default");

  const PRODUCTS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = productsPerCategory
    .map((product) => <Product key={product.id} product={product} />)
    .sort((a, b) => {
      if (sortMethod === "default") {
        return 0;
      }
      if (sortMethod === "lowToHigh") {
        return a.props.product.precio - b.props.product.precio;
      }
      if (sortMethod === "highToLow") {
        return b.props.product.precio - a.props.product.precio;
      }
      return 0;
    })
    .slice(
      (currentPage - 1) * PRODUCTS_PER_PAGE,
      currentPage * PRODUCTS_PER_PAGE
    );

  const [pages, setPages] = useState(1);

  useEffect(() => {
    setPages(Math.ceil(productsPerCategory.length / PRODUCTS_PER_PAGE));
  }, [productsPerCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [params]);

  const filterCategoryTitle = () => {
    if (params?.categoria && params?.subcategoria) {
      const categoria = REAL_CATEGORIES.categories.find(
        (categoria) => categoria.db_name === params?.categoria
      );
      const subcategoria = categoria.subcategories.find(
        (subcategoria) => subcategoria.db_name === params?.subcategoria
      );
      return `${categoria.name} > ${subcategoria.name}`;
    }
    if (params?.categoria) {
      const categoria = REAL_CATEGORIES.categories.find(
        (categoria) => categoria.db_name === params?.categoria
      );
      return categoria.name;
    }

    return "Todos los productos";
  };

  const filterBrandTitle = () => {
    if (params?.marca) {
      const marca = BRANDS.brands.find(
        (marca) => marca.db_name === params?.marca
      );
      return marca.name;
    }
    return "Todas las marcas";
  };

  const handleChangeSortMethod = (e) => {
    setSortMethod(e.target.value);
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    goToTop();
  }, [currentPage]);

  return (
    <div className={style.catalogue__products__section}>
      <div className={style.category__header}>
        <div className={style.category__title}>
          <h2>{`Categoria: ${filterCategoryTitle()}`}</h2>
          <h2>{`Marca: ${filterBrandTitle()}`}</h2>
        </div>

        <div className={style.category__sort}>
          <label className={style.category__sort__lable_text} htmlFor="sort">
            Ordenar por:
          </label>
          <label className={style.category__sort__lable_icon} htmlFor="sort">
            <SortArrows width={25} />
          </label>
          <select onChange={handleChangeSortMethod} name="sort" id="sort">
            <option value="default">Predeterminado</option>
            <option value="lowToHigh">Menor a mayor</option>
            <option value="highToLow">Mayor a menor</option>
          </select>
        </div>
      </div>

      <div className={style.container}>
        {!productsAreChanged && (
          <img
            className={style.catalogue_spinner}
            src={spinner}
            alt="spinner"
          />
        )}
        {productsAreChanged && (
          <div className={style.products__container}>
            {productsPerCategory.length === 0 && (
              <div className={style.no__products__container}>
                <h2>No se encontraron productos ...</h2>
              </div>
            )}
            {productsPerCategory.length > 0 && filteredProducts}
          </div>
        )}
        {productsAreChanged && productsPerCategory.length > 0 && (
          <div className={style.pagination__container}>
            <div className={style.pagination__container__buttons}>
              <button
                disabled={currentPage === 1}
                className={style.pagination__arrow}
                onClick={() => setCurrentPage(currentPage - 1)}
              >{`<`}</button>
              {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={
                    page === currentPage
                      ? style.pagination__button__active
                      : style.pagination__button
                  }
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                disabled={currentPage === pages}
                className={style.pagination__arrow}
                onClick={() => setCurrentPage(currentPage + 1)}
              >{`>`}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
