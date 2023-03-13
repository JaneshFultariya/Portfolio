import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiDocker,
  SiGit,
  SiIntellijidea,
  SiMacos
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <SiWindows/>,
          <SiMacos />,
          <SiGit/>,
          <SiVisualstudiocode/>,
          <SiDocker/>,
          <SiIntellijidea/>
        ].map(tool => 
            <Col xs={4} md={2} className="tech-icons">
              {tool}
          </Col>)
      }
    </Row>
  );
}

export default Toolstack;
