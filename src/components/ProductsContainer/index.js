import style from "./style.module.css";
import Product from "components/global/Product";
import { useProducts } from "hooks/useProducts";
import { useCallback, useEffect, useState } from "react";
import { useLocation as useWouterLocation } from "wouter";

export const useLocation = () => {
  const [location, setLocation] = useWouterLocation();
  return [location, setLocation, window.location.search];
};

export default function ProductsContainer() {
  const products = useProducts();

  const [, , query] = useLocation();

  const [params, setParams] = useState();

  const returnRouterParams = useCallback(() => {
    const urlSearchParams = new URLSearchParams(query);
    return Object.fromEntries(urlSearchParams);
  }, [query]);

  useEffect(() => {
    if (query) {
      setParams(returnRouterParams());
    }
  }, [query, returnRouterParams]);
  return (
    <div className={style.catalogue__products__section}>
      <div className={style.products__container}>
        {params &&
          products
            .filter((product) => {
              if (params.categoria && params.subcategoria) {
                const categoriasProduct = product.categorias.map(
                  (categoria) => categoria
                );
                const subcategoriasProduct = product.subcategorias.map(
                  (subcategoria) => subcategoria
                );
                return (
                  categoriasProduct.includes(params.categoria) &&
                  subcategoriasProduct.includes(params.subcategoria)
                );
              }
              if (params.categoria) {
                const categoriasProduct = product.categorias.map(
                  (categoria) => categoria
                );
                return categoriasProduct.includes(params.categoria);
              }
              return {};
            })
            .map((product) => <Product key={product.id} product={product} />)}
      </div>
    </div>
  );
}
