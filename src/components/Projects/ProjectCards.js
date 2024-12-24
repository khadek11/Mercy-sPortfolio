import React , { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTheme } from "../../ThemeContext";
function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDark } = useTheme();
  
  // Function to truncate text to roughly 3 lines (assuming average of 50 chars per line)
  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(' ', maxLength)) + '...';
  };

  return (
    <Card  className="bg-transparent project-card-vieww ">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-image"/>
      <Card.Body  className={`${isDark ? "text-white" :  "text-black"} "project-heading"`}>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {isExpanded ? props.description : truncateText(props.description)}
          {props.description.length > 150 && (
            <Button
              variant="link"
              className="p-0 ms-1 textbuttonn"
              style={{ color: 'red' }}  
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          )}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub className="inline-block"/> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
