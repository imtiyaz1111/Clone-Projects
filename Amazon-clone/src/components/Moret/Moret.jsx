import React from "react";
import "./Moret.css";

export default function Moret() {
  return (
    <div className="moret">
        <div className="more">
        <button>Sign in</button>
      <p>New customer? Start here.</p>
        </div>
     
      <hr />
      <div className="morebox">
        <div className="more1">
          <h4>Your Lists</h4>
          <a href="">
            {" "}
            <p>Create a Wish List</p>
          </a>
          <a href=""> <p>Wish from Any Website</p></a>
         <a href=""><p>Baby Wishlist</p></a>
          <a href=""> <p>Discover Your Style</p></a>
         <a href=""> <p>Explore Showroom</p></a>
         
        </div>
        <div className="more2">
          <h4>Your Account</h4>
          <a href=""> <p>Your Orders</p></a>
         <a href=""><p>Your Wish List</p></a>
          <a href=""> <p>Your Recommendations</p></a>
         <a href=""><p>Your Prime Membership</p></a>
          <a href=""><p>Your Prime Video</p></a>
          <a href=""> <p>Your Subscribe & Save Items</p></a>
         <a href=""> <p>Your Seller Account</p></a>
         <a href=""> <p>Manage Your Content and Devices</p></a>
         <a href=""><p>Your Free Amazon Business Account</p></a>
          
        </div>
      </div>
    </div>
  );
}
