import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import MyAppBar from "../components/MyAppBar";
import MyAccordion from "../components/MyAccordion";

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
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
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
        style={{ marginLeft: 20 }}
        gutterBottom
      >
        Troubleshooting
      </Typography>
      <Typography align="center" gutterBottom>
        The Troubleshooting tips below can help you solve problems and answer
        questions you may have with your Beam remote control.
      </Typography>
      <br />
      <Container maxWidth="md">
        <MyAccordion />
      </Container>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </div>
  );
}
