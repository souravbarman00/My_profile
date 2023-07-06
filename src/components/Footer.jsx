import React from "react";
import myimage from "../assets/IMG_8900.JPG";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={myimage}
          alt="Founder"
        />

        <h2>Sourav Jyoti Barman</h2>
        <p>Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/sauravbarman" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/sauravbarman00" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
