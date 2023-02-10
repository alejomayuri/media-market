import style from "./style.module.css";
import Product from "components/global/Product";
import { useEffect, useState } from "react";
import spinner from "media/spinner.gif";
import DownArrowIcon from "components/global/Icons/DownArrowIcon";

export default function ProductsContainer({ params, products, productsAreChanged }) {
  const [sortMethod, setSortMethod] = useState("default");
  const PRODUCTS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);

  const filteredProducts = products
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

  useEffect(() => {
    setPages(Math.ceil(products.length / PRODUCTS_PER_PAGE));
  }, [products]);

  useEffect(() => {
    setCurrentPage(1);
  }, [params]);

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
        <div className={style.category__sort}>
          <div className={style.selectWrapper}>
            <form>
              <select onChange={handleChangeSortMethod} name="sort" id="sort">
                <option value="default">Ordenar por</option>
                <option value="lowToHigh">Menor a mayor</option>
                <option value="highToLow">Mayor a menor</option>
              </select>
            </form>
          </div>
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
            {products.length === 0 && (
              <div className={style.no__products__container}>
                <h2>No se encontraron productos ...</h2>
              </div>
            )}
            {products.length > 0 && filteredProducts}
          </div>
        )}
        {productsAreChanged && products.length > 0 && (
          <div className={style.pagination__container}>
            <div className={style.pagination__container__buttons}>
              <button
                disabled={currentPage === 1}
                className={style.pagination__arrow}
                onClick={() => setCurrentPage(currentPage - 1)}
              ><DownArrowIcon style={{transform: "rotate(90deg)"}} stroke={"#5c5c5c"} width={"20px"} /></button>
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
              ><DownArrowIcon style={{transform: "rotate(-90deg)"}} stroke={"#5c5c5c"} width={"20px"} /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
