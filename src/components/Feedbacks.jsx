import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Testimonials data based on Rohit's background and achievements
const testimonials = [
  {
    testimonial:
      "Rohit demonstrated exceptional problem-solving skills and technical expertise during his internship. His ability to work with AI models and cloud platforms was impressive, and he consistently delivered quality work using Agile methodologies.",
    name: "AICTE Mentor",
    designation: "Technical Lead",
    company: "AICTE-Edunet",
    image: "https://placehold.co/100x100/383E56/FFFFFF?text=AM",
  },
  {
    testimonial:
      "Working with Rohit on the Interview Readify project was a great experience. He successfully implemented RESTful APIs with 99.9% uptime and optimized our system for 40% faster response times. His backend development skills are outstanding.",
    name: "Project Collaborator",
    designation: "Senior Developer",
    company: "Interview Readify Team",
    image: "https://placehold.co/100x100/E6DEDD/000000?text=PC",
  },
  {
    testimonial:
      "Rohit's competitive programming skills really shine through in his development work. His analytical approach and strong foundation in data structures and algorithms make him a valuable team member. The 30% user engagement increase on our platform speaks volumes.",
    name: "Team Lead",
    designation: "Frontend Architect",
    company: "CP Guide Platform",
    image: "https://placehold.co/100x100/383E56/FFFFFF?text=TL",
  },
  {
    testimonial:
      "As a Computer Science student, Rohit stands out with his practical skills and dedication. His 1500+ LeetCode rating and consistent performance in coding contests demonstrate his commitment to excellence in software development.",
    name: "Faculty Member",
    designation: "Professor",
    company: "NIET",
    image: "https://placehold.co/100x100/E6DEDD/000000?text=FM",
  },
];

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        
        {/* Achievement Highlights */}
        <motion.div 
          variants={fadeIn("up", "", 0.2, 1)}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#915EFF] mb-2">99.9%</div>
            <div className="text-white text-sm">System Uptime</div>
            <div className="text-secondary text-xs">Interview Readify Platform</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#915EFF] mb-2">40%</div>
            <div className="text-white text-sm">Performance Improvement</div>
            <div className="text-secondary text-xs">Response Time Optimization</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#915EFF] mb-2">30%</div>
            <div className="text-white text-sm">User Engagement</div>
            <div className="text-secondary text-xs">CP Guide Platform Growth</div>
          </div>
        </motion.div>

        {/* Competitive Programming Stats */}
        <motion.div 
          variants={fadeIn("up", "", 0.3, 1)}
          className="mt-8 bg-black-200 rounded-xl p-6"
        >
          <h3 className="text-white text-lg font-bold mb-4 text-center">Competitive Programming Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#915EFF]">1500+</div>
              <div className="text-white text-sm">LeetCode Rating</div>
              <div className="text-secondary text-xs">100+ Problems Solved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#915EFF]">2★</div>
              <div className="text-white text-sm">CodeChef Rating</div>
              <div className="text-secondary text-xs">500+ Problems Solved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#915EFF]">Top 200</div>
              <div className="text-white text-sm">Contest Ranking</div>
              <div className="text-secondary text-xs">Among Thousands</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
