import React from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div className="relative flex justify-center items-center m-5">
      <div className="text-white flex items-center w-[60%] px-5 py-2 rounded-full border-[1px] border-zinc-500 relative justify-center ">
        <i class="ri-search-2-line"></i>
        <input
          className=" mx-5 w-[100%] text-zinc-200 text-lg outline-none bg-transparent "
          type="text"
          placeholder="Search anything"
        />
        <i class="ri-close-large-fill"></i>
      </div>
      <div className="w-[58%] h-[50vh] bg-zinc-900 absolute top-[100%]">
        <Link className="flex hover:bg-zinc-800 hover:text-white m-2 text-white rounded gap-3 p-1">
          <img
            className="object-cover rounded h-32 w-26"
            src="https://imgs.search.brave.com/bXdqPuk1K8NIm70rPvbCGApRB4ZyLdP_QHMtq6nRoHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qll6aGtNMlF4/WVdNdFl6Rm1NaTAw/T0dVMkxUazBPVGt0/Tm1VMk1qWXlOakV4/T1dOa1hrRXlYa0Zx/Y0djQC5qcGc"
            alt=""
          />
          <div className="my-auto pr-5">
            <h1 className="text-xl">One Piece</h1>
            <h3 className="text-sm text-zinc-400 my-1">Category: Tv Show</h3>
            <h5 className="text-sm text-zinc-400">
              Description: Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the "One Piece."
            </h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
