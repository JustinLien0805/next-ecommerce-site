import React from "react";
import Genre from "./Genre";

const Genres = () => {
  const genres = [
    { id: 1, name: "T-Shirt" },
    { id: 2, name: "Hats" },
    { id: 3, name: "Shoes" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Bags" },
    { id: 6, name: "Watches" },
    { id: 7, name: "Sunglasses" },
  ];
  return (
    <div className="my-10 flex flex-col">
      <h1 className="text-white text-5xl font-bold">Genres</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
        {genres.map((genre, index) => (
          <Genre key={index} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default Genres;
