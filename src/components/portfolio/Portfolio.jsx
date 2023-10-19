import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/hangman.jpg";
import IMG2 from "../../assets/tindog.jpg";
import IMG3 from "../../assets/quiz.jpg";
import IMG4 from "../../assets/robojoker.jpg";
import IMG5 from "../../assets/paint.jpg";
import IMG6 from "../../assets/candy.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Hangman (Desktop)",
    github: "https://github.com/BillyNutty/Hangman",
    demo: "https://billynutty.github.io/Hangman/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Tindog",
    github: "https://github.com/BillyNutty/Tinder-Dog",
    demo: "https://billynutty.github.io/Tinder-Dog/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Quiz",
    github: "https://github.com/BillyNutty/Quiz-App",
    demo: "https://billynutty.github.io/Quiz-App/",
  },
  {
    id: 4,
    image: IMG4,
    title: "RoboJoker",
    github: "https://github.com/BillyNutty/Joke-Teller",
    demo: "https://billynutty.github.io/Joke-Teller/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Paint (Desktop)",
    github: "https://github.com/BillyNutty/paint-clone",
    demo: "https://billynutty.github.io/paint-clone/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Candy Museum",
    github: "https://github.com/BillyNutty/museum-of-candy",
    demo: "https://billynutty.github.io/museum-of-candy/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
