import { useProducts } from "hooks/useProducts";
import { useCallback, useEffect, useState } from "react";
import { useLocation as useWouterLocation } from "wouter";

export const useLocation = () => {
  const [location, setLocation] = useWouterLocation();
  return [location, setLocation, window.location.search];
};

export default function Productos() {
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

  //log para borrar despues
  if (params) console.log("params", params);

  return (
    <main>
      <h1>Productos</h1>
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
          .map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
            </div>
          ))}
    </main>
  );
}
