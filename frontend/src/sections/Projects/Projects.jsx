import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styled from "styled-components";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";

import { BiSearchAlt2 } from "react-icons/bi";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "projects"]';

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
    <div className="app__projects app__flex">
      <h2 className="section-header-text">Things I've Built</h2>

      <div className="app__projects-filters">
        {["React", "E-Commerce", "Database", "All"].map((item, index) => (
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

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__projects-info-blocks"
      >
        {filteredProjects.map((project, index) => (
          <div className="app__projects-block app__flex" key={index}>
            <ImageContainer>
              <LinksContainer>
                <div className="app__projects-icon-block">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BiSearchAlt2 />
                    </a>
                  )}
                </div>
              </LinksContainer>

              <img src={urlFor(project.imgUrl)} alt={project.name} />
            </ImageContainer>

            <div className="app__projects-block-content app__flex">
              <h4>{project.title}</h4>
              <p className="description-text">{project.description}</p>
              {project.techStack && (
                <p className="description-text">
                  {project.techStack.join(" ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Projects, "projects");

const LinksContainer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const ImageContainer = styled.div`
  font-size: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;

  &:hover ${LinksContainer} {
    opacity: 1;
  }
`;
