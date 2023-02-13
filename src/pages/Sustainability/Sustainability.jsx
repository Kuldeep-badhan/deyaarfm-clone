import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import plant from "../../assets/plant.jpg";
import "./Sustainability.scss";
const Sustainability = () => {
  const { path } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="sustainability">
      <div className="sustainability__header">
        <img src={plant} alt="sustainability image" />
        <div className="sustainability__header--card">
          <div className="pos">
            <span>Home</span>
            <span>Sustainability</span>
          </div>
          <h1>SUSTAINABILITY</h1>
        </div>
      </div>
      <div className="sustainability__body">
        <div className="sustainability__body--left">
          <ul>
            <li>
              <Link
                to={"/sustainability"}
                className={
                  pathname == "/sustainability" ? "active_sustain" : ""
                }
              >
                SUSTAINABILITY
              </Link>
            </li>
            <li>
              <Link
                to={"/sustainability/health-safety-environment"}
                className={
                  pathname == "/sustainability/health-safety-environment"
                    ? "active_sustain"
                    : ""
                }
              >
                HSE POLICY
              </Link>
            </li>
            <li>
              <Link
                to={"/sustainability/quality-policy-statement"}
                className={
                  pathname == "/sustainability/quality-policy-statement"
                    ? "active_sustain"
                    : ""
                }
              >
                QUALITY POLICY
              </Link>
            </li>
          </ul>
        </div>
        <div className="sustainability__body--right">
          {path == undefined && (
            <>
              <p>
                Sustainability is the centerpiece of Deyaar Facilities
                Management operations. We are committed to developing
                eco-friendly communities that provide overall safety to
                residents, our employees and the wider community.
              </p>
              <strong>Comliance</strong>
              <p>
                Deyaar Facilities Management complies with the highest standards
                of integrity and ethical standards in our business.
              </p>

              <strong>CSR</strong>
              <p>
                Deyaar Facilities Management’s CSR programme focuses on
                education and maintenance projects.
              </p>

              <strong>Health & Safety</strong>
              <p>
                We deliver a high standard of health and safety compliance for
                our clients and employees through integrated safety procedures
                and mandatory training.
              </p>
              <strong>Training</strong>
              <p>
                We ensure all our staff receive frequent training in customer
                service excellence, sustainability and global best practice.
              </p>
            </>
          )}
          {path == "health-safety-environment" && (
            <>health-safety-environment</>
          )}
          {path == "quality-policy-statement" && <>quality-policy-statement</>}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
