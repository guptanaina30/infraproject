import React from "react";

import { Grid, Typography } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";

import PhoneIcon from "@mui/icons-material/Phone";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import Contact from "./contact";

const ContactData = () => {
  const cardColors = ["#f0f0f0", "#e5e5e5", "#d0d0d0"];

  return (
    <Grid
      spacing={2}
      justifyContent="center"
      alignItems="center"
      height="70vh"
      marginTop="2rem"
    >
      <Grid item xs={12} md={6} lg={3} style={{marginTop:"200px"}}>
        <Typography variant="h2" align="center" gutterBottom style={{fontWeight:"bold"}}>
          Contact Us
        </Typography>

        
      </Grid>
      <Grid item container justifyContent="center" alignItems="center" xs={12} >
        <Contact
          icon={<EmailIcon />}
          data="info@infrablok.com"
          backgroundColor={cardColors[0]}
          
        />

        <Contact
          icon={<PhoneIcon />}
          data="7684554536, 9465734780"
          backgroundColor={cardColors[1]}
        />

        <Contact
          icon={<LocationOnIcon />}
          data="401, Tower B, Ithum Tower IT Park, Sec 62, Noida Gautam Buddha Nagar UP 201301 IN"
          backgroundColor={cardColors[2]}
          
        />
        </Grid>
     
      </Grid>
  
  );
};

export default ContactData;
