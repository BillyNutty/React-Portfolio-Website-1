import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/william-notturno-317410254/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/BillyNutty" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
