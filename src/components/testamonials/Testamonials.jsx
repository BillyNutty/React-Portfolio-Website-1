import React from "react";
import "./testamonials.css";
import AVT1 from "../../assets/coltsteele.jpg";
import AVT2 from "../../assets/angelayu.jpg";
import AVT3 from "../../assets/jonas.jpg";
import AVT4 from "../../assets/andrei.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Colt Steele",
    link: "https://www.udemy.com/user/coltsteele/",
  },
  {
    avatar: AVT2,
    name: "Angela Yu",
    link: "https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/",
  },
  {
    avatar: AVT3,
    name: "Jonas Schmedtmann",
    link: "https://www.udemy.com/user/jonasschmedtmann/",
  },
  {
    avatar: AVT4,
    name: "Andrei Neagoie",
    link: "https://zerotomastery.io/about/instructor/andrei-neagoie/",
  },
];

const Testamonials = () => {
  return (
    <section id="testimonials">
      <h5>Credit To My Instructors</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
      >
        {data.map(({ avatar, name, link }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                <a href={link} target="_blank">
                  About Info
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
