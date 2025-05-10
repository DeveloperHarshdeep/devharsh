import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import education from "../constants/index"; // Ensure this file exists

const EducationCard = ({ year, level, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", 0.3, 0.75)}
    className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
  >
    <h3 className="text-white font-bold text-[20px]">{year} — {level}</h3>
    <p className="mt-2 text-secondary text-[14px]">{description}</p>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Journey</p>
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This section highlights my academic journey from middle school to senior secondary education. It showcases how I developed foundational knowledge and gradually built interest in technology and the humanities.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {education.map((edu, index) => (
          <EducationCard key={`edu-${index}`} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
