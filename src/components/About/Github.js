import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "20px" }} className="mt-[20px]">
      <h1 className="project-headingg text-2xl mt-[20px] md:text-4xl " style={{ paddingBottom: "20px" }}>
        How i have utilised my <strong className="purple">One year Coding Experience</strong>
      </h1>
      <GitHubCalendar
        username="khadek11"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={18}
      />
    </Row>
  );
}

export default Github;
