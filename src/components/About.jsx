import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants"; // Make sure this path is correct
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";

// This is the small component for each ball, just like you had.
const ServiceCard = ({ index, title, icon }) => (
  <div className='w-28 h-28'>
    <BallCanvas icon={icon} />
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate Software Development Engineer specializing in backend and full-stack development. 
        With strong expertise in Java, Spring Boot, and React.js, I create scalable web applications and 
        RESTful APIs. As a Computer Science student at NIET with hands-on experience in AI & Cloud technologies, 
        I'm dedicated to solving complex problems through clean code and efficient system design. 
        My competitive programming background with 900+ problems solved drives my analytical approach to development.
      </motion.p>

      {/* The technology balls, using your original structure */}
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");