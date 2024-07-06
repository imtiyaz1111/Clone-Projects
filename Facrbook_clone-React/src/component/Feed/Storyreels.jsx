import React from 'react';
import "./Storyreels.css"
import { Avatar } from '@mui/material';

const Storyreels = () => {
  return (
    <div className='storyreels'>
      <div className="story" style={{backgroundImage:`url("https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww&w=1000&q=80")`}}>
        <Avatar src='https://avatars.githubusercontent.com/u/118051060?v=4'/>
        <h4>Imtiyaz Alam</h4>
        </div>
 
        <div className="story" style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnciSM1G3PFM07Djr5xoNPRkH5GvtY-0olyLDZsmb&s")`}}>
        <Avatar src='/assets/dp_img/shahanawaz_dp.jpg'/>
        <h4>Shahnawaz Ansari</h4>
        </div> 
        <div className="story" style={{backgroundImage:`url("https://i.pinimg.com/550x/4a/6f/59/4a6f59296f90c11d77744720ca10d1af.jpg")`}}>
        <Avatar src='/assets/dp_img/mota_dp.jpg'/>
        <h4>Møta Bhâì</h4>
        </div> 
        <div className="story" style={{backgroundImage:`url("https://images.unsplash.com/photo-1601314167099-232775b3d6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=302&q=80")`}}>
        <Avatar src='/assets/dp_img/farman_dp.jpg'/>
        <h4>Farman Khan</h4>
        </div> 
        <div className="story" style={{backgroundImage:`url("https://images.unsplash.com/photo-1616731948638-b0d0befef759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")`}}>
        <Avatar src='/assets/dp_img/Jasim Hussain_dp.jpg'/>
        <h4>Jasim Hussain</h4>
        </div> 
    </div>
  );
}

export default Storyreels;
