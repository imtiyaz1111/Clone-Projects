import React from 'react';
import "./Midlle.css"
import Story from './Story';
import Post from './Post';

const Midlle = () => {
  return (
    <div className='midlle'>
      <Story/>
      <Post photoURL="/assets/dp_img/shahanawaz_dp.jpg" image="/assets/post_img/shahanawaz_post.jpg"username="Shahnawaz Ansari" timestamp="12:40 Pm" />
      <Post photoURL="/assets/dp_img/Jasim Hussain_dp.jpg" image="/assets/post_img/Jasim Hussain_post.jpg"username="Jasim Hussain" timestamp="12:40 Pm" />
      <Post photoURL="/assets/dp_img/farman_dp.jpg" image="/assets/post_img/farman_post.jpg"username="Farman Khan" timestamp="12:40 Pm" />
    </div>
    
  );
}

export default Midlle;
