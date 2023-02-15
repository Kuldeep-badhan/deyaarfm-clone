import React, { useState } from "react";
import aboutimg from "../../assets/About-Us.jpg";
import ourpartners from "../../assets/ourpartners.jpg";
import Vision from "../../components/About/Vision/Vision";
import { Link, useLocation, useParams } from "react-router-dom";
import "./About.scss";
import Awards from "../../components/About/Awards/Awards";
const About = () => {
  const { path } = useParams();
  const { pathname } = useLocation();
  console.log(path);
  return (
    <div className="about">
      <div className="about__header">
        {path == "our-partners" ? (
          <img src={ourpartners} alt="about image" />
        ) : (
          <img src={aboutimg} alt="about image" />
        )}
        <div className="about__header--card">
          <div className="pos">
            <span>Home</span>
            <span className={path == undefined ? `title` : `active_pos title`}>
              About Us
            </span>
            {path == "vision-mission-and-values" && (
              <span className="subtitle">Vision, Mission and Values</span>
            )}
            {path == "our-partners" && (
              <span className="subtitle">Our Partners</span>
            )}
            {path == "awards" && <span className="subtitle">Awards</span>}
          </div>
          <h1>ABOUT US</h1>
          <p>
            Welcome to Deyaar Facilities Management, the responsible facility
            management company that is your partner in smart living!
          </p>
        </div>
      </div>
      <div className="about__body container">
        <div className="about__body--left">
          <ul>
            <li>
              <Link
                to={"/about-us"}
                className={pathname == "/about-us" ? `active_about` : ""}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us/vision-mission-and-values"}
                className={
                  pathname == "/about-us/vision-mission-and-values"
                    ? `active_about`
                    : ""
                }
              >
                {" "}
                VISION, MISSION AND VALUES
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us/our-partners"}
                className={
                  pathname == "/about-us/our-partners" ? `active_about` : ""
                }
              >
                OUR PARTNERS
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us/awards"}
                className={pathname == "/about-us/awards" ? `active_about` : ""}
              >
                AWARDS
              </Link>
            </li>
          </ul>
        </div>
        <div className="about__body--right">
          {path == undefined && (
            <>
              <h4>About Deyaar Facilities Management</h4>
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
              <p>
                Successfully managing a vast portfolio of around 1000 properties
                inclusive of 20,000 units across the UAE, Deyaar Facilities
                Management provides integrated FM solutions that are
                cost-effective, sustainable and aligned to international best
                practices in health, safety and environment.
              </p>
              <p>
                Deyaar Facilities Management combines best-in-class IT
                technology and collaboration that enables it to meet the dynamic
                demands associated with asset intensive industries such as
                utility companies, call centers and ministries.
              </p>{" "}
            </>
          )}
          {path == "vision-mission-and-values" && <Vision />}
          {path == "our-partners" && (
            <p>
              Smart facilities management is a dynamic multi-dimensional
              discipline that is rapidly evolving as technology improves and
              clients constantly raise the bar on expectations. Consequently,
              Deyaar Facilities Management lays great emphasis on collaborating
              seamlessly with key industry partners. This places us at the
              forefront of the market and enables us to deliver a strategic
              advantage to our clients and our partners.
            </p>
          )}
          {path == "awards" && <Awards />}
        </div>
      </div>
    </div>
  );
};

export default About;
