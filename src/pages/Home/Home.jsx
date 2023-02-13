import React, { useEffect, useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import img1 from "../../assets/img-1.jpg";
import img2 from "../../assets/img-2.webp";
import img3 from "../../assets/img-3.jpeg";
import logo from "../../assets/logo.png";
import "./Home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  const [active, setActive] = useState("btn1");
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    console.log("rerender");
  }, [active]);
  return (
    <div className="home">
      <div
        className="home__carousel__slider"
        style={{
          transform: `translateX(${-100 * slide}vw)`,
        }}
      >
        <div className="slider__1">
          <div className="image">
            <img src={img1} alt="picture of two engineers " />
          </div>
          <div className="service__desc">
            <div className="bullet__btns">
              <span
                className={active == "btn1" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn1");
                  setSlide(0);
                }}
              ></span>
              <span
                className={active == "btn2" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn2");
                  setSlide(1);
                }}
              ></span>
              <span
                className={active == "btn3" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn3");
                  setSlide(2);
                }}
              ></span>
            </div>
            <div className="desc">
              <p>The Leading Provider of</p>
              <h2>Complete Facility Management Solutions </h2>
            </div>
            <button>Complete Facility Management </button>
          </div>
        </div>
        <div className="slider__2">
          <div className="image">
            <img src={img2} alt="picture of two engineers " />
          </div>
          <div className="service__desc">
            <div className="bullet__btns">
              <span
                className={active == "btn1" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn1");
                  setSlide(0);
                }}
              ></span>
              <span
                className={active == "btn2" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn2");
                  setSlide(1);
                }}
              ></span>
              <span
                className={active == "btn3" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn3");
                  setSlide(2);
                }}
              ></span>
            </div>
            <div className="desc">
              <p>The Leading Provider of</p>
              <h2>Complete Facility Management Solutions </h2>
            </div>
            <button>Complete Facility Management </button>
          </div>
        </div>
        <div className="slider__3">
          <div className="image">
            <img src={img3} alt="picture of two engineers " />
          </div>
          <div className="service__desc">
            <div className="bullet__btns">
              <span
                className={active == "btn1" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn1");
                  setSlide(0);
                }}
              ></span>
              <span
                className={active == "btn2" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn2");
                  setSlide(1);
                }}
              ></span>
              <span
                className={active == "btn3" ? "btn active" : "btn"}
                onClick={() => {
                  setActive("btn3");
                  setSlide(2);
                }}
              ></span>
            </div>
            <div className="desc">
              <p>The Leading Provider of</p>
              <h2>Complete Facility Management Solutions </h2>
            </div>
            <button>Complete Facility Management </button>
          </div>
        </div>
      </div>
      <div className="home__about">
        <div className="left">
          <h3>
            Wide range of specialized Facilities Management services in the UAE
          </h3>
          <div className="left__main--content">
            <div className="top">
              <img src={logo} alt="logo" />
              <strong>About Us</strong>
            </div>
            <div className="bottom">
              <p>
                Our operational roots go back to 2002, when Deyaar established
                and grew a dedicated in-house maintenance department to oversee
                the day-to-day maintenance of its portfolio of properties in the
                UAE.
              </p>
              <p>
                Deyaar Facilities Management became functional as a division of
                the Deyaar Development PJSC Group in 2007. The company is a
                leading provider of integrated facilities management solutions
                for real estate, commercial and retail developments in the UAE.
              </p>
              <button>About Us</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <span className="leaf">
              <FaCanadianMapleLeaf />
            </span>

            <h2>WE TURN THE WORLD GREEN</h2>
          </div>
          <div className="bottom">
            <p>
              Sustainability is the centerpiece of Deyaar Facilities Management
              operations. We are committed to developing eco-friendly
              communities that provide overall safety to residents, our
              employees and the wider community.
            </p>
            <button>Sustainability</button>
          </div>
        </div>
      </div>
      <div className="home__service--request">
        <p>You can use the link below to submit a service request.</p>
        <Link to={"#"}>Service Request</Link>
      </div>
    </div>
  );
};

export default Home;
