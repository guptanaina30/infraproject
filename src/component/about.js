import React from "react";

import Box from "@mui/material/Box";
// import infrablok from "../assets/frontpage.jpg";
import Grid from "@mui/material/Grid";
import { Image } from "@mui/icons-material";
const About = () => {
  return (
    <>
      <h1>About page</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Image source={require("../assets/backend.jpg")}/>
          </Grid>
          <Grid item xs={9}>
            <p>
              Infrablok is the preferred partner for many of the world's leading
              enterprises, SMEs, and technology startups. We specialize in
              delivering innovative solutions that solve enterprise problems
              with cutting-edge technologies, like Web 3, Artificial
              Intelligence, Full-stack development, and DevOps. We render
              customized and robust business-centric services to meet the unique
              needs of our clientsInfrablok builds futuristic digital solutions
              for tech-savvy enterprises and startups. Our development team
              helps businesses build secure and scalable solutions in AI/ML and
              Web3. We provide Web3 APIs that can help connect existing Web2
              solutions to Web3. We build our products to meet the needs of your
              application with a focus on design and functionality. We also
              provide tailor–made digital solutions to design any product as per
              your specific requirements. Our engineering team has delivered
              digital solutions to numerous industry verticals worldwide with
              emerging technologies.
            </p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default About;
