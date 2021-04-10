import React from "react";
import { Container } from "react-bootstrap";
import doctorImg from "./../../../images/5790-removebg.png";
const DoctorsCard = () => {
  return (
    <div className="m-3 text-center">
      <img src={doctorImg} width="200px" alt="Doctor" />
      <h5>Imran Khan</h5>
      <p className="base_text_color">ico +61 462 300 226</p>
    </div>
  );
};

const Doctors = () => {
  return (
    <section className="mt-5 pt-5">
      <h4 className="base_text_color text-center">Our Doctors</h4>
      <Container className="d-flex flex-column flex-sm-row justify-content-center">
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
      </Container>
    </section>
  );
};

export default Doctors;
