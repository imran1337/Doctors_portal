import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./HeaderMain.css";
import headerMainSideImage from "./../../../images/chair.png";
import HeaderMainCard from "../HeaderMainCard/HeaderMainCard";
import { faPhoneVolume,faClock,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const HeaderMain = () => {
  const headerCardContent = [
    {
      name: "Opening Hours",
      description: "Lorem ipsum is simply dummy text of",
      icon: faMapMarkerAlt,
      backgroundColor: "primary",
    },
    {
      name: "Visit our location",
      description: "Brooklyn,NY 10036, United States",
      icon: faClock,
      backgroundColor: "dark",
    },
    {
      name: "Contact us now",
      description: "+000 123 3453343432",
      icon: faPhoneVolume,
      backgroundColor: "primary",
    },
  ];
  return (
    <section>
      <div
        className="d-flex flex-column align-items-center justify-content-center w-100"
        style={{ height: "500px" }}
      >
        <div className="headerMainStyle">
          <Row className="w-100 d-flex justify-content-center">
            <Col xs={12} md={4} className="order-2 order-md-1">
              <div className="">
                <h2>
                  Your New Style <br /> Starts Here
                </h2>
                <div className="my-3 text-secondary">
                  <small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia cumque modi consequatur a nam rerum ipsa molestiae
                    eligendi exercitationem nulla. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </small>
                </div>
                <Button className="btn_style">GET APPOINTMENT</Button>
              </div>
            </Col>
            <Col xs={12} md={6} className="order-1 order-md-2 mb-4">
              <img
                src={headerMainSideImage}
                className="img-fluid header_img"
                alt="dental chair"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="w-100 d-flex flex-wrap justify-content-center align-items-center mt-5">
        {headerCardContent.map((content) => {
          return <HeaderMainCard content={content} />;
        })}
      </div>
    </section>
  );
};

export default HeaderMain;
