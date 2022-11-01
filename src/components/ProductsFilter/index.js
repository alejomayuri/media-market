import style from "./style.module.css";
import React from "react";
import { Link } from "wouter";
import { REAL_CATEGORIES, BRANDS } from "assets/cats";
import useQueryParams from "hooks/useQueryParams";

function ProductsFilter() {
  const params = useQueryParams();
  console.log(params);
  return (
    <div className={style.filter__box}>
      <h3>Categorias</h3>
      <div className={style.filter__container}>
        <ul className={style.ul__category}>
          {params &&
            REAL_CATEGORIES.map((item, index) => {
              return (
                <li className={style.category__filter__element} key={index}>
                  <Link href={item.slug}>
                    <button
                      className={`${
                        params.categoria === item.db_name
                          ? style.filter__active
                          : ""
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
                            <li
                              className={style.category__filter__element}
                              key={index}
                            >
                              <Link href={subitem.slug}>
                                <button>{subitem.name}</button>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(ProductsFilter);
