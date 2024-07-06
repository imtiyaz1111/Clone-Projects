import React from "react";
import "./Rightsidebar.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';

const Rightsidebar = () => {
  return (
    <>
      <div className="widget">
        <div className="widget_hearder">
          <div className="widget_headerleft">
            <h4>Your Pages</h4>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="widget_body">
          <div className="widget_body_option">
            <Avatar src="https://avatars.githubusercontent.com/u/118051060?v=4"/>
            <h4>Imtiyaz Alam
            </h4>
          </div>
          <div className="widget_body_option ml10">
            <NotificationsNoneIcon/>
            <p>1 Notification
            </p>
          </div>
          <div className="widget_body_option ml10">
            <VolumeUpIcon src=""/>
            <p>Create Promotions
            </p>
          </div>
        </div>
         <hr /><br />
         <div className="widget_hearder">
          <div className="widget_headerleft">
            <h4>Contact</h4>
          </div>
          <div className="widget_headerright">
            <VideocamIcon/>
            <SearchIcon/>
            <MoreHorizIcon />
          </div>
        </div>
        <div className="widget_body">
          <div className="widget_body_option">
            <Avatar src="/assets/dp_img/shahanawaz_dp.jpg"/>
            <h4>Shahnawaz Ansari
            </h4>
          </div>
          <div className="widget_body_option">
            <Avatar src="/assets/dp_img/farman_dp.jpg"/>
            <h4> Farman Khan
            </h4>
          </div>
          <div className="widget_body_option">
            <Avatar src="/assets/dp_img/mota_dp.jpg"/>
            <h4>Møta Bhâì
            </h4>
          </div>  <div className="widget_body_option">
            <Avatar src="/assets/dp_img/Jasim Hussain_dp.jpg"/>
            <h4>Muna
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightsidebar;
