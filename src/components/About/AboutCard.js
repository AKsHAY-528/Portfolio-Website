import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Akshay Sharma TR </span>
            from <span className="purple">Karnataka, India.</span>
            <br />
            I am a final-year Student ,  <span className="purple">Java Developer</span> passionate about building scalable software solutions.
            <br />
            <br />
            I have a strong foundation in <span className="purple">Java, Python,</span> and full-stack development,
            with hands-on experience in <span className="purple">machine learning, web development,</span> and problem-solving.
            <br />
            <br />
            Proven ability to develop high-accuracy models, optimize system performance, and collaborate in fast-paced environments.
            <br />
            <br />
            Currently seeking an entry-level <span className="purple">software development</span> role to contribute technical expertise and drive innovation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Gmaes
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, learn with passion, and build to inspire."
          </p>
          <footer className="blockquote-footer">Akshay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
