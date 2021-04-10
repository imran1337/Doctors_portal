import React from "react";
import dentalImg from "../../../images/001-dental.png";
import cavityImg from "./../../../images/tooth (1).png";
import teethImg from "./../../../images/tooth.png";
import OurServicesCard from "./OurServicesCard/OurServicesCard";
const OurServices = () => {
  const serviceCardData = [
    {
      name: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laudantium, impedit velit exercitationem ad commodi!",
      img: dentalImg,
      imgAlt:'dental'
    },
    {
      name: "Cavity Filling",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laudantium, impedit velit exercitationem ad commodi!",
      img: cavityImg,
      imgAlt:'cavity'
    },
    {
      name: "Teeth Whitening",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis laudantium, impedit velit exercitationem ad commodi!",
      img: teethImg,
      imgAlt:'teeth'
    },
  ];
  return (
    <div className="text-center my-5">
      <h6>Our Services</h6>
      <h2 className="mt-3">Services We Provide</h2>
      <div className="d-flex justify-content-center mt-5">
        {serviceCardData.map((data) => {
          return <OurServicesCard details={data} />;
        })}
      </div>
    </div>
  );
};

export default OurServices;
