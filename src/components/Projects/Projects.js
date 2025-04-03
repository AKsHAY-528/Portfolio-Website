import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "./Projects.css";
import { FaReact, FaJava } from "react-icons/fa";

import { SiPytorch, SiSpringboot } from "react-icons/si";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaReact className="project-icon" />}
              title="Portfolio Website (React & JS)"
              description="A personal portfolio website built using React.js to showcase my projects and skills."
              ghLink="https://github.com/AKsHAY-528/Portfolio-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<SiPytorch className="project-icon" />}
              title="Computer Vision (ML & Deep Learning)"
              description="A computer vision project using deep learning techniques to classify images."
              ghLink="https://github.com/AKsHAY-528/Computer-Vision"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaJava className="project-icon" />}
              title="Password Generator (Java)"
              description="A Java-based password generator with customizable options for security."
              ghLink="https://github.com/AKsHAY-528/Password-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaJava className="project-icon" />}
              title="Memory Card Game (Java)"
              description="A fun memory card game built using Java, featuring a timer and error tracking."
              ghLink="https://github.com/AKsHAY-528/Memory-Card-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<FaJava className="project-icon" />}
              title="Morse Code Translator (Java)"
              description="A Java application to convert text to Morse code and vice versa."
              ghLink="https://github.com/AKsHAY-528/Morse-Code-Translator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<SiSpringboot className="project-icon" />}
              title="PacMan Clone (Java)"
              description="A Java-based Pac-Man clone with smooth animations and collision detection."
              ghLink="https://github.com/AKsHAY-528/Pac-Man-Java-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
