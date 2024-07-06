import React from "react";
import "./Productslide.css";
import { Data } from "../../Productsdata";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { electronics } from "../../electronicsdata";
import { groceries } from "../../Groceriesdata";
import { shope } from "../../Localshopsdata";
import { Furnitures } from "../../Furnituresdata";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Productslide = () => {
  return (
    <>
      <div className="mainbox">
        <h1>All Products</h1>
        <Carousel responsive={responsive}>
          {Data.map((elem) => {
            const { id, productimg, offer, productname } = elem;
            return (
              <div className="products">
                <div className="carts" key={id}>
                  <img src={productimg} alt="" />
                  <div className="cartinfo">
                    <button>{offer}</button>
                    <h5>Deal of the day</h5>
                  </div>
                  <p>{productname}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
        ;
      </div>

      <div className="bannerpro">
        <div className="cart">
          <div className="second">
            <h1>Starting ₹99 | All your home </h1>
            <div className="inbox">
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg"
                  alt=""
                />
                <button>Spin mops, </button>
              </div>
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg"
                  alt=""
                />
                <button>Bathroom hardware</button>
              </div>
            </div>
            <div className="inbox">
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg"
                  alt=""
                />
                <button>Hammers,</button>
              </div>
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg"
                  alt=""
                />
                <button>Extension </button>
              </div>
            </div>
            <button>Explore more</button>
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
          <div className="second">
            <h1>Revamp your home in style</h1>
            <div className="inbox">
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"
                  alt=""
                />
                <button>Bedsheet</button>
              </div>
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg"
                  alt=""
                />
                <button>Home decoration</button>
              </div>
            </div>
            <div className="inbox">
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg"
                  alt=""
                />
                <button>Home storage</button>
              </div>
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg"
                  alt=""
                />
                <button>Lighting solutions</button>
              </div>
            </div>
            <button>Explore all</button>
          </div>
        </div>
        <div className="cart">
          <div className="second">
            <h1>Up to 60% off | Professional</h1>
            <div className="inbox">
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg"
                  alt=""
                />
                <button>Professional tools</button>
              </div>
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg"
                  alt=""
                />
                <button>Measuring instruments</button>
              </div>
            </div>
            <div className="inbox">
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg"
                  alt=""
                />
                <button>Cleaning supplies</button>
              </div>
              <div className="inbox1">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
                  alt=""
                />
                <button>Medical supplies</button>
              </div>
            </div>
            <button>See all </button>
          </div>
        </div>
      </div>

      <div className="mainbox">
        <h1>Frequently repurchased in electronics</h1>
        <Carousel responsive={responsive}>
          {electronics.map((elem) => {
            const { id, image } = elem;
            return (
              <div className="products">
                <div className="carts" key={id}>
                  <img src={image} alt="" />
                </div>
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
      <div className="pro">
        <div className="bannerpro">
          <div className="cart">
            <div className="first">
              <h1>Up to 70% off | Clearance store</h1>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                alt=""
              />
              <button>See all</button>
            </div>
          </div>
          <div className="cart">
            <div className="second">
              <h1>Great Freedom Sale | 5th to 9th AUG</h1>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://m.media-amazon.com/images/I/61JWBOTUdqL._SR260,332_.jpg"
                    alt=""
                  />
                  <button>Explore 60+ launches</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://m.media-amazon.com/images/I/616ZdTV6oXL._SR260,332_.jpg"
                    alt=""
                  />
                  <button>Deals at great prices</button>
                </div>
              </div>

              <button>See all Offers</button>
            </div>
          </div>
          <div className="cart">
            <div className="third">
              <h1>Bluetooth Calling Smartwatch starts at...</h1>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
                alt=""
              />
              <button>Shop now</button>
            </div>
          </div>
          <div className="cart">
            <div className="fourth">
              <h1>Sign in for your best experience</h1>
              <button>Sign In</button>
              <img
                src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mainbox">
        <h1>Frequently repurchased in groceries</h1>
        <Carousel responsive={responsive}>
          {groceries.map((elem) => {
            const { id, image } = elem;
            return (
              <div className="products">
                <div className="carts" key={id}>
                  <img src={image} alt="" />
                </div>
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
      <div className="pro">
        <div className="bannerpro">
          <div className="cart">
            <div className="first">
              <h1>GMobile accessories starting </h1>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/MSOREFRESHDESKTOP/D87165616_IN_WLA_BAU_MSO_REFRESH-desktop-version_CC._SY304_CB602731332_.jpg"
                alt=""
              />
              <button>See all</button>
            </div>
          </div>
          <div className="cart">
            <div className="second">
              <h1>Electronics devices for home </h1>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
                    alt=""
                  />
                  <button>Smartwatch</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
                    alt=""
                  />
                  <button>Tablets</button>
                </div>
              </div>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
                    alt=""
                  />
                  <button>Laptops</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
                    alt=""
                  />
                  <button>Monitors</button>
                </div>
              </div>
              <button>See all </button>
            </div>
          </div>
          <div className="cart">
            <div className="second">
              <h1>Amazon Fresh | Great prices | </h1>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/July23/F2V/PC1/FNV_RC1._SY116_CB600163113_.jpg"
                    alt=""
                  />
                  <button>Fruits</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/July23/F2V/PC1/FNV_RC2._SY116_CB600163113_.jpg"
                    alt=""
                  />
                  <button>Vegetables</button>
                </div>
              </div>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/BTF_QCs/July23/F2V/PC1/FNV_RC3._SY116_CB600163113_.jpg"
                    alt=""
                  />
                  <button>Season’s special</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/July23/GW/PC1/FV/QC6_FV_RC_PC_04._SY116_CB601458292_.jpg"
                    alt=""
                  />
                  <button>Season’s</button>
                </div>
              </div>
              <button>See all</button>
            </div>
          </div>
          <div className="cart">
            <div className="second">
              <h1>Great Freedom Sale | </h1>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/AUGART2023/Misize1._SY116_CB598843091_.jpg"
                    alt=""
                  />
                  <button>TVs</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/AUGART2023/Pampersize1._SY116_CB598843091_.jpg"
                    alt=""
                  />
                  <button>Pampers</button>
                </div>
              </div>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/AUGART2023/Lakmesize1._SY116_CB598843091_.jpg"
                    alt=""
                  />
                  <button>Skins</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/HPC/Gamex/PC_QC_186x116._SY116_CB598790907_.jpg"
                    alt=""
                  />
                  <button>Goods with skin</button>
                </div>
              </div>
              <button>See all </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mainbox">
        <h1>Frequently repurchased in Local shops</h1>
        <Carousel responsive={responsive}>
          {shope.map((elem) => {
            const { id, image } = elem;
            return (
              <div className="products">
                <div className="carts" key={id}>
                  <img src={image} alt="" />
                </div>
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
      <div className="poster">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>
      <div className="mainbox">
        <h1>Frequently repurchased in Furnitures</h1>
        <Carousel responsive={responsive}>
          {Furnitures.map((elem) => {
            const { id, image } = elem;
            return (
              <div className="products">
                <div className="carts" key={id}>
                  <img src={image} alt="" />
                </div>
              </div>
            );
          })}
        </Carousel>
        ;
      </div>
      <div className="pro">
        <div className="bannerpro">
          <div className="cart">
            <div className="second">
              <h1>Bestsellers in Women's Indian Clothing </h1>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://m.media-amazon.com/images/I/61q-JREtrAL._AC_SY170_.jpg"
                    alt=""
                  />
                </div>
                <div className="inbox1">
                  <img
                    src="https://m.media-amazon.com/images/I/71XeWDNm5qL._AC_SY170_.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://m.media-amazon.com/images/I/61j03Q3hrKL._AC_SY170_.jpg"
                    alt=""
                  />
                </div>
                <div className="inbox1">
                  <img
                    src="https://m.media-amazon.com/images/I/71T-yPIj-sL._AC_SY170_.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="second">
              <h1>Under ₹499 | Pocket-friendly </h1>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
                    alt=""
                  />
                  <button>Clothigs</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-3-186-116._SY116_CB636055991_.jpg"
                    alt=""
                  />
                  <button>Backports</button>
                </div>
              </div>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-2-186-116._SY116_CB636055991_.jpg"
                    alt=""
                  />
                  <button>Footwears</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC-PFF/PFF-4-186-116._SY116_CB636055991_.jpg"
                    alt=""
                  />
                  <button>View all</button>
                </div>
              </div>
              <button>See all </button>
            </div>
          </div>
          <div className="cart">
            <div className="first">
              <h1>Hip Hop India | Watch </h1>
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/HipHopIndia/Desktop_CC/GOVO_updated/DeskCC-379x304_Hip-Hop-India_V1-remo._SY304_CB600434490_.jpg"
                alt=""
              />
              <button>Watch for FREE | miniTV</button>
            </div>
          </div>
          <div className="cart">
            <div className="second">
              <h1>Birthday store </h1>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_1QC2_1x._SY116_CB662999955_.jpg"
                    alt=""
                  />
                  <button>Gifts for men</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_2QC2_1x._SY116_CB662999955_.jpg"
                    alt=""
                  />
                  <button>Gifts from women</button>
                </div>
              </div>
              <div className="inbox">
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_3QC2_1x._SY116_CB662999955_.jpg"
                    alt=""
                  />
                  <button>Gifts from boys</button>
                </div>
                <div className="inbox1">
                  <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Artboard_4QC2_1x._SY116_CB662999955_.jpg"
                    alt=""
                  />
                  <button>Gifts from girls</button>
                </div>
              </div>
              <button>See all </button>
            </div>
          </div>
        </div>
      </div>
      <div className="buttombox">
        <hr />
        <p> See personalized recommendations</p>
        <button>Sign in</button>
        <p>New customer? <span className="buttomspan">Start here.</span> </p>
        <hr />
      </div>
      <button className="back">Back to top</button>
    </>
  );
};

export default Productslide;
