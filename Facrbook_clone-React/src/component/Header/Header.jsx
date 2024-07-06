import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { Avatar, IconButton } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {

  return (
    <>
      <div className="header">
        <div className="header_left">
            <figure> <img src="logo.png" alt="" /></figure>
           
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder="Search Facebook" />
            </div>
        </div>
        <div className="header_middle">
            <div className="hearder_option hearder__option--active">
                <HomeIcon fontSize="large"/>
            </div>
            <div className="hearder_option">
                <OndemandVideoIcon fontSize="large"/>
            </div>
            <div className="hearder_option">
                <PeopleIcon fontSize="large"/>
            </div>
            <div className="hearder_option">
                <SportsEsportsIcon fontSize="large"/>
            </div>
        </div>
        <div className="header_right">
            <div className="header_info">
                <Avatar src="https://avatars.githubusercontent.com/u/118051060?v=4"/>
                <h5>Imiyaz Alam</h5>
            </div>
            <IconButton>
                <AppsIcon/>
            </IconButton>

            <IconButton>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
        </div>
      </div>
    </>
  );
};

export default Header;
