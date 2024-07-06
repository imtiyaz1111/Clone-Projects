import React from 'react';
import "./Sidebar.css"
import Sidebaroption from './Sidebaroption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SendIcon from '@mui/icons-material/Send';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="logo">
        <img src="https://download.logo.wine/logo/Instagram/Instagram-Wordmark-White-Logo.wine.png" alt="" />
      </div>
      <Sidebaroption Icon={HomeIcon} fons title="Home"/>
      <Sidebaroption Icon={SearchIcon} title="Search"/>
      <Sidebaroption Icon={ExploreIcon} title="Explore"/>
      <Sidebaroption Icon={SlowMotionVideoIcon} title="Reels"/>
      <Sidebaroption Icon={SendIcon} title="Message"/>
      <Sidebaroption Icon={NotificationsNoneIcon} title="Notification"/>
      <Sidebaroption Icon={AddBoxIcon} title="Create"/>
      <Sidebaroption src="https://avatars.githubusercontent.com/u/118051060?v=4" title="Profile"/>
      <Sidebaroption className="sideicon" Icon={MoreHorizIcon} title="More"/>

    </div>
  );
}

export default Sidebar;
