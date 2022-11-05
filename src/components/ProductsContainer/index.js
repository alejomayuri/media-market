import style from "./style.module.css";
import Product from "components/global/Product";
import { useProducts } from "hooks/useProducts";
import useQueryParams from "hooks/useQueryParams";
import { BRANDS, REAL_CATEGORIES } from "assets/cats";
import { useEffect, useState } from "react";

import spinner from "media/spinner.gif";

export default function ProductsContainer() {
  const products = useProducts();
  const params = useQueryParams();
  const [sortMethod, setSortMethod] = useState("default");

  const PRODUCTS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  // Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const productsPerCategory = products?.filter((product) => {
    if (params?.categoria && params?.subcategoria && params?.marca) {
      const categoriasProduct = product.categorias.map(
        (categoria) => categoria
      );
      const subcategoriasProduct = product.subcategorias.map(
        (subcategoria) => subcategoria
      );
      const marcaProduct = product.marca;
      return (
        categoriasProduct.includes(params?.categoria) &&
        subcategoriasProduct.includes(params?.subcategoria) &&
        marcaProduct.includes(params?.marca)
      );
    }
    if (params?.categoria && params?.marca) {
      const categoriasProduct = product.categorias.map(
        (categoria) => categoria
      );
      const marcaProduct = product.marca;
      return (
        categoriasProduct.includes(params?.categoria) &&
        marcaProduct.includes(params?.marca)
      );
    }
    if (params?.categoria && params?.subcategoria) {
      const categoriasProduct = product.categorias.map(
        (categoria) => categoria
      );
      const subcategoriasProduct = product.subcategorias.map(
        (subcategoria) => subcategoria
      );
      return (
        categoriasProduct.includes(params?.categoria) &&
        subcategoriasProduct.includes(params?.subcategoria)
      );
    }
    if (params?.categoria) {
      const categoriasProduct = product.categorias.map(
        (categoria) => categoria
      );
      return categoriasProduct.includes(params?.categoria);
    }
    if (params?.marca) {
      const marcaProduct = product.marca;
      return marcaProduct.includes(params?.marca);
    }
    return {};
  });

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
  // let pages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  useEffect(() => {
    setPages(Math.ceil(productsPerCategory.length / PRODUCTS_PER_PAGE));
  }, [productsPerCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [params]);

  console.log(pages);
  console.log(currentPage);

  const filterCategoryTitle = () => {
    if (params?.categoria && params?.subcategoria) {
      const categoria = REAL_CATEGORIES.find(
        (categoria) => categoria.db_name === params?.categoria
      );
      const subcategoria = categoria.subcategories.find(
        (subcategoria) => subcategoria.db_name === params?.subcategoria
      );
      return `${categoria.name} > ${subcategoria.name}`;
    }
    if (params?.categoria) {
      const categoria = REAL_CATEGORIES.find(
        (categoria) => categoria.db_name === params?.categoria
      );
      return categoria.name;
    }

    return "Todos los productos";
  };

  const handleChangeSortMethod = (e) => {
    setSortMethod(e.target.value);
  };

  const filterBrandTitle = () => {
    if (params?.marca) {
      const marca = BRANDS.find((marca) => marca.db_name === params?.marca);
      return marca.name;
    }
    return "Todas las marcas";
  };

  return (
    <div className={style.catalogue__products__section}>
      <div className={style.category__header}>
        <div className={style.category__title}>
          <h2>{`Categoria: ${filterCategoryTitle()}`}</h2>
          <h2>{`Marca: ${filterBrandTitle()}`}</h2>
        </div>

        <div className={style.category__sort}>
          <label htmlFor="sort">Ordenar por:</label>
          <select onChange={handleChangeSortMethod} name="sort" id="sort">
            <option value="default">Predeterminado</option>
            <option value="lowToHigh">Menor a mayor</option>
            <option value="highToLow">Mayor a menor</option>
          </select>
        </div>
      </div>

      {products.length === 0 && (
        <img className={style.catalogue_spinner} src={spinner} alt="spinner" />
      )}

      {products.length > 0 && (
        <div className={style.products__container}>
          {filteredProducts.length === 0 && (
            <div className={style.no__products__container}>
              <h2>No se encontraron productos ...</h2>
            </div>
          )}
          {products.length > 0 && filteredProducts}
        </div>
      )}

      <div className={style.pagination__container}>
        {pages &&
          Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={style.pagination__button}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
      </div>
    </div>
  );
}
