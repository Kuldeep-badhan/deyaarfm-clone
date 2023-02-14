import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import plant from "../../assets/plant.jpg";
import hsepolicy from "../../assets/hsepolicy.jpg";
import qpolicy from "../../assets/qpolicy.jpg";
import "./Sustainability.scss";
const Sustainability = () => {
  const { path } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="sustainability">
      <div className="sustainability__header">
        {path == undefined && <img src={plant} alt="sustainability image" />}
        {path == "health-safety-environment" && (
          <img src={hsepolicy} alt="sustainability image" />
        )}
        {path == "quality-policy-statement" && (
          <img src={qpolicy} alt="sustainability image" />
        )}

        <div className="sustainability__header--card">
          <div className="pos">
            <span>Home</span>
            <span className={path == undefined ? "title" : "title active_sus"}>
              Sustainability
            </span>
            {path == "health-safety-environment" && (
              <span className="subtitle">
                Statement of Health, Safety and Environment Policy
              </span>
            )}
            {path == "quality-policy-statement" && (
              <span className="subtitle">Quality Policy Statement</span>
            )}
          </div>
          {path == undefined && <h1>Sustainability</h1>}
          {path == "health-safety-environment" && (
            <h1>Statement of Health, Safety and Environment Policy</h1>
          )}
          {path == "quality-policy-statement" && (
            <h1>Quality Policy Statement</h1>
          )}
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
            <p>
              Deyaar Facilities Management proactively and visibly manages HSE
              risk and we are committed to preventing incidents such as ill
              health and pollution. We comply with all applicable legal
              requirements and deliver a robust programme of awareness and
              training to promote a culture of HSE values within the company.
            </p>
          )}
          {path == "quality-policy-statement" && (
            <p>
              The Deyaar Facilities Management Team is firmly committed to
              providing quality Facility Management services, which exceeds the
              expectations of our customers and stakeholders through the use of
              state-of-the-art technology and continuous improvement practices,
              while adapting to the evolving business environment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
