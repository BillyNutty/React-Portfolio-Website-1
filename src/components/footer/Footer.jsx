import React from "react";
import "./footer.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo"></a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Certifications</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__icons">
        <FaLaptopCode />
        <div className="copyright">
          <strong>William Notturno | Portfolio</strong> 2024
        </div>
        <FaReact />
      </div>
    </footer>
  );
};

export default Footer;
