import { useContext, useState, useEffect } from "react";
import Cart from "./Cart";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useRouter } from "next/router";
import data from "../data/data";
const Header = () => {
  const router = useRouter();
  const [selectCart, setSelectCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const { total, cart } = useContext(ShoppingCartContext);
  // get price by id * cart.quantity
  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      const price = data.products.find(
        (product) => product.id === item.id
      ).price;
      totalPrice += price * item.quantity;
    });
    setTotalPrice(totalPrice);
  }, [cart]);

  return (
    <div className="w-full bg-black sticky top-0 z-[60]">
      <div className="flex px-8 py-4">
        <h1
          className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-700 mr-auto cursor-pointer"
          onClick={handleClick}
        >
          SHART
        </h1>
        <button
          className={`relative ${
            total >= 0 ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={() => setSelectCart(true)}
          disabled={total < 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" text-violet-500 h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {total > 0 && (
            <div className="absolute right-0 bottom-0 rounded-full border-4 border-cyan-300 w-8 h-8 flex justify-center items-center translate-x-1/4 translate-y-1/4">
              <h2 className="text-cyan-300 font-bold">{total}</h2>
            </div>
          )}
        </button>
        {selectCart && (
          <>
            <div className="absolute h-screen sm:w-1/3 w-full bg-white right-0 top-0 z-[100] p-4">
              <div className="flex text-black flex-cols text-lg sm:text-3xl">
                <h1 className="mr-auto mb-4 font-bold">CART</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-8 sm:w-8 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  onClick={() => {
                    setSelectCart(false);
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              {cart.map((item, i) => (
                <Cart key={i} cart={item} />
              ))}
              <div className="flex flex-col border-y-[1px] py-4 border-neutral-300 mt-20 mb-4">
                <div className="flex">
                  <h2 className="text-xl pr-1 mr-auto">Subtotal:</h2>
                  <h2 className="text-xl pr-1">
                    ${totalPrice.toLocaleString()}
                  </h2>
                </div>
                <div className="flex">
                  <h2 className="text-xl pr-1 mr-auto">Shipping:</h2>
                  <h2 className="text-xl pr-1">FREE</h2>
                </div>
              </div>
              <div className="flex font-bold">
                <h2 className="text-xl pr-1 mr-auto">Total:</h2>
                <h2 className="text-xl pr-1">${totalPrice.toLocaleString()}</h2>
              </div>
              <div
                className="flex justify-center items-center h-8 rounded-lg bg-violet-700 text-white mt-4 hover:text-white hover:bg-black cursor-pointer"
                onClick={() => {
                  router.push("/checkout");
                }}
              >
                <h2>CHECKOUT</h2>
              </div>
            </div>
            <div
              className="top-0 left-0 bg-neutral-900 h-screen w-full z-[60] fixed opacity-50 cursor-pointer"
              onClick={() => {
                setSelectCart(false);
              }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
