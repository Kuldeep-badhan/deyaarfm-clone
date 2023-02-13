import React from "react";
import carrer1 from "../../assets/career1.jpg";
import "./Carrers.scss";
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
      <div className="carrers__body">
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
                  <input type="text" name="title" id="title" />
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
                  <input type="text" name="country" id="country" />
                </div>
                <div className="passportno">
                  <label htmlFor="passportno">National ID / Passport No*</label>
                  <input type="text" name="passportno" id="passportno" />
                </div>
              </div>
              <div className="right">
                <div className="gender">
                  <label htmlFor="gender">Gender*</label>
                  <input type="text" name="gender" id="gender" />
                </div>
                <div className="lastname">
                  <label htmlFor="lastname">Last Name*</label>
                  <input type="text" name="lastname" id="lastname" />
                </div>
                <div className="marital_status">
                  <label htmlFor="marital_status">Marital Status*</label>
                  <input
                    type="text"
                    name="marital_status"
                    id="marital_status"
                  />
                </div>
                <div className="country">
                  <label htmlFor="country">Country of Nationality*</label>
                  <input type="text" name="country" id="country" />
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
                  <input type="text" name="country" id="country" />
                </div>
                <div className="cv">
                  <label htmlFor="cv">CV*</label>
                  <input type="text" name="cv" id="cv" />
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
                  <input type="text" name="tel" id="tel" />
                </div>
                <div className="mob_no">
                  <label htmlFor="mob_no">
                    Mobile Number* (For e.g: +971 - xxxxxxx)
                  </label>
                  <input type="text" name="mob_no" id="mob_no" />
                </div>
                <div className="package">
                  <label htmlFor="package">Current Annual Package*</label>
                  <input type="text" name="package" id="package" />
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
