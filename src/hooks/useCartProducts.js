import { useEffect, useState } from "react";
import { productsColection } from "firebase.js";

export const useCartProducts = ({ productsInTheCart = [] }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  let myCart;

  useEffect(() => {
    productsColection()
      .then((products) => setProducts(products))
      .then(() => setLoading(false));
  }, []);

  myCart = productsInTheCart?.map((product) => {
    const productInDB = products.find((item) => item.id === product.product);
    return {
      product: productInDB,
      quantity: product.quantity,
    };
  });

  return { myCart, loading };
};
