import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_footer_c.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logo} alt="company logo" />
      </div>
      <div className="footer__links">
        <div className="footer__column">
          <div className="footer__column--heading">
            <Link to={"/"}>HOME</Link>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__column--heading">
            <Link to={"/about-us"}> ABOUT US</Link>
          </div>
          <div className="footer__column--links">
            <ul>
              <li>
                {" "}
                <Link to={"/about-us/vision-mission-and-values"}>
                  VISION, MISSION AND VALUES
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/about-us/our-partners"}>OUR PARTNERS</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/about-us/awards"}>AWARDS</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__column--heading">
            <Link to={"/sustainability"}>SUSTAINABILITY</Link>
          </div>
          <div className="footer__column--links">
            <ul>
              <li>
                {" "}
                <Link to={"/sustainability/health-safety-environment"}>
                  HSE POLICY
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/sustainability/quality-policy-statement"}>
                  QUALITY POLICY
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__column--heading">
            <Link to={"/services"}>SERVICES</Link>
          </div>
          <div className="footer__column--links">
            <ul>
              <li>
                {" "}
                <Link to={"/services/complete-facilities-management-services"}>
                  COMPLETE FM
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/services/soft-services"}>SOFT SERVICES</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/services/hard-services"}>HARD SERVICES</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/services/specialized-services"}>
                  SPECIALIZED SERVICES
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"/services/service-request"}>
                  SERVICE REQUEST
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__column--heading">
            <Link to={"/contact-us"}>CONTACT US</Link>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__column--heading">
            <Link to={"/carrers"}>CAREERS</Link>
          </div>
        </div>
      </div>
      <p className="copyright">
        © 2023 Deyaar Facilities Management, All Rights Reserved
      </p>
      <div className="footer__bar">
        <span className="blue"></span>
        <span className="red"></span>
      </div>
    </div>
  );
};

export default Footer;
