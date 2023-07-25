import "../style.css";
import React from "react";
import PropTypes from 'prop-types'

function Card({ title, des,icon }) {
  return (
    <figure className="rounded-xl p-8 text-textColor">
      {icon}
      <p className="font-bold text-black">{title}</p>
      <p>{des}</p>
    </figure>
  );
}

Card.propTypes = {
  des: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default Card;
