import React from "react";
import Grid from '@mui/material/Grid';
import Home from "./home";
import LeftDrawer from "./leftdrawer";

const Layout  =()=>{
    return(
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={2}>
       <LeftDrawer/>
        </Grid>
        <Grid item xs={10}>
         <Home/>
        </Grid>
       
      </Grid>
    )
}
export default Layout;