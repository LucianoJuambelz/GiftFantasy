import { ImageList } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Gif } from "../../Models/gif.models";
import GifDetail from "./GifCard";

interface GifMap {
  data: Gif[];
  cols: number;
}

function GifMap({ data, cols }: GifMap) {
  return (
    <>
      <ImageList variant="masonry" cols={cols} gap={15}>
        {data.map((gif: Gif) => (
          <Link to={`/gif/${gif.id}`} key={`${gif.id}`}>
            <GifDetail
              id={gif.id}
              type={gif.type}
              url={gif.url}
              username={gif.username}
              title={gif.title}
              user={gif.user}
              images={gif.images}
            />
          </Link>
        ))}
      </ImageList>
    </>
  );
}

export default GifMap;
