import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/aboutmore.jpg";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{ paddingTop: "110px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
            <img src={laptopImg} alt="about" className="img-fluiddd hidden lg:block w-full" />
            </Tilt>
           
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center", 
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            <strong className="purple">Know Who I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
         
        </Row>
        <h1 className="project-heading">
       <strong className="purple">Full Stack Web Development Expertise </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading mt-5">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
