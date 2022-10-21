import { useEffect, useState } from "react";
import { productsColection } from "firebase.js";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsColection().then((products) => setProducts(products));
  }, []);

  return products;
};
