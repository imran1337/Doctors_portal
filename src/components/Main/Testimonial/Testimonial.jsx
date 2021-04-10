import React from "react";
import { Card, Container } from "react-bootstrap";
import patientOne from "./../../../images/Ellipse 1.png";
import patientTwo from "./../../../images/Ellipse 2.png";
import patientThree from "./../../../images/Ellipse 3.png";
const TestimonialCard = ({ image }) => {
  return (
    <Card style={{ maxWidth: "500px" }} className="m-3">
      <Card.Body>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          expedita voluptates eligendi ab cupiditate mollitia suscipit at rerum
          reiciendis laborum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. A, possimus.
        </p>
        <div className="d-flex">
          <div className="patientImage">
            <img src={image} alt="patient" className="avatar" />
          </div>
          <div className="ml-3">
            <h5 style={{ color: "#5fc7c7", fontWeight: "bold" }}>Imran Khan</h5>
            <p className="text-secondary">Bangladesh</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const Testimonial = () => {
  return (
    <Container fluid>
      <div className="info ml-4">
        <h6 className="base_text_color">TESTIMONIAL</h6>
        <h2 style={{ lineHeight: "3rem" }}>
          What's Our Patients <br /> Says
        </h2>
      </div>
      <Container
        fluid
        className="d-flex flex-column flex-md-row flex-wrap justify-content-center mt-5"
      >
        <TestimonialCard image={patientOne} />
        <TestimonialCard image={patientTwo} />
        <TestimonialCard image={patientThree} />
      </Container>
    </Container>
  );
};

export default Testimonial;
