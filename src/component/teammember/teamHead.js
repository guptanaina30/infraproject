import React from "react";
import { Avatar, Card,  CardContent,  Typography } from "@mui/material";
// import { Image } from "@mui/icons-material";

const TeamHead = ({ memberDetails }) => {
  return (
    <Card>
      <CardContent
        sx={{
          flexDirection: "row",
          backgroundColor: "#82CD47",
          
        }}
      >
        
        <Avatar
          alt={memberDetails?.username}
          src={memberDetails?.avatarUrl}
          sx={{ width: 50, height: 50 }}
        />
        {/* <img src={img} style={{width: 50, height: 50 }} alt={memberDetails?.username}/> */}

        {/* <CardActionArea>
  <CardMedia
    component="img"
    image={memberDetails?.potrait}
   
    alt="CardMedia Image Example"
    height="140"
    title="CardMedia Image Example"
  />
</CardActionArea> */}

      
        <Typography sx={{ color: "black" }}>
          Name: {memberDetails?.username}
        </Typography>
        <Typography sx={{ color: "black" }}>
          Designation: {memberDetails?.roles}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default TeamHead;
