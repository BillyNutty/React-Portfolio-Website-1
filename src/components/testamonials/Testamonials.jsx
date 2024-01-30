import React from "react";
import "./testamonials.css";
import AVT1 from "../../assets/coltsteele.jpg";
import AVT2 from "../../assets/angelayu.jpg";
import AVT3 from "../../assets/jonas.jpg";
import AVT4 from "../../assets/andrei.jpg";
import MERN from "../../assets/MERN.jpeg";
import react from "../../assets/React.jpg";
import Javascript from "../../assets/Javascript.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    image: MERN,
    name: "1/3",
    link: "https://www.udemy.com/user/coltsteele/",
  },
  {
    avatar: AVT1,
    image: react,
    name: "2/3",
    link: "https://www.udemy.com/user/coltsteele/",
  },
  {
    avatar: AVT3,
    image: Javascript,
    name: "3/3",
    link: "https://www.udemy.com/user/jonasschmedtmann/",
  },
];

const Testamonials = () => {
  return (
    <section id="testimonials">
      <h5>Completed Coursework</h5>
      <h2>Certifications</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
      >
        {data.map(({ avatar, image, name, link }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <div>
                <img className="image" src={image} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                <a href={link} target="_blank">
                  Course Instructor Info
                </a>
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testamonials;
