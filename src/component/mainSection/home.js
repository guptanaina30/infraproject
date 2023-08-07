import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  Grid,
  Input,
  Stack,
  Toolbar,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import Grid from "@mui/material";
// import v1 from "../../assets/video.mp4";
import v11 from "../../assets/v11.mp4";
import v12 from "../../assets/v12.mp4";
import v13 from "../../assets/v13.mp4";
import v14 from "../../assets/v14.mp4";
import v15 from "../../assets/v15.mp4";
import v16 from "../../assets/v16.mp4";
import v17 from "../../assets/v17.mp4";
import v18 from "../../assets/v18.mp4";
import v19 from "../../assets/v19.mp4";
import v20 from "../../assets/v20.mp4";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.jpg";
import p7 from "../../assets/p7.jpg";
import p8 from "../../assets/p8.jpg";
import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/p10.png";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
const Home = () => {
  const youtubeData = [
    {
      video: v11,
      image: p1,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "Akshay Saini",
      views: "4.17M views",
      years: "1 years ago",
    },
    {
      video: v12,
      image: p2,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "Aman Dhattarwal",
      views: "4.1M views",
      years: "4 years ago",
    },
    {
      video: v13,
      image: p3,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "Arjit Singh",
      views: "4.7M views",
      years: "6 years ago",
    },
    {
      video: v14,
      image: p4,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "Code With Harry",
      views: "1.7K views",
      years: "6 month ago",
    },
    {
      video: v15,
      image: p5,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "Yahoo Baba",
      views: "10K views",
      years: "1.5 years ago",
    },
    {
      video: v16,
      image: p6,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "T Series",
      views: "5.00M views",
      years: "5 years ago",
    },
    {
      video: v17,
      image: p7,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "Coke Studio",
      views: "2.9M views",
      years: "2 years ago",
    },
    {
      video: v18,
      image: p8,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "Silpa Beauty Hacks",
      views: "2.32 views",
      years: "1 month ago",
    },
    {
      video: v19,
      image: p9,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "Ranbeer Allahbadia",
      views: "1M views",
      years: "3 years ago",
    },
    {
      video: v20,
      image: p10,
      heading: "Patty O'Furniture Admin d souza",
      adminName: "BeerBiceps",
      views: "5M views",
      years: "3 years ago",
    },
  ];
  return (
    <>
    <Box  style={{position:"fixed"}}>
      <Toolbar style={{ justifyContent: "space-between",marginBottom:"21px"}}>
       <div>
       <Input
          id="my-input"
          aria-describedby="my-helper-text"
          placeholder="Search"
          style={{
            border: "2px solid grey",
            borderRadius: "20px",
            width: "40vw",
            marginLeft: "60px",
          }}
        />
        <KeyboardVoiceIcon fontSize="small" style={{marginTop:"12px",paddingLeft:"10px"}}/>
       </div>
        <div>
          <MoreVertIcon style={{paddingRight:"10px"}} fontSize="small"/>
          <Button
            style={{
              border: "2px solid grey",
              borderRadius: "20px",
              width: "110px",
            }}
            color="primary"
          >
            <PersonOutlinedIcon  />
            Sign In
          </Button>
        </div>
      </Toolbar>

      <Box  sx={{height:"90vh",width:"83vw",overflow:"auto"}}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {youtubeData.map((item) => (
            <Grid item xs={2} sm={4} md={3} lg={3}>
              <Card sx={{ maxWidth: 300 }} className="grid">
                <CardActionArea>
                  <CardMedia
                    component="video"
                    image={item.video}
                    className={item.media}
                    autoPlay
                    controls
                    src={item.video}
                    alt="not found"
                  />
                  <CardContent>
                    <Stack style={{ flexDirection: "row" }}>
                      <Stack>
                        <img
                          src={item.image}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "15px",
                          }}
                          alt="not found"
                        ></img>
                      </Stack>
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="p"
                        className="main"
                      >
                        {item.heading}
                      </Typography>
                    </Stack>
                    <Stack style={{ flexDirection: "row" }}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        //   component="p"
                        className="heading"
                      >
                        {item.adminName}
                      </Typography>
                      <Stack className="check">
                        <CheckCircleIcon fontSize="small" />
                      </Stack>
                    </Stack>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className="heading"
                    >
                      {item.views} {item.years}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      </Box>
    </>
  );
};
export default Home;

// <Card sx={{ maxWidth: 345 }}>
//   <CardActionArea>
//     <CardMedia
//       component="img"
//       height="140"
//       image="/static/images/cards/contemplative-reptile.jpg"
//       alt="green iguana"
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="div">
//         Lizard
//       </Typography>
//       <Typography variant="body2" color="text.secondary">
//         Lizards are a widespread group of squamate reptiles, with over 6,000
//         species, ranging across all continents except Antarctica
//       </Typography>
//     </CardContent>
//   </CardActionArea>
// </Card>
