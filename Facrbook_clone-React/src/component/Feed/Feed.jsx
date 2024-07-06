import React from 'react';
import "./Feed.css"
import Storyreels from './Storyreels';
import Messagesender from './Messagesender';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
      <Storyreels/>
      <Messagesender/>
      <Post photoURL="https://avatars.githubusercontent.com/u/118051060?v=4" image="https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000"username="Imtiyaz alam" timestamp="12:40 Pm" message="This is body message"/>
      <Post photoURL="/assets/dp_img/shahanawaz_dp.jpg" image="/assets/post_img/shahanawaz_post.jpg"username="Shahnawaz Ansari" timestamp="12:40 Pm" message="This is body message"/>
      <Post photoURL="/assets/dp_img/Jasim Hussain_dp.jpg" image="/assets/post_img/Jasim Hussain_post.jpg"username="Jasim Hussain" timestamp="12:40 Pm" message="This is body message"/>
      <Post photoURL="/assets/dp_img/farman_dp.jpg" image="/assets/post_img/farman_post.jpg"username="Farman Khan" timestamp="12:40 Pm" message="This is body message"/>
    </div>
  );
}

export default Feed;
