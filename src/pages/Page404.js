import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import MyAppBar from "../components/MyAppBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Beam© "}
      <Link color="inherit" href="https://southerntelecom.com">
        is a registered trademark of Southern Telecom, Inc.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "ghostwhite",
  },
  heading: {
    marginTop: theme.spacing(35),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    //backgroundColor: 'ghostwhite'
  },
}));

export default function Troubleshooting() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MyAppBar />
      <br />
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        className={classes.heading}
        gutterBottom
      >
        404 Page Not Found
      </Typography>
      <Typography align="center" gutterBottom>
        Sorry, the page you are looking doesn't exists
      </Typography>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </div>
  );
}
