import { createContext, useState } from "react";
export const ProductContext = createContext(null);
export const ProductContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(false);
  const [productId, setProductId] = useState(null);
  const value = { selected, setSelected, productId, setProductId };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

