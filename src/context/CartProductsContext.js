import { createContext, useState, useContext } from "react";

const CartProductsContext = createContext();

export const useCartProductsContext = () => useContext(CartProductsContext);

export const CartProductsProvider = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const value = { products, setProducts };

  return (
    <CartProductsContext.Provider value={value}>
      {props.children}
    </CartProductsContext.Provider>
  );
};
