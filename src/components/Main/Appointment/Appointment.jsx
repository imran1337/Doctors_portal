import React from "react";
import { Button } from "react-bootstrap";
import doctorImg from "./../../../images/5790-removebg.png";
import "./Appointment.css";
const Appointment = () => {
  return (
    <div
      
      className="d-flex justify-content-center align-items-center mx-auto appointment_div_style mb-5"
    >
      <div>
        <img
          src={doctorImg}
          className=" d-none d-md-block doctorImage"
          alt="doctor"
        />
      </div>
      <div className="p-3">
        <h6 className="text-uppercase">appointment</h6>
        <h2 className="">
          Make an appointment <br /> Today
        </h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, id
          voluptas dolore animi voluptatem maiores ex, iure repudiandae illo,
          maxime ipsum et laboriosam dolores doloremque! Necessitatibus numquam
          dolorem ea totam!
        </p>
        <Button className="mt-5">Learn More</Button>
      </div>
    </div>
  );
};

export default Appointment;
