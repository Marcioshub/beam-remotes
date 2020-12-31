import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
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
  card: {
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    //backgroundColor: 'ghostwhite'
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MyAppBar />
      <Card className={classes.card}>
        <CardHeader
          //   avatar={
          //     <Avatar aria-label="recipe" className={classes.avatar}>
          //       R
          //     </Avatar>
          //   }
          //   action={
          //     <IconButton aria-label="settings">
          //       <MoreVertIcon />
          //     </IconButton>
          //   }
          title="Privacy Statement"
          //   subheader="September 14, 2016"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Southern Telecom built the Beam Smart Remote app as a Free app. This
            SERVICE is provided by Southern Telecom at no cost and is intended
            for use as is. This page is used to inform visitors regarding our
            policies with the collection, use, and disclosure of Personal
            Information if anyone decided to use our Service. If you choose to
            use our Service, then you agree to the collection and use of
            information in relation to this policy. The Personal Information
            that we collect is used for providing and improving the Service. We
            will not use or share your information with anyone except as
            described in this Privacy Policy. The terms used in this Privacy
            Policy have the same meanings as in our Terms and Conditions, which
            is accessible at Beam Smart Remote unless otherwise defined in this
            Privacy Policy.
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Information Collection and Use
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information. The
            information that we request will be retained by us and used as
            described in this privacy policy. The app does use third party
            services that may collect information used to identify you. Link to
            privacy policy of third party service providers used by the app
          </Typography>
          <ul>
            <li>
              {" "}
              <a href="https://policies.google.com/privacy">
                Google Play Services
              </a>
            </li>
          </ul>
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Log Data
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Cookies
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device's internal
            memory. This Service does not use these “cookies” explicitly.
            However, the app may use third party code and libraries that use
            “cookies” to collect information and improve their services. You
            have the option to either accept or refuse these cookies and know
            when a cookie is being sent to your device. If you choose to refuse
            our cookies, you may not be able to use some portions of this
            Service.
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Service Providers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We may employ third-party companies and individuals due to the
            following reasons:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                To facilitate our Service;
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                To provide the Service on our behalf;
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                To perform Service-related services; or
              </Typography>
            </li>
            <li>
              <Typography variant="body2" color="textSecondary" component="p">
                To assist us in analyzing how our Service is used.
              </Typography>
            </li>
          </ul>
          <Typography variant="body2" color="textSecondary" component="p">
            We want to inform users of this Service that these third parties
            have access to your Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Security
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Links to Other Sites
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Children’s Privacy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from children
            under 13. In the case we discover that a child under 13 has provided
            us with personal information, we immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact us
            so that we will be able to do necessary actions.
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Changes to This Privacy Policy
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. These changes are effective immediately after they are posted
            on this page.
          </Typography>
          <br />
          <Typography
            variant="h6"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Contact Us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at support@southerntelecom.com.
          </Typography>
        </CardContent>
      </Card>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </div>
  );
}
