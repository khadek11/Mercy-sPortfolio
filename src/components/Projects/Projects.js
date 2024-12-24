import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Admin from "../../Assets/Projects/AdminDashboard.png";
import Finance from "../../Assets/Projects/PersonalFinance.png"
import Economic from "../../Assets/Projects/EconomicWebsite.png";
import Tala from "../../Assets/Projects/Tala.png";
import { useTheme } from "../../ThemeContext";
function Projects() {
  const {isDark} = useTheme();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className={`${isDark ? "text-white" :  "text-black"} "overflow-hidden"`}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col  className="project-cardd">
            <ProjectCard
              imgPath={Finance}
              isBlog={false}
              title="The Personal Finance Dashboard"
              description="The Personal Finance Dashboard is a user-friendly, interactive tool designed for young adults and new graduates to manage their finances effectively. It combines sleek visuals and intuitive features to help users track their income, expenses, and savings goals with ease."
              ghLink="https://github.com/Kirai-Kevin/Personal-Finance-Dashboard.git"
             
            />
          </Col>

          <Col md={4} className="project-cardd">
            <ProjectCard
              imgPath={Economic}
              isBlog={false}
              title="Economic Website"
              description="A comprehensive platform designed to offer in-depth insights into economic trends, market data, and financial resources. The website features interactive tools, data visualizations, and expert analyses to help users make informed decisions and stay updated on the latest developments in the global economy. It serves as a reliable source for professionals, students, and enthusiasts interested in understanding economic patterns and their implications."
              ghLink="https://github.com/khadek11/Ecommerce-website"
            
            />
          </Col>

          <Col md={4} className="project-cardd">
            <ProjectCard
              imgPath={Admin}
              isBlog={false}
              title="Admin Dashboard"
              description="The Admin Dashboard for the economic website is a centralized hub for managing website content, user data, and analytics. It provides tools for monitoring activity, generating reports, and overseeing updates to ensure smooth operation and user engagement"
              ghLink="https://github.com/khadek11/Ecommerce-website/tree/main/adminClient"
                           
            />
          </Col>
          <Col md={4} className="project-cardd">
            <ProjectCard
              imgPath={Tala}
              isBlog={false}
              title="Tala Thrive"
              description="Tala Thrive is a web application designed to transform mental health care by connecting clients with therapists and coaches who share their cultural, linguistic, and religious backgrounds. The platform addresses the critical gap in accessibility to culturally competent mental health support, offering tailored services such as video call sessions and self-led programs.I was honored to be part of the team contributing towards its development alongside my teammates, collaborating to create a solution that makes mental health services more efficient and user-friendly."
              ghLink="https://github.com/karlwithak/TalaThriveWeb"
                           
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
