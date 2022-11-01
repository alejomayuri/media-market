import style from "./style.module.css";
import Product from "components/global/Product";
import { useProducts } from "hooks/useProducts";
import useQueryParams from "hooks/useQueryParams";
import { REAL_CATEGORIES } from "assets/cats";

export default function ProductsContainer() {
  const products = useProducts();
  const params = useQueryParams();

  return (
    <div className={style.catalogue__products__section}>
      <div className={style.category__title}>
        <h2>
          {params && params.categoria
            ? REAL_CATEGORIES.find((item) => item.db_name === params.categoria)
                .name
            : "Todos los productos"}
        </h2>
        {params && params.subcategoria && (
          <h2>
            {params && params.subcategoria
              ? REAL_CATEGORIES.find(
                  (item) => item.db_name === params.categoria
                ).subcategories.find(
                  (item) => item.db_name === params.subcategoria
                ).name
              : null}
          </h2>
        )}
      </div>

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
