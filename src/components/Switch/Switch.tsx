import React from "react";
import { Routes, Route } from "react-router-dom";
import Create from "../../Pages/Create/Create";
import Detail from "../../Pages/Detail/Detail";
import Profile from "../../Pages/Profile/Profile";
import Random from "../../Pages/Random/Random";
import Today from "../../Pages/Today/Today";
import Trending from "../../Pages/Trending/TrendingPage";
import GifsModule from "../Gifs/GifsModule";
import Home from "../Home/Home";

function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gif/:id" element={<Detail />} />
      <Route path="/gifs/:keyword" element={<GifsModule />} />
      <Route path="/today" element={<Today />} />
      <Route path="/trending/:trending" element={<Trending />} />
      <Route path="/create" element={<Create />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  );
}

export default Switch;
