import React from "react";
import contact_img from "../../assets/contact-banner-1.jpg";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <img src={contact_img} alt="contact image" />
        <div className="contact__header--card">
          <div className="pos">
            <span>Home</span>
            <span>Contact Us</span>
          </div>
          <h1>CONTACT US</h1>
          <p
            style={{
              fontSize: "0.9rem",
              marginTop: "2rem",
            }}
          >
            Efficient facilities management never sleeps, and neither do we. We
            are reachable 24X7.
          </p>
        </div>
      </div>
      <div className="contact__body container">
        <div className="contact__body--left">
          <p>Contact</p>
        </div>
        <div className="contact__body--right">
          <div className="address">
            <h4>Address</h4>
            <hr />
            <div className="address__column--container">
              <div className="address__column">
                <p>
                  Deyaar Facilities Management Office No. 102, First floor, 51
                  Tower, Al Abraj St., Business Bay, Dubai
                </p>
                <div className="address__column--contact">
                  <p>Tel : +971 4 553 0325</p>
                  <p>Email : info@deyaarfm.com</p>
                  <p>Click here for location map</p>
                </div>
                <div className="address__column--location">
                  <p>Location : Dubai</p>
                  <p>Contact No : 800 DEYAAR (339227)</p>
                </div>
              </div>
              <div className="address__column">
                <p>
                  Deyaar Facilities Management Office No. 1-3, 5th Floor, Mazyed
                  Mall, Tower 2, Abu Dhabi
                </p>
                <div className="address__column--contact">
                  <p>Tel : +971 2 635 3000</p>
                  <p>Email : info@deyaarfm.com</p>
                  <p>Click here for location map</p>
                </div>
                <div className="address__column--location">
                  <p>Location : Abu Dhabi</p>
                  <p>Contact No : 800 DEYAAR (339227)</p>
                </div>
              </div>
              <div className="address__column">
                <p>
                  Deyaar Facilities Management Unit – 2, Plot No. 8819, AGT, Al
                  Sheikh Saud Bin Khaled Al Qassimi, Industrial area – 12,
                  Sharjah
                </p>
                <div className="address__column--contact">
                  <p>Tel : +971 6 740 2814</p>
                  <p>Email : info@deyaarfm.com</p>
                  <p>Click here for location map</p>
                </div>
                <div className="address__column--location">
                  <p>Location : Sharjah</p>
                  <p>Contact No : 800 DEYAAR (339227)</p>
                </div>
              </div>
            </div>
            <p className="inquire__p">
              For maintenance queries Please call: 800 DEYAAR (339227)
            </p>
          </div>
          <h4>
            Inquire about services related to Deyaar Facilities Management
          </h4>
          <hr />
          <div className="contact__details--form">
            <form>
              <div className="left">
                <div className="name">
                  <label htmlFor="name">Name*</label>
                  <input type="text" name="name" id="name" />
                </div>

                <div className="phone">
                  <label htmlFor="phone">
                    Phone* (For e.g: +971 - xxxxxxxxxx)*
                  </label>
                  <input type="tel" name="phone" id="phone" />
                </div>
                <div className="city">
                  <label htmlFor="city">City*</label>
                  <input type="text" name="city" id="city" />
                </div>

                <button type="submit">SUBMIT</button>
              </div>
              <div className="right">
                <div className="email">
                  <label htmlFor="email">Email*</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className="message">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
