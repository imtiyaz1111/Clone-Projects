import React from "react";
import "./Rightsidebar.css";
import { Avatar } from "@mui/material";

const Rightsidebar = () => {
  return (
    <div className="Rightsidebar">
      <div className="right_header">
        <div className="rightheader_left">
          <Avatar src="https://avatars.githubusercontent.com/u/118051060?v=4" />
          <div className="rightinfo">
            <h5>Imtiyaz Alam</h5>
            <p>Imtiyaz</p>
          </div>
        </div>
        <div className="rightheader_right">
          <p>Switch</p>
        </div>
      </div>
      <div className="right_midlle">
        <div className="rightmidlle_top">
          <div className="rightmidlle_left">
            <p>Suggested for you</p>
          </div>
          <div className="rightmidlle_right">
            <p>See All</p>
          </div>
        </div>
        <div className="rightmidlle_midlle">
          <div className="rightmidlles_left">
            <Avatar src="/assets/dp_img/shahanawaz_dp.jpg" />
            <div className="rightinfo">
              <h5>Shahnawaz Ansar</h5>
              <p>Follows you</p>
            </div>
          </div>
          <div className="rightmidlles_right">
            <p>Follow</p>
          </div>
        </div>
        <div className="rightmidlle_midlle">
          <div className="rightmidlles_left">
            <Avatar src="/assets/dp_img/Jasim Hussain_dp.jpg" />
            <div className="rightinfo">
              <h5>Muna</h5>
              <p>Followed by yash.raj244 + 1 more</p>
            </div>
          </div>
          <div className="rightmidlles_right">
            <p>Follow</p>
          </div>
        </div>
        <div className="rightmidlle_midlle">
          <div className="rightmidlles_left">
            <Avatar src="/assets/dp_img/farman_dp.jpg" />
            <div className="rightinfo">
              <h5>Farman Khan</h5>
              <p>Followed by filmy_andazz + 5 more</p>
            </div>
          </div>
          <div className="rightmidlles_right">
            <p>Follow</p>
          </div>
        </div>
        <div className="rightmidlle_midlle">
          <div className="rightmidlles_left">
            <Avatar src="" />
            <div className="rightinfo">
              <h5>Factopedia</h5>
              <p>Followed by shahnawazahmad319 + 1 </p>
            </div>
          </div>
          <div className="rightmidlles_right">
            <p>Follow</p>
          </div>
        </div>
        <div className="rightmidlle_midlle">
          <div className="rightmidlles_left">
            <Avatar src="/assets/dp_img/sahil_dp.jpg" />
            <div className="rightinfo">
              <h5>Sahil Khan</h5>
              <p>Followed by isishtiyaque </p>
            </div>
          </div>
          <div className="rightmidlles_right">
            <p>Follow</p>
          </div>
        </div>
      </div>
      <div className="right_bottom">
        <ul>
          <div className="brack">
          <li><a href="">About</a></li>
          <li><a href="">Help</a></li>
          <li><a href="">Press</a></li>
          <li><a href="">API</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Terms</a></li>  
          </div>
          <div className="secondbreack">
       
          <li><a href="">Locations</a></li>
          <li><a href="">Language</a></li>
          <li><a href="">English</a></li>
          <li><a href="">Meta Verified</a></li>
          </div>
         
        </ul>
        <p className="copyright">© 2023 INSTAGRAM FROM META || Imtiyaz Alam</p>
      </div>
    </div>
  );
};

export default Rightsidebar;
