import React from 'react';
import "./Sidebar.css"
import Sidebaroption from './Sidebaroption';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <Sidebaroption src="https://avatars.githubusercontent.com/u/118051060?v=4" title="Imtiyaz Alam"/>
     <Sidebaroption src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid 19 Iinformation Center"/>
     <Sidebaroption  src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png"  title="Friends"/>
     <Sidebaroption  src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.PNG"  title="Groups"/>
     <Sidebaroption  src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png"  title="Watch"/>
     <Sidebaroption  src="https://www.facebook.com/rsrc.php/v3/yv/r/QAyfjudAqqG.png"  title="Event"/>
     <Sidebaroption Icon={ExpandMoreIcon} title="See More"/>
    </div>
  );
} 

export default Sidebar;
