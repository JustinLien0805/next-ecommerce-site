import { loadStripe } from "@stripe/stripe-js";

import { useContext, useState, useEffect } from "react";
import Cart from "../components/Cart";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useRouter } from "next/router";
import data from "../data/data";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const checkout = () => {
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);
  const { cart } = useContext(ShoppingCartContext);
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

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <div className="flex bg-black h-[calc(100vh-80px)] justify-center items-center top-[80px]">
      <div className="bg-white rounded-lg w-4/5 h-4/5 sm:w-1/3 p-4 ">
        <div className="flex text-black flex-cols text-lg sm:text-3xl">
          <h1 className="mr-auto mb-4 font-bold">CART</h1>
        </div>
        {cart.map((item, i) => (
          <Cart key={i} cart={item} />
        ))}
        <div className="bottom-0">
          <div className="flex flex-col border-y-[1px] py-4 border-neutral-300 mt-20 mb-4">
            <div className="flex">
              <h2 className="text-xl pr-1 mr-auto">Subtotal:</h2>
              <h2 className="text-xl pr-1">${totalPrice.toLocaleString()}</h2>
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
            <form action="/api/checkout_sessions" method="POST">
              <button type="submit" role="link">
                CHECKOUT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkout;
