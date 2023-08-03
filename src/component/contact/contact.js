import React from "react";
import { CardContent, Grid, Typography } from "@mui/material";

const Contact = ({ icon, data }) => {
  return (
    <Grid item xs={6} md={6} lg={3}>
      <CardContent>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {icon && (
            <icon.type fontSize="large" style={{ marginBottom: "10px" }} />
          )}

          <div
            style={{
              height: "30px",
              width: "250px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography align="center">{data}</Typography>
          </div>
        </Grid>
      </CardContent>
    </Grid>
  );
};
export default Contact;
