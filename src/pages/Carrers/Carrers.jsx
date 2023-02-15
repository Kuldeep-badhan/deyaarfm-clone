import React from "react";
import carrer1 from "../../assets/career1.jpg";
import "./Carrers.scss";
import countries from "../../countries.js";
const Carrers = () => {
  return (
    <div className="carrers">
      <div className="carrers__header">
        <img src={carrer1} alt="carrer image" />
        <div className="carrers__header--card">
          <div className="pos">
            <span>Home</span>
            <span>Careers</span>
          </div>
          <h1>CAREERS</h1>
        </div>
      </div>
      <div className="carrers__body container">
        <div className="carrers__body--left">
          <p>CARRERS</p>
        </div>
        <div className="carrers__body--right">
          <p>
            Deyaar Facilities Management is constantly looking out for talented
            professionals and fresh graduates to join our diverse team. Please
            send us your C.V at DFMHR@deyaar.ae
          </p>
          <h4>Personal Details</h4>
          <hr />
          <div className="personal__details--form">
            <form>
              <div className="left">
                <div className="title">
                  <label htmlFor="title">Title*</label>
                  <select name="title" id="title">
                    <option value="">Select Title</option>
                    <option value="mrs">Mr.</option>
                    <option value="mrs">Ms.</option>
                    <option value="mrs">Mrs.</option>
                  </select>
                </div>
                <div className="firstname">
                  <label htmlFor="firstname">First Name*</label>
                  <input type="text" name="firstname" id="firstname" />
                </div>
                <div className="dob">
                  <label htmlFor="dob">Date of Birth*</label>
                  <input type="text" name="dob" id="dob" />
                </div>
                <div className="country">
                  <label htmlFor="country">Country of Birth*</label>
                  <select name="country" id="country">
                    <option value="">Select Country</option>
                    {countries.map((country) => {
                      return <option value={country}>{country}</option>;
                    })}
                  </select>
                </div>
                <div className="passportno">
                  <label htmlFor="passportno">National ID / Passport No*</label>
                  <input type="text" name="passportno" id="passportno" />
                </div>
              </div>
              <div className="right">
                <div className="gender">
                  <label htmlFor="gender">Gender*</label>
                  <select name="gender" id="gender">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="lastname">
                  <label htmlFor="lastname">Last Name*</label>
                  <input type="text" name="lastname" id="lastname" />
                </div>
                <div className="marital_status">
                  <label htmlFor="marital_status">Marital Status*</label>
                  <select name="marital_status" id="marital_status">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorce">Divorce</option>
                    <option value="widow">Widow</option>
                    <option value="widower">Widower</option>
                  </select>
                </div>
                <div className="country">
                  <label htmlFor="country">Country of Nationality*</label>
                  <select name="country" id="country">
                    <option value="">Select Country</option>
                    {countries.map((country) => {
                      return <option value={country}>{country}</option>;
                    })}
                  </select>
                </div>
              </div>
            </form>
          </div>
          <h4>Contact Details</h4>
          <hr />
          <div className="contact__details--form">
            <form>
              <div className="left">
                <div className="adress">
                  <label htmlFor="adress">Adress*</label>
                  <input type="text" name="adress" id="adress" />
                </div>

                <div className="postal_code">
                  <label htmlFor="postal_code">Zip/Postal Code*</label>
                  <input type="text" name="postal_code" id="postal_code" />
                </div>
                <div className="city">
                  <label htmlFor="city">City*</label>
                  <input type="text" name="city" id="city" />
                </div>
                <div className="country">
                  <label htmlFor="country">Country*</label>
                  <select name="country" id="country">
                    <option value="">Select Country</option>
                    {countries.map((country) => {
                      return <option value={country}>{country}</option>;
                    })}
                  </select>
                </div>
                <div className="cv">
                  <label>
                    CV*
                    {true && (
                      <span
                        style={{
                          marginLeft: "0.5rem",
                        }}
                      >
                        File Selected
                      </span>
                    )}
                  </label>
                  <label htmlFor="cv" className="cv_label">
                    Browse
                    <input
                      type="file"
                      name="cv"
                      id="cv"
                      style={{
                        display: "none",
                      }}
                    />
                  </label>
                </div>
                <div className="plus">
                  <p>Enter the below text*</p>
                  <label htmlFor="plus">12+48=?</label>
                  <input type="text" name="plus" id="plus" />
                </div>
                <button type="submit">SUBMIT</button>
              </div>
              <div className="right">
                <div className="email">
                  <label htmlFor="email">Email*</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="tel">
                  <label htmlFor="tel">
                    Home Tel Number* (For e.g: +971 - xxxxxxx)
                  </label>
                  <div className="tel_input">
                    <input type="text" name="tel" id="tel" value={"+971"} />
                    <input type="text" name="tel" id="tel" />
                    <input type="text" name="tel" id="tel" />
                  </div>
                </div>
                <div className="mob_no">
                  <label htmlFor="mob_no">
                    Mobile Number* (For e.g: +971 - xxxxxxx)
                  </label>
                  <div className="mob_input">
                    <input
                      type="text"
                      name="mob_no"
                      id="mob_no"
                      value={"+971"}
                    />
                    <input type="text" name="mob_no" id="mob_no" />
                    <input type="text" name="mob_no" id="mob_no" />
                  </div>
                </div>
                <div className="package">
                  <label htmlFor="package">Current Annual Package*</label>
                  <select name="package" id="package">
                    <option value="">Select Package</option>
                    <option value="50000k - 100000k">50000k - 100000k</option>
                    <option value="100000k - 150000k">100000k - 150000k</option>
                    <option value="200000k - 250000k">200000k - 250000k</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrers;
