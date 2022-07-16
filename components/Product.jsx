import { useState, useContext, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ProductContext } from "../context/productContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
const Product = ({ product }) => {
  const { setSelected, productId, setProductId } = useContext(ProductContext);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(0);

  const selectProduct = () => {
    setProductId(product.id);
    setSelected(true);
  };
  const addQuantity = () => {
    setQuantity(quantity + 1);
    increaseCartQuantity(product.id);
  };
  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      decreaseCartQuantity(product.id);
    } else if (quantity === 1) {
      removeFromCart(product.id);
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setQuantity(getItemQuantity(product.id));
  }, []);

  return (
    <>
      <div
        className={`h-60 w-[20rem] mb-10 cursor-pointer group transform transition duration-300 ${
          productId === product.id
            ? "z-[70] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:scale-150"
            : "hover:scale-105"
        }`}
        onClick={selectProduct}
      >
        <img
          src={product.img}
          className="object-cover w-full h-full rounded-[1rem] "
        />

        <div className="flex items-center gap-5">
          <div className="mr-auto">
            <h1 className={"text-white bottom-10 font-bold text-2xl mt-2"}>
              {product.name}
            </h1>
            <h3
              className={`text-neutral-500 text-lg ${
                productId !== product.id && "group-hover:text-white"
              }`}
            >
              ${product.price}
            </h3>
          </div>
          {productId === product.id && (
            <div className="flex flex-col">
              <div className="flex text-white gap-4 my-2">
                <button onClick={addQuantity}>
                  <FaPlus className="" size="1.5em" />
                </button>
                <h1 className="text-2xl">{quantity}</h1>
                <button onClick={removeQuantity}>
                  <FaMinus className="" size="1.5em" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
