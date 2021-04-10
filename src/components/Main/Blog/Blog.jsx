import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";
import img from "./../../../images/Ellipse 1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BlogCardDiff = () => {
  return (
    <section
      className="text-white bg-dark p-5 mx-4 my-3 base_bg rounded shadow"
      style={{ width: "400px" }}
    >
      <div>
        <h6>Rashed Kabir</h6>
        <p>22 Aug 2018</p>
      </div>
      <h5 className="mb-5">Check at least a doctor in a year for your teeth</h5>
      <p>
        <FontAwesomeIcon icon={faArrowRight} size="4x" />
      </p>
    </section>
  );
};
const BlogCard = () => {
  return (
    <section
      className="p-3 mx-4 my-3 rounded shadow"
      style={{ width: "400px" }}
    >
      <div className="d-flex">
        <div>
          <img src={img} alt="hello" className="avatar" />
        </div>
        <div className="ml-3">
          <h6>Imran Khan</h6>
          <p>10 April 2021</p>
        </div>
      </div>
      <h5 className="my-4">
        2 times of brush in a day can <br /> Keep you healthy
      </h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident et
        dolorem incidunt consequatur iste atque rerum, voluptatum iure
      </p>
    </section>
  );
};

const Blog = () => {
  return (
    <Container fluid className="my-5 pt-5">
      <div className="text-center">
        <h5 className="base_text_color">Our Blog</h5>
        <h2>From Our Blog News</h2>
      </div>
      <section className="mt-5 pt-3">
        <div className="d-flex justify-content-center">
          <BlogCardDiff />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </Container>
  );
};

export default Blog;
