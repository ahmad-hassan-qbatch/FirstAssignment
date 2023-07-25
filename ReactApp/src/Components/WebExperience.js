import React from "react";
import Navbar from "./Navbar";
import "../style.css";
import ExploreProducts from "./ExploreProducts";
import ExploreProductsImage from "./ExploreProductsImage";

const WebExperience = () => {
  return (
    <div>
      <div className="h-auto bg-background">
        <div className="mx-1/4">
          <Navbar />
          <div
            className="grid grid-cols-2 gap-10 mx-1/2"
            style={{ marginTop: "20px" }}
          >
            <ExploreProducts />
            <ExploreProductsImage />
          </div>
        </div>
      </div>
      <div
        className="h-40"
        style={{
          background:
            "linear-gradient(to right bottom, #0D1D2D 50%, #ffff 50%)",
        }}
      ></div>
    </div>
  );
};

export default WebExperience;
