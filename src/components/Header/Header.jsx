import React, { useState } from "react";
import logo from "../../assets/deyaar-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./Header.scss";
const Header = () => {
  const [search, setSearch] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="header">
      <div className="header__bar">
        <span className="blue"></span>
        <span className="red"></span>
      </div>
      <div className="header__container">
        <div className="logo">
          <img src={logo} alt="company logo" />
        </div>
        <nav>
          <div className="main__links">
            <ul className="main__links--ul">
              <li>
                {" "}
                <Link to={"/"} className={pathname == "/" ? `active` : ""}>
                  Home
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to={"/carrers"}
                  className={pathname == "/carrers" ? `active` : ""}
                >
                  Carrers
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to={"/contact-us"}
                  className={pathname == "/contact-us" ? `active` : ""}
                >
                  Contact Us
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to={"#"}>arabic</Link>{" "}
              </li>
              <li onClick={() => setSearch(!search)}>
                {" "}
                <AiOutlineSearch className="icon" />
              </li>
              <li className="company__number">
                {" "}
                <BsFillTelephoneFill className="icon" /> 800-DEYAAR (339227){" "}
              </li>
            </ul>

            <div className={search ? `search__input` : `search__input d__none`}>
              <AiOutlineSearch className="search__icon" />
              <input type="text" name="search" id="search" />
            </div>
          </div>
          <div className="secondary__links">
            <ul className="secondary__links--ul">
              <li>
                {" "}
                <Link
                  to={"/about-us"}
                  className={pathname == "/about-us" ? `active` : ""}
                >
                  ABOUT US
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to={"/services"}
                  className={pathname == "/services" ? `active` : ""}
                >
                  SERVICES
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to={"/sustainability"}
                  className={pathname == "/sustainability" ? `active` : ""}
                >
                  SUSTAINABILITY
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to={"/press-release"}
                  className={pathname == "/press-release" ? `active` : ""}
                >
                  MEDIA CENTER
                </Link>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
