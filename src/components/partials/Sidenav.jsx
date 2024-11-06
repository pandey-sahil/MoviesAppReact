import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen bg-zinc-900 border-r border-zinc-800 p-8 shadow-md flex flex-col justify-between">
      {/* Logo Section */}
      <h1 className="text-2xl font-semibold text-white flex items-center mb-10">
        <i className="text-[#388fb2] ri-sparkling-2-fill"></i>
        <span className="ml-2">LegacyFlix</span>
      </h1>

      {/* Navigation Links - New Feeds */}
      <nav className="flex flex-col text-zinc-400">
        <h2 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h2>
        <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#388fb2] hover:text-white transition-all duration-150 ease-in-out">
          <i className="ri-fire-fill text-lg"></i> Trending
        </Link>
        <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#388fb2] hover:text-white transition-all duration-150 ease-in-out">
          <i className="ri-shining-2-fill text-lg"></i> Popular
        </Link>
        <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#388fb2] hover:text-white transition-all duration-150 ease-in-out">
          <i className="ri-movie-2-fill text-lg"></i> Movies
        </Link>
        <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#388fb2] hover:text-white transition-all duration-150 ease-in-out">
          <i className="ri-tv-2-fill text-lg"></i> TV Shows
        </Link>
        <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#388fb2] hover:text-white transition-all duration-150 ease-in-out">
          <i className="ri-team-line text-lg"></i> People
        </Link>
      </nav>

      {/* Divider */}
      <hr className="border-none h-[1px] my-10 bg-zinc-700" />

      {/* Navigation Links - Website Info */}
      <nav className="flex flex-col text-zinc-400">
        <h2 className="text-white font-semibold text-xl mb-5">Website Info</h2>
        <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#388fb2] hover:text-white transition-all duration-150 ease-in-out">
          <i className="ri-information-2-fill text-lg"></i> About LegacyFlix
        </Link>
        <Link className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#388fb2] hover:text-white transition-all duration-150 ease-in-out">
          <i className="ri-phone-fill text-lg"></i> Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
 