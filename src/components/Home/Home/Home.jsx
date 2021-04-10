import React from "react";
import Header from "./../Header/Header";
import HeaderMain from "./../HeaderMain/HeaderMain";
import "./Home.css";
import Main from "./../../Main/Main";
import Footer from "./../../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="forHeader">
        <div className="mb-5">
          <Header />
        </div>
        <HeaderMain />
      </div>
      <Main />
      <Footer />
    </>
  );
};

export default Home;
