import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchResultItem = ({ title, category, description, imageUrl, link }) => (
  <Link
    to={link}
    className="flex hover:bg-zinc-800 m-2 text-white rounded-lg gap-4 p-3 transition duration-200 ease-in-out transform hover:scale-105"
  >
    <img
      className="object-cover rounded-lg h-20 w-20"
      src={imageUrl}
      alt={title}
      aria-hidden="true"
    />
    <div className="flex flex-col justify-center">
      <h1 className="text-lg font-semibold">{title}</h1>
      <h3 className="text-sm text-zinc-400">Category: {category}</h3>
      <p className="text-xs text-zinc-500">{description}</p>
    </div>
  </Link>
);

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const mockResults = [
    {
      title: "One Piece",
      category: "TV Show",
      description:
        "Monkey D. Luffy sets off on an adventure with his pirate crew to find the legendary 'One Piece' treasure.",
      imageUrl:
        "https://imgs.search.brave.com/bXdqPuk1K8NIm70rPvbCGApRB4ZyLdP_QHMtq6nRoHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6aGtNMlF4/WVdNdFl6Rm1NaTAw/T0dVMkxUazBPVGt0/Tm1VMk1qWXlOakV4/T1dOa1hrRXlYa0Zx/Y0djQC5qcGc",
      link: "/one-piece",
    },
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 0) {
      setResults(
        mockResults.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative flex justify-center items-center m-5 mr-32">
      <div className="flex items-center w-[60%] px-5 py-2 rounded-full border border-zinc-600 shadow-lg bg-zinc-800/60 backdrop-blur-md relative">
        <i className="ri-search-2-line text-zinc-400 text-lg" aria-hidden="true"></i>
        <input
          onChange={handleSearch}
          value={query}
          className="mx-5 w-full text-white text-lg outline-none bg-transparent placeholder-zinc-500"
          type="text"
          placeholder="Search anything..."
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="ri-close-line text-zinc-400 cursor-pointer transition transform hover:text-zinc-300 hover:scale-110"
          ></i>
        )}
      </div>
      {query.length > 0 && results.length > 0 && (
        <div className="w-[58%] max-h-[50vh] bg-zinc-900 border border-zinc-700 rounded-lg overflow-auto shadow-lg absolute top-[100%] mt-2 py-3">
          {results.map((result, index) => (
            <SearchResultItem key={index} {...result} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;
