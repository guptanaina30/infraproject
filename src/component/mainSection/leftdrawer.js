import { Box, Button, List, Toolbar, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import React from "react";

import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HomeIcon from "@mui/icons-material/Home";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import SensorsOutlinedIcon from "@mui/icons-material/SensorsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import youtube from '../../assets/youtube.png'
const LeftDrawer = () => {
  const Ldrawer = [
    {
      name: "Home",
      icon: <HomeIcon />,
      id: 1,
    },
    {
      name: "Shorts",
      icon: <VideoLibraryOutlinedIcon />,
      id: 2,
    },
    {
      name: "Subscription",
      icon: <SubscriptionsOutlinedIcon />,
      id: 3,
    },
  ];

  const Rdrawer = [
    {
      name: "Library",
      icon: <SmartDisplayOutlinedIcon />,
      id: 4,
    },
    {
      name: "History",
      icon: <HistoryOutlinedIcon />,
      id: 5,
    },
  ];

  const drawer = [
    {
      name: "Trending",
      icon: <WhatshotOutlinedIcon />,
      id: 5,
    },
    {
      name: "Shopping",
      icon: <LocalMallOutlinedIcon />,
      id: 6,
    },
    {
      name: "Music",
      icon: <AudiotrackOutlinedIcon />,
      id: 7,
    },
    {
      name: "Movies",
      icon: <MovieOutlinedIcon />,
      id: 8,
    },
    {
      name: "Live",
      icon: <SensorsOutlinedIcon />,
      id: 9,
    },
    {
      name: "Gaming",
      icon: <SportsEsportsOutlinedIcon />,
      id: 10,
    },
    {
      name: "News",
      icon: <NewspaperOutlinedIcon />,
      id: 11,
    },
    {
      name: "Sports",
      icon: <EmojiEventsOutlinedIcon />,
      id: 12,
    },
    {
      name: "Learning",
      icon: <LightbulbOutlinedIcon />,
      id: 13,
    },
    {
      name: "Fashion & Beauty",
      icon: <DiamondOutlinedIcon />,
      id: 14,
    },
  ];
  return (
    <Box  style={{position:"fixed"}}>
      <Toolbar>
        <img src={youtube} alt="not found" width={"110px"} height={"90px"}  style={{padding:0,margin:0}}/>
      </Toolbar>
      <Divider />
      <List  sx={{height:"90vh",width:220,overflow:"auto"}}>
        
        {Ldrawer.map((item) => (
          <ListItem key={item?.id}   style={{height:"40px",fontSize:"5px",fontWeight:"normal"}}>
            <ListItemButton>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText>{item?.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
    
      <Divider />
      {Rdrawer.map((item) => (
          <ListItem key={item?.id}   style={{ height:"40px",fontSize:"5px",fontWeight:"normal"}}>
            <ListItemButton>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText>{item?.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        
      <Divider />
      <Typography paragraph style={{paddingLeft:"20px"}}>
        Sign in to like videos, comment, and subscribe.
      </Typography>
      <Button style={{paddingLeft:"20px"}}>Sign In</Button>
      <Divider />
      <Typography variant="h6">Explore</Typography>
      {drawer.map((item) => (
        <scrollbars>
          <ListItem key={item?.id} style={{ height:"40px",fontSize:"5px",fontWeight:"normal"}} >
            <ListItemButton>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText variant="subtitle1">{item?.name}</ListItemText>
            </ListItemButton>
          </ListItem>
          </scrollbars>
        ))}
        </List>
    </Box>
  );
};
export default LeftDrawer;
