import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UX/IX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborate With Designers</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Boost Brand Reputation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Improve Accessability</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimized For Mobile</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create Modern UI</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Debugging / Troubleshooting</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Updates / Maintenance</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>DRY principles</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analyze Trends / Keywords</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Intuitive Designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive Content</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Identify Target Needs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
