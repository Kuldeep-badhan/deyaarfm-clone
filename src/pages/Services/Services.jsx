import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import serviceimg from "../../assets/services.jpg";
import "./Services.scss";
const Services = () => {
  const { path } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="service">
      <div className="service__header">
        <img src={serviceimg} alt="service image" />
        <div className="service__header--card">
          <div className="pos">
            <span>Home</span>
            <span>Services</span>
          </div>
          <h1>SERVICES</h1>
        </div>
      </div>
      <div className="service__body">
        <div className="service__body--left">
          <ul>
            <li>
              <Link
                to={"/services"}
                className={pathname == "/services" ? "active_service" : ""}
              >
                SERVICES
              </Link>{" "}
            </li>
            <li>
              <Link
                to={"/services/complete-facilities-management-services"}
                className={
                  pathname ==
                  "/services/complete-facilities-management-services"
                    ? "active_service"
                    : ""
                }
              >
                COMPLETE FM
              </Link>
            </li>
            <li>
              <Link
                to={"/services/soft-services"}
                className={
                  pathname == "/services/soft-services" ? "active_service" : ""
                }
              >
                SOFT SERVICES
              </Link>
            </li>
            <li>
              <Link
                to={"/services/hard-services"}
                className={
                  pathname == "/services/hard-services" ? "active_service" : ""
                }
              >
                HARD SERVICES
              </Link>
            </li>
            <li>
              <Link
                to={"/services/specialized-services"}
                className={
                  pathname == "/services/specialized-services"
                    ? "active_service"
                    : ""
                }
              >
                SPECIALIZED SERVICES
              </Link>
            </li>
            <li>
              <Link
                to={"/services/service-request"}
                className={
                  pathname == "/services/service-request"
                    ? "active_service"
                    : ""
                }
              >
                SERVICE REQUEST
              </Link>
            </li>
          </ul>
        </div>
        <div className="service__body--right">
          {path == undefined && (
            <>
              <h4>Full Range of Facilities Management Solutions in the UAE</h4>
              <p>
                The Deyaar Facilities Management Team is committed to delivering
                world class facilities management services, adhering to industry
                standards and surpassing the expectations of customers and
                stakeholders at all stages of our service.
              </p>
              <p>
                Deyaar Facilities Management operates in line with industry best
                practice and world-class standards, and has been awarded ISO and
                OSHAS certification in recognition of this.
              </p>
              <h5>
                DFM have successfully completed and achieved the following ISO
                Certification:
              </h5>
              <ul>
                <li>ISO 9001: 2008 Quality Management System</li>
                <li>ISO 14001: 2004 Environmental Management System</li>
                <li>
                  BS OHSAS 18001: 2007 Occupational Health & Safety Management
                  System
                </li>
              </ul>
              <p>
                Deyaar Facilities Management has adopted the European Foundation
                for Quality Management (EFQM) Excellence Model ensuring a
                systematic and measurable approach towards its journey of
                excellence.
              </p>
              <p>
                The Company is a member of MEFMA, Dubai Quality Group and
                others.
              </p>
            </>
          )}
          {path == "complete-facilities-management-services" && <>cfms</>}
          {path == "soft-services" && <>soft</>}
          {path == "hard-services" && <>hard</>}
          {path == "specialized-services" && <>specialized</>}
          {path == "service-request" && <>service-request</>}
        </div>
      </div>
    </div>
  );
};

export default Services;
