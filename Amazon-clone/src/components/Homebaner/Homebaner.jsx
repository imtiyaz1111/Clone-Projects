import React from "react";

import "./Homebaner.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Homebaner = () => {
  return (
    <>
    <div className="banner">
    <Carousel responsive={responsive}>
      <img
            src="ban.jpg"
            alt=""
            className="slide_img"
          />
            <img
            src="banner1.jpg"
            alt=""
            className="slide_img"
          />
             <img
            src="banerr.jpg"
            alt=""
            className="slide_img"
          />
      </Carousel>  

        <div className="bannerpro">
        <div className="cart">
          <div className="first">
          <h1>Great Freedom sale</h1>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/T1_PC_CC_1X._SY304_CB598888437_.jpg"
            alt=""
          />
          <button>See all</button>
          </div>
        </div>
        <div className="cart">
          <div className="second">
          <h1>Up to 60% off | Styles for men</h1>
          <div className="inbox">
            <div className="inbox1">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
                alt=""
              />
              <button>Clthing</button>
            </div>
            <div className="inbox1">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
                alt=""
              />
              <button>Footwear</button>
            </div>
          </div>
          <div className="inbox">
            <div className="inbox1">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
                alt=""
              />
              <button>Watches</button>
            </div>
            <div className="inbox1">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
                alt=""
              />
              <button>Bags</button>
            </div>
          </div>
          <button>See all Offers</button>
          </div>
        </div>
        <div className="cart">
          <div className="third">
          <h1>Bluetooth Calling Smartwatch starts at...</h1>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg" alt="" />
          <button>Shop now</button>
          </div>
        </div>
        <div className="cart">
          <div className="fourth">
        <h1>Sign in for your best experience</h1>
        <button>Sign In</button>
        <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="" />
        </div>
        </div>
      </div>
     
      </div>

      </>
  );
};

export default Homebaner;
