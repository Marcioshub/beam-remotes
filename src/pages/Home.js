import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import beamHero from "../images/beamheroimage1.png";
import { Parallax } from "react-parallax";
import MyAppBar from "../components/MyAppBar";
// user guide pdf
import UserGuide from "../pdf/i580_User_Guide_V1-0_20190521_EN.pdf";
import CodeSearch from "../components/CodeSearch";
import BeamCarousel from "../components/BeamCarousel";

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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "ghostwhite",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "ghostwhite",
    padding: theme.spacing(6),
  },
  appBtn: {
    flexGrow: 1,
    textAlign: "end",
  },
  text: {
    backgroundColor: "ghostwhite",
  },
  beamHeroImage: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      objectFit: "cover",
    },
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      /* Create the parallax scrolling effect */
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  mobileImg: {
    [theme.breakpoints.down("sm")]: {
      height: 500,
      objectFit: "cover",
      width: "100%",
      // backgroundSize: "contain",
      // backgroundRepeat: "no-repeat",
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  appNumbers: {
    marginLeft: theme.spacing(10),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor: "ghostwhite" }}>
      <CssBaseline />
      <MyAppBar />
      <main className={classes.text}>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={beamHero}
          bgImageAlt="the dog"
          strength={-200}
          className={classes.beamHeroImage}
        >
          <div className={classes.beamHeroImage} />
        </Parallax>
        <img src={beamHero} className={classes.mobileImg} alt="hero" />
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Beam Smart Remote i580
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              paragraph
            >
              We suggest using the Beam app to program your remote. However, if
              you would like to program the remote using the Code List, please
              use the code finder tool below to quickly find compatible codes
              for the different devices in your home. If there are several codes
              available for your device, test each one and select the code that
              is the most compatible with your device.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="textSecondary"
              paragraph
            >
              For more information, please refer to “PROGRAMMING USING THE CODE
              LIST” on{" "}
              <a
                href={`${UserGuide}#page=8`}
                target="_blank"
                rel="noopener noreferrer"
              >
                page 07 of the user guide.
              </a>
            </Typography>
            <br />
            <CodeSearch />
          </Container>
        </div>
        <BeamCarousel />
        <br />
        <div className={classes.text}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Want To Use The App Instead?
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="textSecondary"
              paragraph
            >
              The Beam Smart Remote app helps you stay updated with new codes
              that are added to our cloud database so that your remote doesn’t
              become obsolete. The app also makes programming your Beam remote
              quick and simple. Download the app for free by following the steps
              below. Downloading and using the app:
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="textSecondary"
              paragraph
              className={classes.appNumbers}
            >
              1. Search for “Beam Smart Remote” on either the Apple or Google
              app stores and then download it.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="textSecondary"
              paragraph
              className={classes.appNumbers}
            >
              2. Make sure the Bluetooth on your smartphone is turned on, then
              open the app.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              color="textSecondary"
              paragraph
              className={classes.appNumbers}
            >
              3. Follow the app prompts, to connect with, and program your
              remote.
            </Typography>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Beam
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}
