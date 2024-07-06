import React from "react";
import "./Header.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Moret from "../Moret/Moret";
import "tippy.js/themes/light.css";
import StorageIcon from "@mui/icons-material/Storage";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_first">
          <img src="logo.png" alt="" />
        </div>
        <div className="header_second">
          <PlaceOutlinedIcon />
          <div className="header_second1">
            <p className="comname">
              Hello <br />
              <span className="spcol">Select your address</span>
            </p>
          </div>
        </div>
        <div className="header_third">
          <form className="allsection">
            <select name="All" id="" className="allsection">
              <option selected="selected" value="search-alias=aps">
                All
              </option>
              <option value="search-alias=alexa-skills">Alexa Skills</option>
              <option value="search-alias=amazon-devices">
                Amazon Devices
              </option>
              <option value="search-alias=fashion">Amazon Fashion</option>
              <option value="search-alias=nowstore">Amazon Fresh</option>
              <option value="search-alias=amazon-pharmacy">
                Amazon Pharmacy
              </option>
              <option value="search-alias=appliances">Appliances</option>
              <option value="search-alias=mobile-apps">Apps &amp; Games</option>
              <option value="search-alias=audible">Audible Audiobooks</option>
              <option value="search-alias=baby">Baby</option>
              <option value="search-alias=beauty">Beauty</option>
              <option value="search-alias=stripbooks">Books</option>
              <option value="search-alias=automotive">
                Car &amp; Motorbike
              </option>
              <option value="search-alias=apparel">
                Clothing &amp; Accessories
              </option>
              <option value="search-alias=collectibles">Collectibles</option>
              <option value="search-alias=computers">
                Computers &amp; Accessories
              </option>
              <option value="search-alias=electronics">Electronics</option>
              <option value="search-alias=furniture">Furniture</option>
              <option value="search-alias=lawngarden">
                Garden &amp; Outdoors
              </option>
              <option value="search-alias=gift-cards">Gift Cards</option>
              <option value="search-alias=grocery">
                Grocery &amp; Gourmet Foods
              </option>
              <option value="search-alias=hpc">
                Health &amp; Personal Care
              </option>
              <option value="search-alias=kitchen">Home &amp; Kitchen</option>
              <option value="search-alias=industrial">
                Industrial &amp; Scientific
              </option>
              <option value="search-alias=jewelry">Jewellery</option>
              <option value="search-alias=digital-text">Kindle Store</option>
              <option value="search-alias=luggage">Luggage &amp; Bags</option>
              <option value="search-alias=luxury-beauty">Luxury Beauty</option>
              <option value="search-alias=dvd">Movies &amp; TV Shows</option>
              <option value="search-alias=popular">Music</option>
              <option value="search-alias=mi">Musical Instruments</option>
              <option value="search-alias=office-products">
                Office Products
              </option>
              <option value="search-alias=pets">Pet Supplies</option>
              <option value="search-alias=instant-video">Prime Video</option>
              <option value="search-alias=shoes">Shoes &amp; Handbags</option>
              <option value="search-alias=software">Software</option>
              <option value="search-alias=sporting">
                Sports, Fitness &amp; Outdoors
              </option>
              <option value="search-alias=specialty-aps-sns">
                Subscribe &amp; Save
              </option>
              <option value="search-alias=home-improvement">
                Tools &amp; Home Improvement
              </option>
              <option value="search-alias=toys">Toys &amp; Games</option>
              <option value="search-alias=under-ten-dollars">Under ₹500</option>
              <option value="search-alias=videogames">Video Games</option>
              <option value="search-alias=watches">Watches</option>
            </select>
          </form>
          <input type="text" placeholder="Search Amazon.in" />
          <SearchOutlinedIcon />
        </div>
        <div className="header_fourth">
          <img src="Flag_of_India.png" alt="" />
          <h5>EN</h5>
          <ExpandMoreOutlinedIcon />
        </div>
        <div className="header_fifth">
          <Tippy
            content={<Moret></Moret>}
            interactive={true}
            offset={[5, 18]}
            theme="light"
          >
            <p className="comname">
              Hello,sign in <br />{" "}
              <span className="spcol">Account & Lists</span>
            </p>
          </Tippy>
          <ExpandMoreOutlinedIcon />
        </div>
        <div className="header_six">
          <p className="comname">
            Returns <br /> <span className="spcol">& Orders</span>
          </p>
        </div>
        <div className="header_seven">
          <AddShoppingCartOutlinedIcon />
          <p>Cart</p>
        </div>
      </div>
      <div className="buttom_header">
          <div className="sidebar">
            <StorageIcon />
            <p>All</p>
          </div>
          <div className="allcatogire">
            <button> Amazon miniTV</button>
            <button>Sell</button>
            <button>Best Sellers</button>
            <button>Today's Deals</button>
            <button>Mobiles</button>
            <button>New Releases</button>
            <button>Customer Service</button>
            <button>Prime</button>
            <button>Electronics</button>
          </div>
          <div className="bottomimg">
            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Bawaal-Launch/400x39-SWM-NP._CB600100776_.jpg" alt="" />
          </div>
        </div>
    </>
  );
};

export default Header;
