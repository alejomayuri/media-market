import style from "./style.module.css";
import { Link } from "wouter";

export default function CategoriesAndSubcategoriesList({
  data,
  onClick,
  title,
}) {
  let dataBlobk;

  if (data?.type && data?.type === "category" && data?.categories) {
    dataBlobk = (
      <div className={style.categories__subcategories__container}>
        {data?.categories.map((item, index) => {
          return (
            <ul key={index} className={style.ul__categories__container}>
              <li className={style.item_list_container} key={index}>
                <Link
                  onClick={onClick}
                  className={style.a__item_list}
                  href={item.slug}
                >
                  <button>{item.name}</button>
                </Link>
              </li>
              {item.subcategories &&
                item.subcategories.length > 0 &&
                item.subcategories.map((subitem, index) => {
                  return (
                    <li className={style.item_list} key={index}>
                      <Link
                        onClick={onClick}
                        className={style.subcategory__name}
                        href={subitem.slug}
                      >
                        <button>{subitem.name}</button>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          );
        })}
      </div>
    );
  }

  if (data?.type && data?.type === "brand" && data?.brands) {
    dataBlobk = (
      <div className={style.brands__container}>
        {data?.brands.map((item, index) => {
          return (
            <Link
              onClick={onClick}
              className={style.a__item_list}
              href={item.slug}
              key={index}
            >
              <button className={style.brand__button}>{item.name}</button>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h3 className={style.h3}>{title}</h3>
      {dataBlobk}
    </div>
  );
}
