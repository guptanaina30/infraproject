// import React, { useEffect, useState } from "react";
// import { Grid } from "@mui/material";
// import { useParams } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import TeamCard from "./teamCard";

// const TeamDetails = () => {
//   const [teamMember, setTeamMember] = useState([]);
//   const location = useParams();

//   useEffect(() => {
//     details();
//   }, []);

//   const details = async () => {
//     try {
//       const userDetails = await fetch(
//         "https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json"
//       );

//       const newData = await userDetails.json();

//       console.log("new Data ", newData);

//       setTeamMember(newData);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const getTeamMembersByLocation = () => {
//     switch (location.id) {
//       case "frontend":
//         return teamMember.slice(1, 7);

//       case "backend":
//         return teamMember.slice(9, 14);

//       case "designing":
//         return teamMember.slice(16, 20);

//       case "testing":
//         return teamMember.slice(22, 26);

//       case "marketing":
//         return teamMember.slice(28, 32);

//       case "cloud":
//         return teamMember.slice(34, 38);

//       default:
//         return [];
//     }
//   };

//   const getFirstNameDetails = () => {
//     switch (location.id) {
//       case "frontend":
//         return teamMember[0];

//       case "backend":
//         return teamMember[7];

//       case "designing":
//         return teamMember[14];

//       case "testing":
//         return teamMember[20];

//       case "marketing":
//         return teamMember[26];

//       case "cloud":
//         return teamMember[32];

//       default:
//         return null;
//     }
//   };

//   const getleadDetails = () => {
//     switch (location.id) {
//       case "frontend":
//         return teamMember[1];

//       case "backend":
//         return teamMember[8];

//       case "designing":
//         return teamMember[15];

//       case "testing":
//         return teamMember[21];

//       case "marketing":
//         return teamMember[27];

//       case "cloud":
//         return teamMember[33];

//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Grid>
//         <Grid>TeamHead</Grid>
//         <Grid>Employee</Grid>
//       </Grid>
//     </>
//   );
// };

// export default TeamDetails;

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import TeamCard from "./teamCard";
import TeamHead from "./teamHead";
// import img from "../../assets/Hero (1).jpg";

const TeamDetails = () => {
  const [teamMember, setTeamMember] = useState([]);
  const location = useParams();

  useEffect(() => {
    details();
  }, []);

  const details = async () => {
    try {
      const userDetails = await fetch(
        "https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json"
      );

      const newData = await userDetails.json();

      console.log("new Data ", newData);

      setTeamMember(newData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTeamMembersByLocation = () => {
    switch (location.id) {
      case "frontend":
        return teamMember.slice(1, 7);

      case "backend":
        return teamMember.slice(9, 14);

      case "designing":
        return teamMember.slice(16, 20);

      case "testing":
        return teamMember.slice(22, 26);

      case "marketing":
        return teamMember.slice(28, 32);

      case "cloud":
        return teamMember.slice(34, 38);

      default:
        return [];
    }
  };

  const getFirstNameDetails = () => {
    switch (location.id) {
      case "frontend":
        return teamMember[0];

      case "backend":
        return teamMember[7];

      case "designing":
        return teamMember[14];

      case "testing":
        return teamMember[20];

      case "marketing":
        return teamMember[26];

      case "cloud":
        return teamMember[32];

      default:
        return null;
    }
  };

  const getleadDetails = () => {
    switch (location.id) {
      case "frontend":
        return teamMember[1];

      case "backend":
        return teamMember[8];

      case "designing":
        return teamMember[15];

      case "testing":
        return teamMember[21];

      case "marketing":
        return teamMember[27];

      case "cloud":
        return teamMember[33];

      default:
        return null;
    }
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          flex: 1,
          backgroundColor: "#BD9BE7",
          height:"40vh",
          paddingLeft:"10px"
          
        }}
        
      >
        <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginTop: "80px" }}>
          <TeamHead memberDetails={getFirstNameDetails()} />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginTop: "80px" }}>
          <TeamHead memberDetails={getleadDetails()} />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#BD9BE7", 
          height:"63vh"
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display:"flex",flexDirection:'row' ,marginLeft:"10px"}}>
          {getTeamMembersByLocation().map((member) => (
            <div key={member.id}>
              <TeamCard memberDetails={member} />
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default TeamDetails;

