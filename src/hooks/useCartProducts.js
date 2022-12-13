import { useEffect, useState } from "react";
import { productsColection } from "firebase.js";

export const useCartProducts = ({ productsInTheCart = [] }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
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

  useEffect(() => {
    if (myCart.length > 0) {
      setTotalPrice(
        myCart?.reduce((acc, element) => {
          return acc + element?.product?.precio * element?.quantity;
        }, 0)
      );
    }
  }, [myCart]);

  return { myCart, loading, totalPrice };
};
