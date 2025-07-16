import React from "react";
import { fadeIn } from "../utils/motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Journey.
        </h2>
      </motion.div>
      <motion.div 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-8 flex flex-wrap justify-center gap-8 mb-12"
      >
        <div className="text-center p-4 bg-tertiary rounded-lg w-40">
          <div className="text-4xl font-bold text-[#915EFF]">800+</div>
          <div className="text-secondary text-sm mt-1">Problems Solved</div>
          <div className="text-xs text-gray-400">Across Platforms</div>
        </div>
        <div className="text-center p-4 bg-tertiary rounded-lg w-40">
          <div className="text-4xl font-bold text-[#915EFF]">1500+</div>
          <div className="text-secondary text-sm mt-1">LeetCode Rating</div>
          <div className="text-xs text-gray-400">Contest Rating</div>
        </div>
        <div className="text-center p-4 bg-tertiary rounded-lg w-40">
          <div className="text-4xl font-bold text-[#915EFF]">Top 5%</div>
          <div className="text-secondary text-sm mt-1">Contest Rank</div>
          <div className="text-xs text-gray-400">CodeChef</div>
        </div>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
