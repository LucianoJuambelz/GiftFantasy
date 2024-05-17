import React from "react";
import styles from "./Create.module.css";

function Create() {
  return (
    <section id={styles.Create}>
      <article className={styles.content}>
        <div className={styles.uploadContainer}>
          <picture className={styles.arrowUp}>
            <svg
              height="32"
              width="32"
              viewBox="0 0 24 24"
              aria-label="Agregar una imagen o un video"
              role="img"
            >
              <path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path>
            </svg>
          </picture>
          <h3>Upload your Gif</h3>
          <input type="file" />
        </div>
        <div>
          <form>
            <label>Add a Title</label>
            <input type="text" id="title" name="title" />
          </form>
        </div>
      </article>
    </section>
  );
}

export default Create;
