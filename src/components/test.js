import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/code.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { IoIosColorPalette } from "react-icons/io";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { Sun, Moon } from "lucide-react";

import { CgFileDocument } from "react-icons/cg";
const ColorButton = () => {
  const { textColor, changeTextColor, isColorMenuOpen, toggleColorMenu } =
    useTheme();

  const colors = [
    { name: "Purple", value: "#3a0250" },
    { name: "Red", value: "#FF0000" },
    { name: "Gold", value: "#FFD700" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Blue", value: "#0000FF" },
    { name: "Green", value: "#008000" },
  ];

  return (
    <div className="relative">
      <Button
        onClick={toggleColorMenu}
        className=" rounded-md bg-gray-100 hover:bg-gray-200 flex items-center gap-2"
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{ backgroundColor: textColor }}
        />
        <span>
          <IoIosColorPalette />
        </span>
      </Button>

      {isColorMenuOpen && (
        <div className="">
          <div className="p-2 flex">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => changeTextColor(color.value)}
                className=" "
              >
                <div
                  className=""
                  style={{ backgroundColor: color.value }}
                ></div>
                <span className="">{color.name}</span>
              </button>
            ))}
            <div className="col-span-2 p-2 border-t">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => changeTextColor(e.target.value)}
                  className="w-8 h-8"
                />
                <span>Custom Color</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function NavBar() {
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
      className={`${navColour ? "sticky" : "navbar"} ${isDark ? " sticky" : "text-black"}`}
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
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                className={`${isDark ? "text-white" : "text-black"}`}
              >
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
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
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
                to="/resume"
                onClick={() => updateExpanded(false)}
                className={`${isDark ? "text-white" : "text-black"}`}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark
                    ? "bg-gray-700 text-yellow-400"
                    : "bg-gray-100 text-gray-800"
                } hover:scale-110`}
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <ColorButton />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
