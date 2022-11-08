import { useEffect, useState } from "react";
import { productsColection } from "firebase.js";

export const useProducts = (params) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsColection().then((products) => setProducts(products));
  }, []);

  const productsAreChanged = products.length > 0;

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

  return { productsPerCategory, productsAreChanged };
};
