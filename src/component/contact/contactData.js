import React from "react";

import { Grid, Typography } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Contact from "./contact";
import bgimg from "../../assets/liner.avif";
import ContactForm from "./form";

const ContactData = () => {
  // const cardColors = ["#ffe1bd", "#ffe2bd", "#ffe3bd",'#ffe1bd'];

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        height="30vh"
      >
        <Grid item xs={12} md={6} lg={12}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            style={{ fontWeight: "bold", marginTop: "50px" }}
          >
            Contact Us
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        height="70vh"
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          lg={8}
        >
          <Grid lg={5}>
            <Contact icon={<EmailIcon />} data="info@infrablok.com" />

            <Contact
              icon={<LocationOnIcon />}
              data="401, Tower B, Ithum Tower IT Park, Sec 62, Noida Gautam Buddha Nagar UP 201301 IN"
            />
          </Grid>
          <Grid lg={5}>
            <Contact
              icon={<LinkedInIcon />}
              data="https://www.linkedin.com/company/
              infrablok"
            />
            <Contact
              icon={<TwitterIcon />}
              data="https://twitter.com/infrablok"
            />
          </Grid>
        </Grid>
        <Grid lg={4}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactData;
