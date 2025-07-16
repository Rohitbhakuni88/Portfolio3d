import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// In your project, you would import these from your constants and assets files.
const interviewReadifyImg = "/path/to/interview-readify.png"; // Placeholder
const cpGuideImg = "/path/to/cp-guide.png"; // Placeholder
const aiDeploymentImg = "/path/to/ai-deployment.png"; // Placeholder
const systemDesignImg = "/path/to/system-design.png"; // Placeholder for new project
const newProject1Img = "/path/to/new-project-1.png"; // Placeholder for new project
const newProject2Img = "/path/to/new-project-2.png"; // Placeholder for new project

// --- SVG Icon for Live Demo ---
const LiveDemoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-1/2 h-1/2 object-contain"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.75A2.25 2.25 0 0115.75 4.5h1.5a2.25 2.25 0 012.25 2.25v1.5m-4.5 0h4.5"
    />
  </svg>
);


// Expanded projects data based on Rohit's resume and skills
const projects = [
  {
    name: "Interview Readify",
    description:
      "A full-stack platform designed to help users prepare for coding interviews. It features a real-time code editor and assessment engine, built on a robust backend with RESTful APIs that achieved 99.9% uptime and a 40% reduction in response times.",
    tags: [
      { name: "java", color: "text-blue-500" },
      { name: "springboot", color: "text-green-500" },
      { name: "restapi", color: "text-pink-500" },
      { name: "react", color: "text-blue-400" },
    ],
    // image: interviewReadifyImg,
    source_code_link: "https://github.com/Rohitbhakuni88",
    live_demo_link: "#", // Placeholder for live demo
  },
  {
    name: "CP Guide Platform",
    description:
      "A gamified frontend application built to make competitive programming more engaging. It uses React.js to create an interactive experience with points, badges, and leaderboards, which successfully increased weekly active users by 30%.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "javascript", color: "text-yellow-500" },
      { name: "gamification", color: "text-green-500" },
      { name: "ui/ux", color: "text-pink-500" },
    ],
    // image: cpGuideImg,
    source_code_link: "https://github.com/Rohitbhakuni88",
    live_demo_link: "#", // Placeholder for live demo
  },
  {
    name: "AI Model Deployment on Cloud",
    description:
      "A project from my AICTE internship focused on the practical application of MLOps. I engineered and deployed AI models on the IBM Cloud Platform, creating a full deployment pipeline and collaborating with an Agile team to build cloud-native applications.",
    tags: [
      { name: "ai/ml", color: "text-blue-500" },
      { name: "ibmcloud", color: "text-blue-400" },
      { name: "python", color: "text-green-500" },
      { name: "docker", color: "text-purple-500" },
    ],
    // image: aiDeploymentImg,
    source_code_link: "https://github.com/Rohitbhakuni88",
    live_demo_link: "#", // Placeholder for live demo
  },
  {
    name: "Microservices Architecture Design",
    description:
      "A system design project where I planned the architecture for a scalable e-commerce application. This involved creating High-Level (HLD) and Low-Level (LLD) designs, defining API gateways, and structuring services like user, product, and order management.",
    tags: [
      { name: "systemdesign", color: "text-red-500" },
      { name: "hld", color: "text-orange-500" },
      { name: "lld", color: "text-yellow-500" },
      { name: "microservices", color: "text-green-500" },
    ],
    // image: systemDesignImg,
    source_code_link: "https://github.com/Rohitbhakuni88",
    live_demo_link: "#", // Placeholder for live demo
  },
  {
    name: "New Project One",
    description:
      "This is a placeholder for a future project. You can edit this description to detail the project's goals, features, and the technologies used. It's a great spot to showcase another one of your impressive creations.",
    tags: [
      { name: "newtech", color: "text-blue-500" },
      { name: "coolfeature", color: "text-green-500" },
      { name: "development", color: "text-pink-500" },
    ],
    // image: newProject1Img,
    source_code_link: "https://github.com/Rohitbhakuni88",
    live_demo_link: "#", // Placeholder for live demo
  },
  {
    name: "New Project Two",
    description:
      "This is another placeholder for a future project. Use this space to describe the problem you solved, the architecture you designed, and the outcomes you achieved. Make sure to highlight your key skills.",
    tags: [
      { name: "anothertech", color: "text-yellow-500" },
      { name: "keyfeature", color: "text-purple-500" },
      { name: "deployment", color: "text-red-500" },
    ],
    // image: newProject2Img,
    source_code_link: "https://github.com/Rohitbhakuni88",
    live_demo_link: "#", // Placeholder for live demo
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {/* Live Demo Link */}
            <div
              onClick={() => window.open(live_demo_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <LiveDemoIcon />
            </div>
            {/* GitHub Link */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of the projects that I'm proud of. They showcase my ability to tackle real-world challenges, from designing scalable backend systems to creating engaging user interfaces. Each project is a testament to my passion for clean code, efficient architecture, and creating software that makes a difference. Please feel free to explore both the live demos and the source code.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {/*projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))*/}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
