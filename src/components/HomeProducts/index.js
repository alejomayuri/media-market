import style from "./style.module.css";
import Product from "components/global/Product";
import { useFeaturedProducts } from "hooks/useFeaturedProducts";

export default function HomeProducts() {
  const featuredProducts = useFeaturedProducts();
  return (
    <div>
      <div className={style.home__products}>
        <h2 className={style.h2}>Productos destacados</h2>
        <div className={style.home__products__container}>
          
          {featuredProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
