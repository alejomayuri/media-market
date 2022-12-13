import { createContext, useEffect, useState, useContext } from "react";

const CartProductsContext = createContext();

export const useCartProductsContext = () => useContext(CartProductsContext);

export const CartProductsProvider = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const value = { products, setProducts };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  return (
    <CartProductsContext.Provider value={value}>
      {props.children}
    </CartProductsContext.Provider>
  );
};
