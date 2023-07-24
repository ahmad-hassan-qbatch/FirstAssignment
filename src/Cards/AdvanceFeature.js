import React from "react";
import "../style.css";
import PropTypes from "prop-types";

const AdvanceFeature = ({ title, des, cardNo, Image, borderBool }) => {
  return (
    <figure className="rounded-xl p-8 text-textColor">
      <div className="relative">
        {borderBool && (
          <div
            className="transform -top-3 left-3 w-full h-full absolute z-0 border-2 border-cardBorderColor"
          ></div>
        )}

        <div
          className="flex justify-center items-center absolute z-20 transform -top-6 left-6 text-white rounded-full h-1/5 w-1/5 bg-cardNoBackground"
        >
          {cardNo}
        </div>
        <img
          src={Image}
          alt=""
          width="350"
          height="350"
          className="relative z-10"
        ></img>
      </div>
      <p className="font-bold text-black">{title}</p>
      <p>{des}</p>
    </figure>
  );
};

AdvanceFeature.propTypes = {
  Image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  borderBool: PropTypes.bool.isRequired,
  des: PropTypes.string.isRequired,
  cardNo: PropTypes.string.isRequired,
};
export default AdvanceFeature;
