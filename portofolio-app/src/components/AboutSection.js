import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";

import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const AboutSection = () => {
  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };
  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <StyledHide>
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              We work to make
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true</h2>
          </StyledHide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you might
          have. we have amazing skills. CALL US!!
        </p>
        <button>Contact US</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
