import { useEffect, useState } from "react";
import { productsColection } from "firebase.js";

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsColection().then((products) => setProducts(products));
  }, []);

  const featuredProducts = products?.filter((product) => product.destacado);

  return featuredProducts;
};
