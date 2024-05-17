import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Header.module.css";
import appStyles from "../../App.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Burger from "../Burger/Burger";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <img className={styles.logo} src="/favicon.ico" alt="logo" />
        </Link>
        <div id={appStyles.desktopVisible}>
          <Link to="/today">
            <button className={styles.navButton} id={appStyles.red}>
              Today
            </button>
          </Link>
        </div>
        <div
          id={appStyles.desktopVisible}
          onClick={
            pathname.includes("/random")
              ? () => window.location.reload()
              : () => ""
          }
        >
          <Link to="/random">
            <button
              className={`${styles.navButton} ${styles.rightSideButton}`}
              id={appStyles.yellow}
            >
              Random
            </button>
          </Link>
        </div>
        <Searchbar />
        <div
          className={styles.navButtonContainer}
          id={appStyles.desktopVisible}
        >
          {isAuthenticated ? (
            <Link to="/profile">
              <div
                className={`${styles.profileContainer} ${styles.rightSideButton}`}
                id={appStyles.blue}
              >
                <img
                  className={styles.profile}
                  src={user && user.picture}
                  alt="user"
                />
              </div>
            </Link>
          ) : (
            <button
              className={`${styles.navButton} ${styles.rightSideButton}`}
              id={appStyles.blue}
              onClick={() => loginWithRedirect()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={styles.navLogos}
              >
                <path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7H481.3c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320H161.3z" />
              </svg>
            </button>
          )}
        </div>
        <div className={styles.menu} id={appStyles.mobileVisible}>
          <Burger />
        </div>
      </nav>
    </header>
  );
}

export default Header;
