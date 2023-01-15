import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../header/header.styles.css';

function Header() {
  return (
    <Container className="header__container">
      <Row className="header__container-row">
        <Col>
          <h3 className="header__container-title">Johan's Weather Update Application</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
