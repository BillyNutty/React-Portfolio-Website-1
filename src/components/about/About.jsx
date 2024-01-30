import React from "react";
import "./about.css";
import ME2 from "../../assets/william2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certifications</h5>
              <small>Full-Stack(MERN), React JS, Javascript ES6</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Online Resources</h5>
              <small>Udemy, FreeCodeCamp, StackOverflow, MDN, Mimo</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                Business, Games, Quizzes, Entertainment, E-Commerce, etc.
              </small>
            </article>
          </div>

          <p>
            I am a Web Developer familiar with modern languages, frameworks, and
            design priciples. I am passionate about creating visually appealing
            web applications which are both responsive and dynamic as well as
            fixing bugs and implementing enhancements to improve the user
            experience.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
