import React from "react";
import { ImageListItem } from "@mui/material";
import styles from "./Gifs.module.css";
import { Gif } from "../../Models/gif.models";

function GifDetail(gif: Gif) {
  return (
    <ImageListItem key={gif.id}>
      <img
        src={`${gif.images.original.webp}?w=248&fit=crop&auto=format`}
        srcSet={`${gif.images.original.webp}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={gif.title}
        className={styles.Gifs}
        loading="lazy"
      />
    </ImageListItem>
  );
}

export default GifDetail;
