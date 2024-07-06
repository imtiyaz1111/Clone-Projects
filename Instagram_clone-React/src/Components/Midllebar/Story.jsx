import React from 'react';
import "./Story.css"
import { Avatar } from '@mui/material';
const Story = () => {
  return (
    <div className='story'>
      <div className="story_section">
        <div className="story_option">
        <Avatar src='/assets/dp_img/shahanawaz_dp.jpg'/>
        <p>Shahnawz</p>
        </div>
        <div className="story_option">
        <Avatar src='/assets/dp_img/Jasim Hussain_dp.jpg'/>
        <p>Muna</p>
        </div>
        <div className="story_option">
        <Avatar src='/assets/dp_img/farman_dp.jpg'/>
        <p>Farman Khan</p>
        </div>
        <div className="story_option">
        <Avatar src=''/>
        <p>Factopedia</p>
        </div>
        <div className="story_option">
        <Avatar src='/assets/dp_img/sahil_dp.jpg'/>
        <p>Sahil Khan</p>
        </div>
        <div className="story_option">
        <Avatar src=''/>
        <p>Arshlan Ali</p>
        </div>
        <div className="story_option">
        <Avatar src='/assets/dp_img/mota_dp.jpg'/>
        <p>Møta Bhâì</p>
        </div>
        <div className="story_option">
        <Avatar src='/assets/dp_img/Aarif Ansari_dp.jpg'/>
        <p>Aarif Ansari</p>
        </div>
     
      </div>
    </div>
  );
}

export default Story;
