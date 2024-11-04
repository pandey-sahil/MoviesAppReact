import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-[#121212] flex h-screen w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
  );
};

export default App;
