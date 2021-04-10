import React from "react";
import { Button, Container } from "react-bootstrap";
import ExceptionalCompImg from "./../../../images/Mask Group 3.png";
const ExceptionalDentalCare = () => {
  return (
    <Container className="mb-5">
      <div className="d-flex row justify-content-center">
        <div className=" mb-5">
          <img
            className="img-fluid"
            style={{ maxHeight: "550px" }}
            src={ExceptionalCompImg}
            alt="child"
          />
        </div>
        <div className="col-12 col-xl-6">
          <h2>Exceptional Dental Care, on Your Terms</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            perspiciatis quibusdam culpa, ea, nam quaerat est quod qui deleniti
            tenetur provident quam quis cupiditate! Natus officia praesentium
            quos molestiae modi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae placeat autem aspernatur amet. Incidunt?
          </p>
          <Button>Learn More</Button>
        </div>
      </div>
    </Container>
  );
};

export default ExceptionalDentalCare;
