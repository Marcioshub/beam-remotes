import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as L } from "react-router-dom";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import beamlogo from "../images/beam_logo_white.png";
// user guide pdf
import UserGuide from "../pdf/i580_User_Guide_V1-0_20190521_EN.pdf";

const useStyles = makeStyles((theme) => ({
  appBtn: {
    flexGrow: 1,
    textAlign: "end",
  },
  menuButton: {
    marginRight: theme.spacing(0.5),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function MyAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => false}
    >
      <List>
        <ListItem
          button
          style={{ textAlign: "center" }}
          component={L}
          to={UserGuide}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText primary={"User Guide"} style={{ color: "#a67eb1" }} />
        </ListItem>
        <ListItem
          button
          style={{ textAlign: "center" }}
          component={L}
          to="/troubleshooting"
        >
          <ListItemText
            primary={"Troubleshooting"}
            style={{ color: "#a67eb1" }}
          />
        </ListItem>
        <ListItem
          button
          style={{ textAlign: "center" }}
          component="a"
          href="https://southerntelecom.mycusthelp.com/webapp/_rs/(S(tirwoac5kqzksjqnelwu02wa))/SupportHome.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText
            primary={"Product Support"}
            style={{ color: "#a67eb1" }}
          />
        </ListItem>
        <ListItem
          button
          style={{ textAlign: "center" }}
          component={L}
          to="/privacystatement"
        >
          <ListItemText
            primary={"Privacy Statement"}
            style={{ color: "#a67eb1" }}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            component={L}
            to="/"
          >
            <img width={100} src={beamlogo} alt="beam logo" />
          </IconButton>
          <div className={classes.appBtn}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        {list("top")}
      </SwipeableDrawer>
    </>
  );
}
