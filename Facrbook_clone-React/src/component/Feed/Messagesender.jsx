import React, { useState } from 'react';
import "./Messagesender.css"
import { Avatar, IconButton, Modal } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CloseIcon from '@mui/icons-material/Close';



const Messagesender = () => {
  const [open,setOpen]=useState(false)
  const handleClose=()=>{
    setOpen(false)
  }
  const handleOpen=()=>{
    setOpen(true)
  }
  return (
    <>
    <Modal open={open} onClose={handleClose}>
      <div className="modal_pop">
        <form >
          <div className="modalheading">
            <h3>Crerate Post</h3>
            <IconButton onClick={handleClose}>
              <CloseIcon/>
            </IconButton>
          </div>
          <div className="modal_top">
            <Avatar src='https://avatars.githubusercontent.com/u/118051060?v=4'/>
            <h4>Imtiyaz Alam</h4>
          </div>
          <div className="modal_body">
            <textarea rows="5" placeholder="What's on your mind Imtiyaz Alam?"></textarea>
          </div>
          <div className="modal_footer">
            <div className="modalfooterleft">
              <h4>Add to your post</h4>
            </div>
            <div className="modalfooterright">
            <IconButton >
             <PhotoLibraryIcon fontSize='large' style={{color:"lightgreen"}}/>
            </IconButton>
            <IconButton>
            <VideoCallIcon fontSize='large'style={{color:"red"}} />
            </IconButton>
            <IconButton>
            <EmojiEmotionsIcon  fontSize='large' style={{color:"#ffb100"}}/>
            </IconButton>
           
     
            </div>
          </div>
          <input type="submit" className='post_submit' value="Post" />
        </form>
      </div>
    </Modal>
    <div className='messagesender'>
      <div className="messagesender_top">
        <Avatar src='https://avatars.githubusercontent.com/u/118051060?v=4'/>
        <form >
            <input type="text" placeholder="What's on you mind Imtiyaz?" onClick={handleOpen} />
        </form>
      </div>
      <div className="messagesender_bottom">
        <div className="messagangerOption">
            <VideoCallIcon style={{color:"red"}} fontSize='large'/>
            <p>Live video</p>
        </div>
        <div className="messagangerOption">
            <PhotoLibraryIcon style={{color:"lightgreen"}} fontSize='large'/>
            <p>Photo/Video</p>
        </div>
        <div className="messagangerOption">
            <EmojiEmotionsIcon style={{color:"#ffb100"}} fontSize='large'/>
            <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Messagesender;
