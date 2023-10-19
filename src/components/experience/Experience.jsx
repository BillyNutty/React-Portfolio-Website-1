import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">HTML</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">CSS</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">Javascript</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">React JS</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">Bootstrap</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">Node JS</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">Express JS</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">Mongo DB</h4>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4 className="exp-list">Mongoose JS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;