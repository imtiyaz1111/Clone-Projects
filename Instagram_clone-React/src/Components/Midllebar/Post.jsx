import React from 'react';
import "./Post.css"
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = ({ photoURL, image, username, timestamp }) => {
  return (
    <div className='post'>
      <div className="post_top">
        <div className="posttop_left">
          <Avatar src={photoURL}/>
          <p>{username}</p>
          <p>{timestamp}</p>
        </div>
        <div className="posttop_right">
          <MoreHorizIcon/>
        </div>
      </div>
      <div className="post_midlle">
       <img src={image} alt="" />
      </div>
      <div className="post_bottom">
        <div className="postbottom_left">
          <FavoriteBorderIcon fontSize='large'/>
          <ChatBubbleOutlineIcon  fontSize='large'/>
          <SendIcon fontSize='large'/>
        </div>
        <div className="postbottom_right">
          <BookmarkBorderIcon fontSize='large'/>
        </div>
      </div>
    </div>
  );
}

export default Post;
