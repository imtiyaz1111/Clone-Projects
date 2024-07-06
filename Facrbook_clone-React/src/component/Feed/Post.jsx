import React from "react";
import "./Post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PublicIcon from "@mui/icons-material/Public";
import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";

const Post = ({ photoURL, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post_top">
        <div className="post_topleft">
          <Avatar src={photoURL} />
          <div className="postinfo">
            <h4>{username}</h4>
            <p>
              {timestamp}
              <PublicIcon />
            </p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="postmiddle">
        <p>{message}</p>
        <img src={image} alt="" />
      </div>
      <div className="post_bottom">
        <div className="post_bottomoption">
          <ThumbUpIcon />
          <p>Link</p>
        </div>
        <div className="post_bottomoption">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post_bottomoption">
          <ShareIcon />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
