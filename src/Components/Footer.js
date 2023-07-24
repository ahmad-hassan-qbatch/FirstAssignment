import logo from "../Images/nav.png";
import React from "react";

export const Footer = () => {
  return (
    <div className="mx-1/4 p-8">
      <div className="grid grid-cols-6 gap-6" style={{fontSize:"12px"}}>
        <div className="col-span-2">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo"></img>
          <p className="text-md font-bold">The smart way to start you next idea.</p>
        </div>
        <div className="text-textColor" >
          <p className="font-bold text-black p-1">How it works</p>
          <p className="p-1">Overview</p>
          <p className="p-1">Pricing</p>
          <p className="p-1">Service Area</p>
        </div>
        <div className="text-textColor" >
          <p className="font-bold text-black p-1">Resources</p>
          <p className="p-1">Customer Stories</p>
          <p className="p-1">Knowledge Base</p>
          <p className="p-1">Contact Us</p>
        </div>
        <div className="text-textColor" >
          <p className="font-bold text-black p-1">Products</p>
          <p className="p-1">Corporate Partner</p>
          <p className="p-1">Secure Identity</p>
          <p className="p-1">Legal Help</p>
          <p className="p-1">First Capital</p>
        </div>
        <div className="text-textColor" >
          <p className="font-bold text-black p-1">Company</p>
          <p className="p-1">About Us</p>
          <p className="p-1">Careers</p>
          <p className="p-1">Term of Use</p>
        </div>
      </div>
    </div>
  );
};


export default Footer;