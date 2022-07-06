import { FaTshirt, FaRedhat, FaShoppingBag } from "react-icons/fa";
import { GiConverseShoe, GiPearlNecklace } from "react-icons/gi";
import { BsWatch, BsSunglasses } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
  const router = useRouter();
  const [color, setColor] = useState(null);
  const genreName = genre.genre.name;
  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  });
  return (
    <Link href={`/genre/${genreName}`}>
      <div className={`w-full h-40 ${color} rounded-lg pl-4 pr-8 py-8 `}>
        <h1 className="text-white font-bold text-xl">{genre.genre.name}</h1>
        <div className="text-white text-7xl h-full flex justify-end items-center">
          {(genreName === "T-Shirt" && <FaTshirt />) ||
            (genreName === "Hats" && <FaRedhat />) ||
            (genreName === "Shoes" && <GiConverseShoe />) ||
            (genreName === "Accessories" && <GiPearlNecklace />) ||
            (genreName === "Bags" && <FaShoppingBag />) ||
            (genreName === "Watches" && <BsWatch />) ||
            (genreName === "Sunglasses" && <BsSunglasses />)}
        </div>
      </div>
    </Link>
  );
};

export default Genre;
