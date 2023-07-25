import React from "react";
import one from "../Images/1.jpg";
const ExploreProductsImage = () => {
  return (
    <div className="relative">
      <div
        className="transform top-3 left-3 w-full h-full flex absolute"
        style={{
          border: "2px solid #29394B",
        }}
      >
        {" "}
      </div>
      <img
        src={one}
        className="absolute h-full w-full"
        alt="Flowbite Logo"
      ></img>
    </div>
  );
};

export default ExploreProductsImage;
