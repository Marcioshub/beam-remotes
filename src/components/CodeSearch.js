import React, { useState, useEffect, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
// devices
import devices from "../devices/devices.json";
// brands
import audio from "../brands/audio.json";
import blu from "../brands/blu.json";
import digitalframe from "../brands/digitalframe.json";
import dvd from "../brands/dvdplayer.json";
import soundbar from "../brands/soundbar.json";
import stb from "../brands/stb.json";
import streaming from "../brands/streaming.json";
import tv from "../brands/tv.json";
import tvdvd from "../brands/tvdvd.json";
import vcr from "../brands/vcr.json";
// codes
import codes from "../codes/codes.json";

const useStyles = makeStyles((theme) => ({
  chips: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default memo(function CodeSearch() {
  const classes = useStyles();
  const [device, setDevice] = useState();
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState();
  const [showBrands, setShowBrands] = useState(true);
  //const [codes, setCodes] = useState([]);

  useEffect(() => {
    switch (device) {
      case "TV":
        setShowBrands(false);
        setBrand();
        break;

      case "TV/DVD COMBO":
        setShowBrands(false);
        setBrand();
        break;

      case "SET-TOP BOX":
        setShowBrands(false);
        setBrand();
        break;

      case "STREAMING MEDIA PLAYER":
        setShowBrands(false);
        setBrand();
        break;

      case "BLU-RAY":
        setShowBrands(false);
        setBrand();
        break;

      case "DIGITAL FRAME":
        setShowBrands(false);
        setBrand();
        break;

      case "AUDIO":
        setShowBrands(false);
        setBrand();
        break;

      case "VCR":
        setShowBrands(false);
        setBrand();
        break;

      case "SOUNDBAR":
        setShowBrands(false);
        setBrand();
        break;

      case "DVD PLAYER":
        setShowBrands(false);
        setBrand();
        break;

      default:
        break;
    }

    switch (device) {
      case "TV":
        setBrands(tv);
        return;

      case "TV/DVD COMBO":
        setBrands(tvdvd);
        return;

      case "SET-TOP BOX":
        setBrands(stb);
        return;

      case "STREAMING MEDIA PLAYER":
        setBrands(streaming);
        return;

      case "BLU-RAY":
        setBrands(blu);
        return;

      case "DIGITAL FRAME":
        setBrands(digitalframe);
        return;

      case "AUDIO":
        setBrands(audio);
        return;

      case "VCR":
        setBrands(vcr);
        return;

      case "SOUNDBAR":
        setBrands(soundbar);
        return;

      case "DVD PLAYER":
        setBrands(dvd);
        return;

      default:
        setBrands([]);
        return;
    }
  }, [device]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <Autocomplete
          id="combo-box-demo1"
          options={devices}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="Select device" variant="outlined" />
          )}
          onChange={(e, value) => value && setDevice(value.title)}
          style={{ flexGrow: 1, margin: 5 }}
        />{" "}
        <Autocomplete
          id="combo-box-demo2"
          options={brands}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField {...params} label="Select brand" variant="outlined" />
          )}
          onChange={(e, value) => value && setBrand(value.title)}
          style={{ flexGrow: 1, margin: 5 }}
          disabled={showBrands}
        />
      </div>
      <br />
      <CssBaseline />
      <Container maxWidth="sm">
        <div className={classes.chips}>
          {device && brand
            ? codes
                .filter(
                  (item) => item.device === device && item.brand === brand
                )
                .map((c, index) => (
                  <Chip
                    key={index}
                    label={c.code}
                    color="primary"
                    variant="outlined"
                  />
                ))
            : null}
        </div>
      </Container>
    </>
  );
});
