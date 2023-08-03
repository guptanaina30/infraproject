import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

const TeamCard = ({ memberDetails }) => {
  return (
    <Card >
      <CardContent
        sx={{
          backgroundColor:  "#698449",
      
          height:"30vh",
          width:"17vw"
        }}
      >
          <Avatar
            alt={memberDetails?.username}
            src={memberDetails?.avatarUrl}
            sx={{ width: 50, height: 50 }}
          />
        <Typography sx={{ color: "black" }}>
          {memberDetails?.username}
        </Typography>

        <Typography sx={{ color: "black" }}>
          Designation: {memberDetails?.roles}
        </Typography>

        <Typography sx={{ color: "black" }}>
          Department: {memberDetails?.department}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
