import { useEffect, useState, useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import data from "../data/data";
const Cart = ({ cart }) => {
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(0);
  const { removeFromCart } = useContext(ShoppingCartContext);
  useEffect(() => {
    setProduct(data.products.filter((item) => item.id === cart.id));
  }, []);
  useEffect(() => {
    if (product !== null) {
      setPrice(product[0].price * cart.quantity);
    }
  }, [product]);
  return (
    <>
      {product !== null && (
        <div className="grid grid-flow-col my-4 gap-4 text-lg border-2 border-violet-700 p-2 rounded-lg">
          <div className="col-span-2">
            <h2 className="text-lg font-bold">{product[0].name}</h2>
            <h2>
              ${product[0].price.toLocaleString()} * {cart.quantity}
            </h2>
          </div>
          <div className="col-span-1 flex items-end justify-end flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-violet-700 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              onClick={() => {
                removeFromCart(product[0].id);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <h2>${price.toLocaleString()}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
