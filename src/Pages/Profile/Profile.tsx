import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../../components/Spinner/Spinner";
import GifMap from "../../components/Gifs/GifMap";
import { useSelector } from "react-redux";

function Profile() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const bookmarksState = useSelector((state: any) => state.Favorites);

  const { logout, user } = useAuth0();
  const [bookmarks, setBookmars] = useState(bookmarksState);

  console.log(bookmarksState.lenght);

  useEffect(() => {
    setBookmars(bookmarksState);
  }, []);

  const handleLogout = () => {
    return logout();
  };

  return (
    <section id={styles.Profile}>
      {!user ? (
        <Spinner detail="" />
      ) : (
        <article>
          <picture className={styles.container}>
            <img src={user.picture} alt="user" />
          </picture>
          <h3 className={styles.profileH3}>{user.name}</h3>
          <p className={styles.profileP}>@{user.nickname}</p>
          <button
            className={styles.profileButton}
            onClick={() => handleLogout()}
          >
            LOGOUT
          </button>
        </article>
      )}
      {bookmarks.length ? (
        <article className={styles.bookmarkContainer}>
          <div className={styles.bookmark}>
            <h3>Bookmarks</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
            </svg>
          </div>
          {bookmarksState.length < 3 ? (
            <GifMap data={bookmarks} cols={2} />
          ) : (
            <GifMap data={bookmarks} cols={3} />
          )}
        </article>
      ) : null}
    </section>
  );
}

export default Profile;
