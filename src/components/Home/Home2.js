import React from "react";
import { useTheme } from "../../ThemeContext";
import { Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Type from "./Type";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Kariuki Mercy Wanjiku Resume.pdf";

function Home2() {
  const { isDark } = useTheme();

  return (
    <div fluid className="home-about-section ml-0" id="about">
      <div>
        <Row>
          <Col md={8} className={`${isDark ? "text-white" :  "text-black"} "home-about-description"`}>
          <Row>
            <Col md={11}>  
              <h1 style={{ fontSize: "2.0em", fontWeight: "bolder" }}>
              Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
            </h1>
            </Col>
            <Col>
            <h1 className="heading-name">
                I'M
                <strong className="main-name">Mercy Kariuki.</strong>
                
              </h1>
              </Col>
            </Row>
          
          
            <p className="home-about-body">
           I am a full-stack developer with a strong interest in creating practical, user-friendly applications. I also identify myself as a    <Type className="sm:text-2xl"/> <br/><b  className="purple mt:[0px]">I enjoy working with technologies like the MERN stack, TypeScript, and CSS</b> to bring ideas to life. I’m always eager to learn and improve, whether it’s through experimenting with new tools or collaborating with others to solve challenges. I believe in building software that’s not only functional but also meaningful to its users. Let’s connect if you’re looking for a developer who’s hardworking, curious, and passionate about technology!
           </p>
           <Button className="hire">
            <Link to='/contact' className="learn">  Hire Me</Link>
          
           </Button>
           <Button className="hire">
            <Link to="/about" className="learn">Learn More About Me</Link>
         
           </Button>
           <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="hire"
          >
            <AiOutlineDownload className="inline-block" />
            &nbsp;Download CV
          </Button>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluidd" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className={`${isDark ? "text-white" :  "text-black"} "home-about-social"`}>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/khadek11/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub className="inline-block" />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mercy-k-5b35202a7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn className="inline-block"/>
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Home2;
