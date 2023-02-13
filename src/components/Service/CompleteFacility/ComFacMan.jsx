import React from "react";
import { Link } from "react-router-dom";
import "./ComFacMan.scss";
const ComFacMan = () => {
  return (
    <div className="com__fac__man">
      <h4>Deyaar Provides a Complete Facilities Management Solution</h4>
      <p>
        Deyaar Facilities Management has a comprehensive array of facility
        management solutions that strike the optimal balance between people,
        buildings and sustainability.
      </p>
      <p>
        Through the use of sustainable technology, Deyaar Facilities Management
        offers integrated facilities management solutions that are not only
        cost-effective, but add value to the core business of our clients and
        stakeholders.
      </p>
      <strong>Our Client-Centric Approach</strong>
      <p>
        With more than 12 years of experience, Deyaar Facilities Management is
        one of the most experienced and trusted facilities management companies
        in the UAE.
      </p>
      <p>
        At the forefront of our business is customer satisfaction and we offer
        exceptional customer service and optimum facilities management solutions
        adapted to the needs of our clients, every single time.
      </p>
      <strong>Our Superior Technology</strong>
      <p>
        Deyaar Facilities Management uses latest technology with a specific
        purpose: to make life easier for our clients, to enables us to respond
        to our customer’s needs swiftly and smartly, and helps us to meet our
        commitments to health, safety and sustainability.
      </p>
      <p>
        To enable our clients to contact us efficiently, we are developing a
        smart IT eco-system for customers to make service requests and track the
        progress in real time.
      </p>
      <p>
        We are easily accessible for customers and available 24/7 on our hotline
        number 800 339227 or via SMS.
      </p>
      <p>
        At the heart of our innovation is our Integrated Work Management System
        – a platform that maximises the conservation of time and resources,
        while minimising impact on the environment.
      </p>
      <strong>Our Sustainability Commitment</strong>
      <p>
        All of Deyaar Facilities Management’s operations center on
        sustainability. We plan, execute and measure effective systems that
        promote the health and safety of our employees and our clients, and
        respect the sanctity of the environment.
      </p>
      <p>
        As a company, we are committed to developing eco-friendly communities
        that prioritize a healthy environment and the overall safety and
        well-being of occupants. We do this by minimizing the use of hazardous
        products, and maximizing the deployment of solutions that conserve
        resources and reduce waste.
      </p>
      <Link to={"/services/service-request"}>
        <button>Service Request</button>
      </Link>
    </div>
  );
};

export default ComFacMan;
