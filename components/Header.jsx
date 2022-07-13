import { useContext, useState } from "react";
import Cart from "./Cart";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const [selectCart, setSelectCart] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const { total } = useContext(ShoppingCartContext);
  return (
    <div className="flex w-full my-6">
      <h1
        className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-700 mr-auto cursor-pointer"
        onClick={handleClick}
      >
        SHART
      </h1>
      <div
        className="relative cursor-pointer"
        onClick={() => setSelectCart(true)}
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
        {total !== 0 && (
          <div className="absolute right-0 bottom-0 rounded-full border-4 border-violet-300 w-8 h-8 flex justify-center items-center translate-x-1/4 translate-y-1/4">
            <h2 className="text-white">{total}</h2>
          </div>
        )}
      </div>
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
            <Cart />
            <Cart />
            <div className="flex justify-end">
              <h2 className="text-3xl">Total: $18000</h2>
            </div>
            <div className="flex justify-center items-center rounded-lg border-2 border-black mt-4 hover:text-white hover:bg-black cursor-pointer">
              <h2>CHECKOUT</h2>
            </div>
          </div>
          <div
            className="bg-neutral-900 h-screen w-full z-[60] fixed opacity-50 cursor-pointer"
            onClick={() => {
              setSelectCart(false);
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default Header;
