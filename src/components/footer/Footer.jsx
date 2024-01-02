import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTelegram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ALSHRV
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/alshrv"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Alshrv" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://t.me/AbrorAlisherov">
          <FaTelegramPlane />
        </a>
        <a href="https://t.me/Alshrv" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ALSHRV.UZ All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
