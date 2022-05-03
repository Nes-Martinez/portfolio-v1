import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Projects.scss";

import { BiSearchAlt2 } from "react-icons/bi";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    async function fetchAbout() {
      try {
        let data = await client.fetch(query);
        setProjects(data);
        console.log(data);
      } catch (error) {
        return error;
      }
    }
    fetchAbout();
  }, []);

  return (
    <div className="app__projects">
      <h2 className="section-header-text">Things I've Built</h2>

      <div className="app__projects-info-blocks">
        {projects.map((project, index) => (
          <div className="app__projects-block" key={project.title + index}>
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
                <div className="app__projects-icon-block">
                  {project.siteLink && (
                    <a href={project.siteLink} target="_blank" rel="noreferrer">
                      <BiSearchAlt2 />
                    </a>
                  )}
                </div>
              </LinksContainer>
              <img src={urlFor(project.imgUrl)} alt={project.title} />{" "}
            </ImageContainer>
            <h2 className="title-text">{project.title}</h2>
            <p className="description-text">{project.description}</p>
            {project.techStack && (
              <p className="description-text">{project.techStack.join(" ")}</p>
            )}
          </div>
        ))}
      </div>
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
