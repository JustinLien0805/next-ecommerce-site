import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  ProductContextProvider,
  ProductContext,
} from "../../../context/productContext";
import Header from "../../../components/Header";
import Product from "../../../components/Product";
const colors = [
  "red",
  "orange",
  "yellow",
  "teal",
  "blue",
  "indigo",
  "purple",
  "pink",
  "cyan",
  "fuchsia",
];

const GenreProduct = () => {
  const router = useRouter();
  const { genreName } = router.query;
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);
  return (
    <ProductContextProvider>
      <div className="bg-black h-screen flex md:px-44 px-20 flex-col overflow-scroll items-center">
        <Overlay />
        <Header />
        <h1 className="text-white text-5xl font-bold mt-5 ">{genreName}</h1>
        <hr className={`border-t-4 border-${color}-400 w-32`} />
        <div className="mt-8 grid  lg:grid-cols-2 gap-10">
          {[1, 2, 3].map((i) => (
            <Product id={i} key={i} />
          ))}
        </div>
      </div>
    </ProductContextProvider>
  );
};

const Overlay = () => {
  const { selected, setSelected, setProductId } = useContext(ProductContext);
  return (
    <div
      className={
        selected ? `bg-neutral-900 h-screen w-full z-[60] fixed opacity-50` : ""
      }
      onClick={() => {
        setSelected(false);
        setProductId(null);
      }}
    ></div>
  );
};

export default GenreProduct;
