import style from "./style.module.css";
import React from "react";
import { Link } from "wouter";
import { REAL_CATEGORIES } from "assets/cats";
import getBrandsOfProducts from "utils/getBrandsOfProducts";

function ProductsFilter({ params, products }) {
  let categoryNames = null;
  let categoryFilter = null;

  if (params) {
    categoryNames = REAL_CATEGORIES.categories?.find((item) => item.db_name === params.categoria)

    if (categoryNames) {
      categoryFilter = params && categoryNames?.subcategories?.map((item, index) => {
        return (
          <li className={`${style.category__filter__element} ${
            params.subcategoria === item.db_name
              ? style.filter__active
              : ""
          }`} key={index}>
            <Link href={item.slug}>
                {item.name}
            </Link>
          </li>
        );
      });
    }
  }

  const brands = getBrandsOfProducts(products, "marca")
  
  const brandFilterUrl = (item) => {
    if (params.categoria && params.subcategoria) {
      const urlToUse = `catalogo?categoria=${params.categoria}&subcategoria=${params.subcategoria}&marca=${item}`;
      return urlToUse;
    }
    if (params.categoria) {
      const urlToUse = `catalogo?categoria=${params.categoria}&marca=${item}`;
      return urlToUse;
    }
    return `catalogo?marca=${item.db_name}`;
  };

  const brandFilter =
    params &&
    brands.map((item, index) => {
      return (
        <li className={`${style.category__filter__element} ${
          params.marca === item ? style.filter__active : ""
        }`} key={index}>
          <Link href={brandFilterUrl(item)}>
              {item}
          </Link>
        </li>
      );
    });

  return (
    <>
      {
        categoryNames && (
          <div className={style.filters}>
            <h3 className={style.h3}>Filtrar por</h3>
            <div className={style.filter__box}>
              <div className={style.filter__title}>
                <p>Categorias</p>
              </div>
                <ul className={style.ul__category}>{categoryFilter}</ul>
            </div>
            <div className={style.filter__box}>
              <div className={style.filter__title}>
                <p>Marcas</p>
              </div>
              <div className={style.filter__container}>
                <ul className={style.ul__category}>{brandFilter}</ul>
              </div>
            </div>
          </div>
        )
      }
    </>
    
  );
}

export default React.memo(ProductsFilter);
