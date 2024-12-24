import React from "react";
import Card from "react-bootstrap/Card";
import { useTheme } from "../../ThemeContext";

function AboutCard() {
  const { isDark } = useTheme();

  return (
    <Card className="bg-transparent quote-card-view">
      <Card.Body className={`${isDark ? "text-white" : "text-black"} `}>
        <blockquote className=" none md:blockquote mb-0 p-0 md:p-[20px]">
          <p style={{ textAlign: "justify" }}>
            Hello, I am{" "}
            <span className="purple">
              Mercy Wanjiku Kariuki from Nairobi, Kenya.{" "}
            </span>
            <br />
            I’m currently an intern at DirectedDevelopment, where I’m honing my
            skills as a MERN Stack Developer by building dynamic and scalable
            web applications.
            <br />
            Alongside my professional journey, I’m pursuing a Bachelor’s Degree
            in Engineering at the University of Nairobi, driven by my passion
            for solving problems through technology.
            <br />
            <br />
            Beyond coding, I enjoy exploring new ideas and engaging in
            activities that fuel my creativity and curiosity.
            <br />
            Let’s connect and build something impactful together!
          </p>

          <p className="purple">
            "The best way to predict the future is to create it."{" "}
          </p>
          <footer className="blockquote-footer">Peter Drucker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
