import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaJava } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AKSHAY SHARMA TR</strong>
              </h1>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>

          {/* Job Role Cards */}
          <Row className="job-role-container">
            <Col md={3}>
              <div className="job-role-card">
                <FaJava className="job-icon" color="#FF8000" />
                <span className="job-title">Java Developer</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="job-role-card">
                <SiJavascript className="job-icon" color="#FFD700" />
                <span className="job-title">Full Stack Web Developer</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="job-role-card">
                <FaLaptopCode className="job-icon" color="#9B59B6" />
                <span className="job-title">Software Engineer</span>
              </div>
            </Col>
            <Col md={3}>
              <div className="job-role-card">
                <FaBrain className="job-icon" color="#3498DB" />
                <span className="job-title">AI/ML Enthusiast</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
