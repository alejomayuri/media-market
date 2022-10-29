import React from "react";
import { useProducts } from "hooks/useProducts";
import { Link } from "wouter";

function ProductsFilter() {
  const products = useProducts();

  const getCategories = () => {
    const productsCategories = products.map((product) => product.categorias);
    const categoriesArray = productsCategories.flat();
    const categoriesSet = new Set(categoriesArray);
    const categoriesArrayUnique = [...categoriesSet];
    return categoriesArrayUnique;
  };

  const getSubcategories = (category) => {
    const subcategories = products
      .filter((product) => product.categorias.includes(category))
      .map((product) => product.subcategorias);
    const subcategoriesArray = subcategories.flat();
    const subcategoriesSet = new Set(subcategoriesArray);
    const subcategoriesArrayUnique = [...subcategoriesSet];
    return subcategoriesArrayUnique;
  };

  return (
    <div className="filter__container">
      {products &&
        getCategories().map((category) => {
          return (
            <div key={category}>
              <Link href={`/productos?categoria=${category}`}>
                <h3>{category}</h3>
              </Link>
              <ul>
                {getSubcategories(category).map((subcategory) => {
                  return (
                    <Link
                      key={subcategory}
                      href={`/productos?categoria=${category}&subcategoria=${subcategory}`}
                    >
                      <li>{subcategory}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </div>
  );
}

export default React.memo(ProductsFilter);
