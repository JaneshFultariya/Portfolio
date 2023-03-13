import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiAndroid,
  DiJenkins,
  DiAws
} from "react-icons/di";
import { 
  SiJava,
  SiFirebase,
  SiGnubash,
  SiAmazonaws,
  SiSpringboot,
  SiSpringsecurity,
  SiHtml5
} from "react-icons/si";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <SiJava/>,
          <DiPython />,
          <DiJavascript1 />,
          <DiNodejs />,
          <DiReact />,
          <DiMongodb />,
          <SiFirebase />,
          <SiGnubash/>,
          <DiAndroid />,
          <DiJenkins/>,
          <SiAmazonaws/>,
          <SiSpringboot/>,
          <SiSpringsecurity/>,
          <SiHtml5/>         
        ].map(tool => 
          <Col xs={4} md={2} className="tech-icons">
            {tool}
          </Col>)
      }
    </Row>
  );
}

export default Techstack;
