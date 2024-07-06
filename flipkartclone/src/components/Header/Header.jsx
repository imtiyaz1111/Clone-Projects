import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Moret from "../Moret/Moret";
import LoginT from "../LoginT/LoginT";
import "tippy.js/themes/light.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_first">
          <img src="logo.png" alt="" />
          <div className="header_first1">
            <span style={{
              fontSize:"11px",
              color:"white",
              fontStyle:"italic"
            }}>Explore</span>
            <span style={{
              fontSize:"11px",
              color:"#f9e107",
              fontStyle:"italic"
            }}>Plus</span>
           
          </div>
        </div>
        <div className="header_second">
          <input type="text" placeholder="Search for products"/>
          <SearchIcon/>
        </div>
        <div className="header_third">
          <Tippy
          theme="light"
         
          content={<LoginT></LoginT>}
          interactive={true}
          offset={[5, 18]}
          >
          <button>Login</button>
          </Tippy>
         
        </div>
        <div className="header_fourth">
          <Tippy
          theme="light"
          content={<Moret></Moret>}
          interactive={true}
          offset={[5, 20]}
          
          >
          <span>More</span>
          </Tippy>
         
          <ExpandMoreIcon/>
        </div>
        <div className="header_fifth">
          <ShoppingCartIcon/>
          <p>Cart</p>
        </div>
      </div>
    </>
  );
};

export default Header;
