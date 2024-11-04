import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-800 p-8">
      <h1 className=" text-2xl font-semibold text-white">
        <i className="text-[#388fb2] ri-sparkling-2-fill"></i>
        <span className="ml-2">LegacyFlix.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link className="hover:bg-[#388fb2] hover:text-white p-3 rounded-lg duration-300">
          <i class="ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#388fb2] hover:text-white p-3 rounded-lg duration-300">
          <i class="ri-shining-2-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#388fb2] hover:text-white p-3 rounded-lg duration-300">
          <i class="ri-movie-2-ai-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#388fb2] hover:text-white p-3 rounded-lg duration-300">
          <i class="ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#388fb2] hover:text-white p-3 rounded-lg duration-300">
          <i class="ri-team-line"></i> People
        </Link>
      </nav>
      <hr className="border-none h-[1px] my-10 mt-8 bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400">
        <h1 className="text-white font-semibold text-xl mb-5">
          Website Info
        </h1>
        <Link className="hover:bg-[#388fb2] hover:text-white p-3 rounded-lg duration-300">
        <i class="ri-information-2-fill"></i> About LegacyFlix
        </Link>
        <Link className="hover:bg-[#388fb2] hover:text-white p-3 rounded-lg duration-300">
          <i class="ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
