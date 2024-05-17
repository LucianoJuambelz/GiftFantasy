import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import headerStyles from "../Header/Header.module.css";
import styles from "./Burger.module.css";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AttractionsRoundedIcon from "@mui/icons-material/AttractionsRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

type Anchor = "right";

export default function TemporaryDrawer() {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/">
        <div id={styles.logoBurger}>
          <img className={headerStyles.logo} src="/favicon.ico" alt="logo" />
          <p>Gift Fantasy</p>
        </div>
      </Link>
      <List>
        {isAuthenticated ? (
          <Link to="/profile">
            <ListItem key="profile" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img
                    src={user && user.picture}
                    className={styles.user}
                    alt="user"
                  />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </Link>
        ) : (
          <button onClick={() => loginWithRedirect()} id={styles.buttonLogin}>
            <ListItem key="profile" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Login / Register" />
              </ListItemButton>
            </ListItem>
          </button>
        )}

        <Link to="/random">
          <ListItem key="Random" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AttractionsRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Random" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/today">
          <ListItem key="Today" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarTodayRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Today" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <div onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </div>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
