import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getItemQuantity = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        console.log('if')
        return [...currentItems, { id, quantity: 1 }];
      } else {
        console.log('else')
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCart((currentItems) => {
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
  };

  const removeFromCart = (id) => {
    setCart((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  const value = {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
