import {
  FaTshirt,
  FaRedhat,
  GiConverseShoe,
  GiPearlNecklace,
  FaShoppingBag,
  BsWatch,
  BsSunglasses,
} from "react-icons/fa";
import { useState, useEffect } from "react";
const colors = [
  "bg-gradient-to-r from-cyan-500 to-blue-500",
  "bg-gradient-to-r from-blue-500 to-purple-500",
  "bg-gradient-to-r from-purple-500 to-pink-500",
  "bg-gradient-to-r from-pink-500 to-red-500",
  "bg-gradient-to-r from-red-500 to-orange-500",
  "bg-gradient-to-r from-orange-500 to-yellow-500",
  "bg-gradient-to-r from-yellow-500 to-green-500",
  "bg-gradient-to-r from-green-500 to-teal-500",
  "bg-gradient-to-r from-teal-500 to-cyan-500",
];

const Genre = (genre) => {
  const [color, setColor] = useState(null);
  const genreName = genre.genre.name;

  const chooseIcon = (genreName) => {
    switch (genreName) {
      case "T-Shirt":
        return <FaTshirt />;
        break;
      case "Hats":
        return <FaRedhat />;
        break;
      case "Shoes":
        return <GiConverseShoe />;
        break;
      case "Accessories":
        return <GiPearlNecklace />;
        break;
      case "Bags":
        return <FaShoppingBag />;
        break;
      case "Watches":
        return <BsWatch />;
        break;
      case "Sunglasses":
        return <BsSunglasses />;
        break;
      default:
        return <FaTshirt />;
        break;
    }
  };

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  });
  return (
    <div className={`w-full h-40 ${color} rounded-lg pl-4 pr-8 py-8 `}>
      <h1 className="text-white font-bold text-xl">{genre.genre.name}</h1>
      <div className="text-white text-7xl h-full flex justify-end items-center">
        {}
      </div>
    </div>
  );
};

export default Genre;
