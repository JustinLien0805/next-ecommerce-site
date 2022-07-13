import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const getItemQuantity = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCart((currentItems) => {
      setTotal(total + 1);
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cart);
  };
  const decreaseCartQuantity = (id) => {
    setCart((currentItems) => {
      setTotal(total - 1);
      if (currentItems.find((item) => item.id === id)?.quantity == null) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
    console.log(cart);
  };

  const removeFromCart = (id) => {
    setTotal(total - 1);
    setCart((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  const value = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    total,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
