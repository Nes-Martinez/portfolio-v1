import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, AnimationWrap } from "../../wrapper";
import { client } from "../../client";
import "./Projects.scss";

import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "projects"] | order(title)';

    async function fetchProjects() {
      try {
        let data = await client.fetch(query);
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        return error;
      }
    }
    fetchProjects();
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.tags.includes(item))
        );
      }
    }, 200);
  };

  return (
    <>
      <h2 className="section-header-text">Things I've Built</h2>
      <div className="app__projects-filters">
        {["All", "Wordpress", "React", "Database"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__projects-filter p-text ${
              activeFilter === item ? "filter-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="app__projects-info-blocks-container">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__projects-info-blocks"
        >
          {filteredProjects.map((project, index) => (
            <div className="app__projects-block" key={index}>
              <div className="app__projects-block-content">
                <div className="app__projects-icon-block">
                  <a href={project.siteLink} target="_blank" rel="noreferrer">
                    <BiLinkExternal />
                  </a>
                  <a
                    className="app__projects-link"
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsGithub />
                  </a>
                </div>
                <p className="title-text">{project.title}</p>
                <p className="description-text">{project.description}</p>
                {project.techStack && (
                  <p className="tech-text">
                    Built with: <br />
                    {project.techStack.join(", ")}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(AnimationWrap(Projects, "app__projects"), "projects");
