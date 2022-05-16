import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, AnimationWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const yearsQuery = '*[_type == "years"] | order(year desc)';

    async function fetchSkills() {
      try {
        let skillsData = await client.fetch(skillsQuery);
        setSkills(skillsData);

        let yearsData = await client.fetch(yearsQuery);
        setYears(yearsData);

        console.log("Years", yearsData);
      } catch (error) {
        return error;
      }
    }
    fetchSkills();
  }, []);

  return (
    <div className="app__skills app__flex">
      <h2 className="section-header-text">Skills &amp; Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-single app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="skill-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-years">
          {years.map((year) => (
            <motion.div className="app__skills-single-year" key={year.year}>
              <div className="app__skills-single-year-text">
                <p className="bold-text">{year.year}</p>
              </div>
              <motion.div className="app__skills-jobs">
                {year.jobs.map((job) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-single-job"
                    data-tip
                    data-for={job.name}
                    key={job.name}
                  >
                    <h4 className="job-title-text">{job.name}</h4>
                    <p className="loc-text">{job.company}</p>
                    <p className="job-desc-text">{job.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <h5>
        Find my full work history in my{" "}
        <a
          href="/NM-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fancy-link"
        >
          resume
        </a>
        .
      </h5>
    </div>
  );
};

export default AppWrap(AnimationWrap(Skills, "app__skills"), "skills");
