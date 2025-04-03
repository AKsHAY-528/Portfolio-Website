import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./experience.css";
import { FaBrain } from "react-icons/fa";
import { SiPytorch } from "react-icons/si";
import TrackVisibility from "react-on-screen";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="experience-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects and internships I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Internship Experience */}
          <Col md={4} className="experience-card">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeInUp" : ""}
                >
                  <div className="experience-icon">
                    <FaBrain className="experience-icon-style" />
                  </div>
                  <h3>AI Internship</h3>
                  <p>
                    Engineered a **97% accurate ResNet model** for fruit and vegetable 
                    classification, reducing validation loss to **0.4** and improving inventory tracking.
                  </p>
                  <a href="https://yourinternshiplink.com" target="_blank" rel="noopener noreferrer" className="experience-link">
                    View Details →
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* Project Experience */}
          <Col md={4} className="experience-card">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeInUp" : ""}
                >
                  <div className="experience-icon">
                    <SiPytorch className="experience-icon-style" />
                  </div>
                  <h3>Deep Learning Project</h3>
                  <p>
                    Developed an **AI-driven classification system** using **ResNet-50**,
                    Flask, and SQLite3 for real-time product recognition.
                  </p>
                  <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer" className="experience-link">
                    View Project →
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
