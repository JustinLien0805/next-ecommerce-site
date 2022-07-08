import { useState, useContext, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ProductContext } from "../context/productContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const Product = ({ id }) => {
  const { setSelected, productId, setProductId } = useContext(ProductContext);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(0);
  // const itemQuantity = getItemQuantity(id);
  // useEffect(()=>{
  //   setQuantity(itemQuantity)
  // },[itemQuantity])
  useEffect(() => {}, []);

  const selectProduct = () => {
    setProductId(id);
    setSelected(true);
  };
  const addQuantity = (id) => {
    //increaseCartQuantity(id);
  };
  const removeQuantity = (id) => {
    // if (quantity === 1) {
    //   removeFromCart(id);
    // } else {
    //   decreaseCartQuantity(id);
    // }
  };

  return (
    <>
      <div
        className={`w-96 h-60 mb-10 cursor-pointer group transform transition duration-300 ${
          productId === id
            ? "z-[60] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150"
            : "hover:scale-105"
        }`}
        onClick={selectProduct}
      >
        <img
          src="https://hk.hypebeast.com/files/2022/03/rolex-watches-and-wonders-2022-oyster-perpetual-air-king-gmt-master-ii-day-date-40-yacht-master-42-datejust-31-yacht-master-40-1.jpg"
          className="object-cover w-full h-full rounded-[1rem] "
        />

        <div className="flex items-center gap-5">
          <div className="mr-auto">
            <h1 className={"text-white bottom-10 font-bold text-2xl mt-2"}>
              GMT-Master II
            </h1>
            <h3 className="text-neutral-500 text-lg group-hover:text-white">
              $9000
            </h3>
          </div>
          {productId === id && (
            <div className="flex text-white gap-4">
              <button onClick={addQuantity}>
                <FaPlus className="" size="2em" />
              </button>
              <h1 className="text-2xl">{quantity}</h1>
              <button onClick={removeQuantity}>
                <FaMinus className="" size="2em" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
