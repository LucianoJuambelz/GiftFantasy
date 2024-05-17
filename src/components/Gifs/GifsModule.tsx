import React from "react";
import TrendingComponent from "../Trendings/TrendingComponent";
import { useParams } from "react-router-dom";
import Gifs from "./Gifs";

function GifsModule({ value }: any) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const { keyword } = useParams();
  if (value) {
    return (
      <>
        <TrendingComponent />
        <Gifs keyword={value} />;
      </>
    );
  }

  return (
    <>
      <TrendingComponent />
      <Gifs keyword={keyword} />;
    </>
  );
}

export default GifsModule;
