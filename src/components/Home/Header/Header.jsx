import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="body" expand="md">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle
        className="ml-auto mr-3"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto font-weight-bold" style={{ textAlign: "end" }}>
          <Link className="nav-margin nav-link" href="#home">
            Home
          </Link>
          <Link className="nav-margin nav-link" href="#link">
            About
          </Link>
          <Link className="nav-margin nav-link" href="#link">
            Dental Services
          </Link>
          <Link className="nav-margin nav-link nav_text_color" href="#link">
            Reviews
          </Link>
          <Link className="nav-margin nav-link nav_text_color" href="#link">
            Blog
          </Link>
          <Link className="nav-margin nav-link nav_text_color" href="#link">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
