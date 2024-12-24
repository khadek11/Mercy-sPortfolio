import React, { useState } from "react";
import { useTheme } from '../ThemeContext'; 
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/code.jpg";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import {
 
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { Sun, Moon } from 'lucide-react';

import { Row } from "react-bootstrap";


function NavBar() {
  const { textColor, changeTextColor,  } = useTheme();

  

  
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColour ? "sticky" : "navbar"} ${isDark ? ' sticky' : 'text-black'}`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluidd logo" alt="brand" />
         
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item >
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className={`${isDark ? "text-white" : "text-black"}`}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className={`${isDark ? "text-white" : "text-black"}`}
              >
                <AiOutlineUser style={{ marginBottom: "2px"}} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className={`${isDark ? "text-white" : "text-black"}`}
                
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
                className={`${isDark ? "text-white" : "text-black"}`}
              >
                <IoIosContact style={{ marginBottom: "2px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>


            <Nav.Item className="fork-btn">
            <button
          onClick={toggleTheme}
          className="bottonToolkitTheme"
        >
          {isDark ? (
            <Sun className="h-3 w-5 buttonToolkitSun" />
          ) : (
            <Moon className="h-3 w-5 buttonToolkitMoon" />
          )}
            </button>
         </Nav.Item>

        
         <Nav.Item className="fork-btn">
        
       <Row className="colorRow">
       
       <div className="w-full max-w-md ">
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="color"
          value={textColor}
          onChange={(e) => changeTextColor(e.target.value)}
          className="w-8 h-8 customColor"
        />
      
      </label>
    </div>
       </Row>
     
         </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>


     
    </Navbar>
  );
}

export default NavBar;
