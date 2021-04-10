import React from "react";
import ExceptionalDentalCare from "./ExceptionalDentalCare/ExceptionalDentalCare";
import OurServices from "./OurServices/OurServices";
import Appointment from "./Appointment/Appointment";
import Testimonial from "./Testimonial/Testimonial";
import Blog from "./Blog/Blog";
import Doctors from "./Doctors/Doctors";
import Contact from "./Contact/Contact";

const Main = () => {
  return (
    <div>
      <OurServices />
      <ExceptionalDentalCare />
      <Appointment />
      <Testimonial />
      <Blog />
      <Doctors />
      <Contact />
    </div>
  );
};

export default Main;
