import React , { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useTheme } from "../ThemeContext";
import logo from "../Assets/code.jpg";
import { Sun, Moon } from "lucide-react";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";


export default function NavBar() {
  const { textColor, changeTextColor } = useTheme();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  return(
    <>
  
  <Navbar 
      expanded={expand}
      fixed="top"
      expand="md"
      className={`w-full ${navColour ? "sticky" : "navbar"} ${
        isDark ? " sticky" : "text-black"
      }`}>
        <div className="hidden md:block w-full">
        <div className="navwrapp pr-[20px] pl-[10px] ">
          <div>
          <img src={logo} className="img-fluidd logo w-[40px] h-[40px] rounded-full" alt="brand" />
          </div>
            <div className="flex gap-[20px]">
            <Nav  defaultActiveKey="#home" className="gap-[20px] flex">
              <Nav.Item>
                <Nav.Link  
                 as={Link}
                 to="/"
                 onClick={() => updateExpanded(false)}
                 className={`flex items-center space-x-2 ${
                   isDark ? "text-white" : "text-black"
                 } navLinkHome`}
                >
                <AiOutlineHome style={{}} className="inline-block" />
                <span>Home</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className={`${isDark ? "text-white" : "text-black"}`}
              >
                <AiOutlineUser
                  style={{ marginBottom: "2px" }}
                  className="inline-block"
                />{" "}
                About
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
                  className="inline-block"
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
                <IoIosContact
                  style={{ marginBottom: "2px" }}
                  className="inline-block"
                />{" "}
                Contact Me
              </Nav.Link>
            </Nav.Item>

            </Nav>
            <div className="flex gap-4 ">
              <div className="w-full max-w-md  ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => changeTextColor(e.target.value)}
                    className="w-8 h-8 customColor"
                  />
                </label>
              </div>
              <button
                onClick={toggleTheme}
                className=" inline-block"
              >
                {isDark ? (
                  <Sun className="h-[30px] w-[30px] buttonToolkitSun inline-block" />
                ) : (
                  <Moon className="h-[25px] w-[25px] buttonToolkitMoon inline-block" />
                )}
              </button> 
             
          </div> 
            </div>
       </div>
       
        </div>

        <div className="block md:hidden w-full">
        <div className="navwrapp mx-2 block lg:hidden ">
          <div>
          <img src={logo} className="img-fluidd logo w-[40px] h-[40px] rounded-full" alt="brand" />
          </div>
          <div className="flex gap-3 ">
              <div className="w-full max-w-md  ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => changeTextColor(e.target.value)}
                    className="w-8 h-8 customColor"
                  />
                </label>
              </div>
              <button
                onClick={toggleTheme}
                className=" inline-block"
              >
                {isDark ? (
                  <Sun className="h-[30px] w-[30px] buttonToolkitSun inline-block" />
                ) : (
                  <Moon className="h-[25px] w-[25px] buttonToolkitMoon inline-block" />
                )}
              </button> 
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav mr-[0px] relative"
                onClick={() => {
                  updateExpanded(!expand);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>
            
          </div>
        </div>
        {expand && (
      <nav className={`mt-4 absolute  ml-[250px] mr-[20px] pr-[10px] w-[150px] pl-[0px] rounded-lg ${isDark ? "bg-[#947ba0]" : "bg-[#947ba0] "}`}>
        <ul className={`flex flex-col gap-4 `}>
          <li>
            <Link to="/" className={`ml-[0px] ${isDark ? "text-white" : "text-black "} ${location.pathname === "/" ? "text-blue-500" : ""}`}
            onClick={() => updateExpanded(false)}>
              <AiOutlineHome className="inline mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`${isDark ? "text-white" : "text-black"} ${location.pathname === "/about" ? "text-blue-500" : ""}`} onClick={() => updateExpanded(false)}>
              <AiOutlineUser className="inline mr-2" /> About
            </Link>
          </li>
          <li>
            <Link to="/project" className={`${isDark ? "text-white" : "text-black"} ${location.pathname === "/project" ? "text-blue-500" : ""}`} onClick={() => updateExpanded(false)}>
              <AiOutlineFundProjectionScreen className="inline mr-2" /> Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${isDark ? "text-white" : "text-black"} ${location.pathname === "/contact" ? "text-blue-500" : ""}`} onClick={() => updateExpanded(false)}>
              <IoIosContact className="inline mr-2" /> Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    )}
        </div>
   
    
        
    </Navbar>  
    

  
    </>
  )
  
  }