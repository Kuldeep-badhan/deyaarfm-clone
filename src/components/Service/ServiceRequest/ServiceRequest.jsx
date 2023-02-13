import React from "react";
import "./ServiceRequest.scss";
const ServiceRequest = () => {
  return (
    <div className="service__request">
      <div className="service__request__form__container">
        <form>
          <div className="top">
            <div className="left">
              <div className="firstname">
                <label htmlFor="firstname">First Name*</label>
                <input type="text" name="firstname" id="firstname" />
              </div>
              <div className="email">
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="bin">
                <label htmlFor="bin">
                  Building Identification Number (BIN)*
                </label>
                <input type="text" name="bin" id="bin" />
              </div>
            </div>
            <div className="right">
              <div className="lastname">
                <label htmlFor="lastname">Last Name*</label>
                <input type="text" name="lastname" id="lastname" />
              </div>
              <div className="phone">
                <label htmlFor="phone">
                  Contact Number* (For e.g: +971 - xxxxxxxxxx)
                </label>
                <input type="tel" name="phone" id="phone" />
              </div>
              <div className="flatno">
                <label htmlFor="flatno">Flat No. / Unit No*</label>
                <input type="text" name="flatno" id="flatno" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="chekbox__mania">
              <label htmlFor="common_area">
                <input type="checkbox" name="common_area" id="common_area" />
                Common Area
              </label>
              <label htmlFor="bathroom">
                <input type="checkbox" name="bathroom" id="bathroom" />
                Bath Room
              </label>
              <label htmlFor="kitchen">
                <input type="checkbox" name="kitchen" id="kitchen" />
                Kitchen
              </label>
              <label htmlFor="balcony">
                <input type="checkbox" name="balcony" id="balcony" />
                Balcony
              </label>
              <label htmlFor="garden">
                <input type="checkbox" name="garden" id="garden" />
                Garden
              </label>
              <label htmlFor="bedroom">
                <input type="checkbox" name="bedroom" id="bedroom" />
                Bedroom
              </label>
              <label htmlFor="livingroom">
                <input type="checkbox" name="livingroom" id="livingroom" />
                Living Room
              </label>
              <label htmlFor="office">
                <input type="checkbox" name="office" id="office" />
                Office
              </label>
              <label htmlFor="shop">
                <input type="checkbox" name="shop" id="shop" />
                Shop
              </label>
              <label htmlFor="warehouse">
                <input type="checkbox" name="warehouse" id="warehouse" />
                Warehouse
              </label>
              <label htmlFor="others">
                <input type="checkbox" name="others" id="others" />
                Others
              </label>
            </div>
            <div className="category">
              <label htmlFor="category">Category*</label>
              <input type="text" name="category" id="category" />
            </div>
            <div className="subject">
              <label htmlFor="subject">Subject*</label>
              <input type="text" name="subject" id="subject" />
            </div>
            <div className="message">
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="plus">
              <label htmlFor="plus">Enter the below text*</label>
              <p>30+11=?</p>
              <input type="text" name="plus" id="plus" />
            </div>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequest;
