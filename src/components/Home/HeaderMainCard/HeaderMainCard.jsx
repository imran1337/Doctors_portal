import React from "react";
import "./HeaderMainCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HeaderMainCard = ({ content }) => {
  return (
    <div
      style={{ width: "400px" }}
      className={`rounded d-flex align-items-center p-4 my-3 mx-2 card-${content.backgroundColor} text-white`}
    >
      <div className="icon mr-3 p-4">
        <FontAwesomeIcon icon={content?.icon} size="3x" />
      </div>
      <div className="content">
        <h6>{content?.name}</h6>
        <p>{content?.description}</p>
      </div>
    </div>
  );
};

export default HeaderMainCard;
