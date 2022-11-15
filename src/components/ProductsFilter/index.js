import style from "./style.module.css";
import React from "react";
import { Link } from "wouter";
import { REAL_CATEGORIES, BRANDS } from "assets/cats";
import useQueryParams from "hooks/useQueryParams";

function ProductsFilter() {
  const params = useQueryParams();

  const categoryFilter =
    params &&
    REAL_CATEGORIES.categories.map((item, index) => {
      return (
        <li className={style.category__filter__element} key={index}>
          <Link href={item.slug}>
            <button
              className={`${
                params.categoria === item.db_name ? style.filter__active : ""
              }`}
            >
              {item.name}
            </button>
          </Link>
          {params.categoria === item.db_name &&
            item.subcategories &&
            item.subcategories.length > 0 && (
              <ul className={style.ul__subcategory}>
                {item.subcategories.map((subitem, index) => {
                  return (
                    <li className={style.category__filter__element} key={index}>
                      <Link href={subitem.slug}>
                        <button
                          className={`${
                            params.subcategoria === subitem.db_name
                              ? style.filter__active
                              : ""
                          }`}
                        >
                          {subitem.name}
                        </button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
        </li>
      );
    });

  const brandFilterUrl = (item) => {
    if (params.categoria && params.subcategoria) {
      const urlToUse = `catalogo?categoria=${params.categoria}&subcategoria=${params.subcategoria}&marca=${item.db_name}`;
      return urlToUse;
    }
    if (params.categoria) {
      const urlToUse = `catalogo?categoria=${params.categoria}&marca=${item.db_name}`;
      return urlToUse;
    }
    return `catalogo?marca=${item.db_name}`;
  };

  const brandFilter =
    params &&
    BRANDS.brands.map((item, index) => {
      return (
        <li className={style.category__filter__element} key={index}>
          <Link href={brandFilterUrl(item)}>
            <button
              className={`${
                params.marca === item.db_name ? style.filter__active : ""
              }`}
            >
              {item.name}
            </button>
          </Link>
        </li>
      );
    });

  return (
    <div className={style.filters}>
      <div className={style.filter__box}>
        <div className={style.filter__title}>
          <h3>Categorias</h3>
        </div>
        <div className={style.filter__container}>
          <ul className={style.ul__category}>{categoryFilter}</ul>
        </div>
      </div>
      <div className={style.filter__box}>
        <div className={style.filter__title}>
          <h3>Marcas</h3>
        </div>
        <div className={style.filter__container}>
          <ul className={style.ul__category}>{brandFilter}</ul>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductsFilter);
