import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
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
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              true
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you might
          have. we have amazing skills. CALL US!!
        </motion.p>
        <motion.button variants={fade}>Contact US</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

export default AboutSection;
