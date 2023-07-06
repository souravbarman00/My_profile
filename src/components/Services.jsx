import React from "react";
import { motion } from "framer-motion";
// import { BiLogoReact, MdOutlineFindInPage, BiLogoNodejs } from "react-icons/fa";
import {SiAdobeillustrator,SiReact} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa6";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>2+</h3>
          <p>Years Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <SiReact />
          <span>React Devloper</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <SiAdobeillustrator />
          <span>Data Analyst</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <FaNodeJs />
          <span>Backend Developer</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
