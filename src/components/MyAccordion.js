import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  text: {
    color: "#a67eb1",
  },
}));

export default function MyAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            The remote can't be programmed to operate my device
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            If you're using the app and having trouble programming your remote,
            try using the included printed code list or the manual programming
            method explained in the Programming section of the user guide.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Some of the buttons of the remote are not supported or working
            properly on my device
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            It's possible the code that you programmed is not fully compatible
            with your device. Try selecting the next code from the options
            available for the category and brand of your device. If you are
            unsuccessful at finding a better matching code, it may be that there
            are some buttons from your device's original remote that are not
            supported. You can easily copy them using the Custom Buttons or
            Programming Manually methods explained in this user guide.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            My device does not match any of the DEVICE CATEGORIES on the remote
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            If you have a device such as an air conditioner, heater, or anything
            else that is controlled by an IR remote and does not fit one of the
            remote’s Device Category options, on the app select OTHER and use
            SMART SEARCH to try and find a matching code from our cloud database
            or copy all the buttons of the original remote and store it under
            OTHER in Device Categories of the remote.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            My device’s menu or app hub does not appear
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Menu and app hub access isn’t supported for all brands. You can copy
            that button from your original remote to the Beam remote using the
            Custom Buttons or Program Manually method.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            The remote will not adjust the volume or channel on my device
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Make sure the remote is in the correct Device Category mode (TV,
            SAT/CBL, AUDIO, B-RAY/DVD, STREAM, OTHER) that controls the volume
            and channel of your device.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            How do I know what Device Category or Activity mode the remote is
            in?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            When you press any button on the remote, the current Device Category
            or tivity mode is lit in red.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            I copied a button from my original remote but it’s not working
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Beam is capable of copying any IR remote control button. However,
            sometimes it is necessary to repeat the copying procedure to get the
            button working properly sometimes several attempts are required.
            Please make sure that when copying, the two remotes are held closely
            together with their fronts pointing at each other.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            I can’t change the Activity settings on the app or on the remote
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            To use the Activity buttons to control combo devices like TV+STB/CBL
            or TV+DVD, you must program the individual corresponding devices.
            Please refer to the Activity section in the user guide for more
            information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            When I press the POWER button in Activity mode, some of my devices
            do simultaneously turn on or off
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            For this feature to work, prior to pressing the POWER button, all
            the devices must be either on or off.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            My remote isn’t working properly
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Try changing the batteries and make sure they are properly
            installed. If possible, use alkaline batteries.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            I cannot find my remote
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.text}>
            Open the app and on the home screen press “FIND MY REMOTE”. If the
            remote doesn’t beep, try walking around to the areas where you
            believe the remote was lost.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
