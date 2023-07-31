// import axios from "axios";
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";
// import teamlead from "../assets/img.jpg";
// import { Image } from "@mui/icons-material";
import { useParams } from "react-router-dom";

const TeamDetails = () => {
  const [teamMember, setTeamMember] = useState([]);

  useEffect(() => details, []);

  const location = useParams();

  console.log(location);
  const details = async () => {
    const userDetails = await fetch(
      "https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json"
    );
    const newData = await userDetails.json();
    console.log("new Data ", newData);
    setTeamMember(newData);
  };

  const getTeamMembersByLocation = () => {
    switch (location.id) {
      case "frontend":
        return teamMember.slice(0, 6);

      case "backend":
        return teamMember.slice(7, 12);

      case "designing":
        return teamMember.slice(13, 18);

      case "testing":
        return teamMember.slice(19, 24);

      case "marketing":
        return teamMember.slice(25, 30);

      case "cloud":
        return teamMember.slice(31, 36);

      default:
        return [];
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea style={{ backgroundColor: "black" }}>
              {/* <CardMedia
                component="img"
                height="40"
                image={teamlead}
                alt="green iguana"
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Lizard
                </Typography>
                <Typography sx={{ color: "white" }}>
                  Email : ngupta@gmail.com
                </Typography>
                <Typography sx={{ color: "white" }}>Gender : Female</Typography>
                <Typography sx={{ color: "white" }}>
                  Phone Number : 65475374573
                </Typography>
                <Typography sx={{ color: "white" }}>
                  Hired On : 1 May 2023
                </Typography>
                <Typography sx={{ color: "white" }}>
                  Date of Birth :23/01/1999
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <div>
            {getTeamMembersByLocation().map((item) => (
              <div>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography
                      sx={{
                        width: "33%",
                        flexShrink: 0,
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      {item.username}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ color: "text.secondary" }}>
                      Email : {item.email}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Gender : {item.gender}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Phone Number : {item.phones.number}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Hired On : {item.hiredOn}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      Date of Birth :{item.dob}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default TeamDetails;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import { CardActionArea } from "@mui/material";
// import { Grid } from "@mui/material";

// const TeamDetails = () => {
//   const [teamMember, setTeamMember] = useState([]);
//   useEffect(() => {
//     details();
//   }, []);

//   const location = useParams();
//   console.log(location);

//   const details = async () => {
//     const userDetails = await fetch(
//       "https://raw.githubusercontent.com/JS-DevTools/static-mock-data/master/employees.json"
//     );
//     const newData = await userDetails.json();
//     console.log("new Data ", newData);
//     setTeamMember(newData);
//   };

//   const getTeamMembersByLocation = () => {
//     switch (location.id) {
//       case "frontend":
//         return teamMember.slice(0, 6);
//       case "backend":
//         return teamMember.slice(7, 12);
//       case "designing":
//         return teamMember.slice(13, 18);
//       case "testing":
//         return teamMember.slice(19, 24);
//       case "marketing":
//         return teamMember.slice(25, 30);
//       case "cloud":
//         return teamMember.slice(31, 36);
//       default:
//         return [];
//     }
//   };

//   return (
//     <>
//       <Grid container spacing={2}>
//         <Grid item xs={4}>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea style={{ backgroundColor: "black" }}>
//               <CardContent>
//                 <Typography gutterBottom variant="h6" component="div">
//                   Lizard
//                 </Typography>
//                 <Typography sx={{ color: "white" }}>
//                   Email : ngupta@gmail.com
//                 </Typography>
//                 <Typography sx={{ color: "white" }}>Gender : Female</Typography>
//                 <Typography sx={{ color: "white" }}>
//                   Phone Number : 65475374573
//                 </Typography>
//                 <Typography sx={{ color: "white" }}>
//                   Hired On : 1 May 2023
//                 </Typography>
//                 <Typography sx={{ color: "white" }}>
//                   Date of Birth : 23/01/1999
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//         <Grid item xs={8}>
//           <div>
//             {teamMember.length === 0 ? (
//               <p>Loading...</p>
//             ) : (
//               getTeamMembersByLocation().map((item) => (
//                 <div key={item.id}>
//                   <Accordion>
//                     <AccordionSummary
//                       expandIcon={<ExpandMoreIcon />}
//                       aria-controls="panel1bh-content"
//                       id="panel1bh-header"
//                     >
//                       <Typography
//                         sx={{
//                           width: "33%",
//                           flexShrink: 0,
//                           fontSize: 20,
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {item.username}
//                       </Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Typography sx={{ color: "text.secondary" }}>
//                         Email : {item.email}
//                       </Typography>
//                       <Typography sx={{ color: "text.secondary" }}>
//                         Gender : {item.gender}
//                       </Typography>
//                       <Typography sx={{ color: "text.secondary" }}>
//                         Phone Number : {item.phones.number}
//                       </Typography>
//                       <Typography sx={{ color: "text.secondary" }}>
//                         Hired On : {item.hiredOn}
//                       </Typography>
//                       <Typography sx={{ color: "text.secondary" }}>
//                         Date of Birth :{item.dob}
//                       </Typography>
//                     </AccordionDetails>
//                   </Accordion>
//                 </div>
//               ))
//             )}
//           </div>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default TeamDetails;