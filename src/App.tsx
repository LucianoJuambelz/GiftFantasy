import React from "react";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Switch from "./components/Switch/Switch";
import { Container } from "@mui/material";
import { Auth0Provider } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

function App() {
  const allFavorites = useSelector((state: any) => state.Favorites);

  console.log(allFavorites, "bookmarks");
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN as string}
      clientId={process.env.REACT_APP_CLIENTID as string}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <main className={styles.main}>
          <Header />
          <Container maxWidth="lg">
            <section className={styles.container}>
              <Switch />
              <Footer />
            </section>
          </Container>
        </main>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
