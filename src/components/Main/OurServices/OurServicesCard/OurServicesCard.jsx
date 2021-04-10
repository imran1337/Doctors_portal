import React from "react";

const OurServicesCard = ({ details }) => {
  const { img, name, description, imgAlt } = details;
  return (
    <div className="m-3 text-center">
      <img src={img} alt={imgAlt} />
      <h4 className="mt-4">{name}</h4>
      <p className="text-secondary p-3" style={{maxWidth:'450px'}}>{description}</p>
    </div>
  );
};

export default OurServicesCard;
