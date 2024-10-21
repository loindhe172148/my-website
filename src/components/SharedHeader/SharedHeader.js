import React from "react";
import "./SharedHeader.scss";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";

const SharedHeader = () => {
  return (
    <header className="shared-header">
      <Navbar expand="xl" className="styled-navbar">
        <Container>
          <Row className="w-100">
            <Col xl={4} xs={10}>
              <Navbar.Brand href="/" className="styled-navbar-brand">
                <img
                  src="/imgHome1/Main Logo.png"
                  alt="Logo"
                  className="styled-logo"
                />
              </Navbar.Brand>
            </Col>
            <Col xl={6} xs={2}>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="styled-navbar-toggle"
              />
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="styled-navbar-collapse"
              >
                <Nav className="me-auto main_menu">
                  <Nav.Link href="/home2" className="home1-link">
                    Home+
                  </Nav.Link>
                  <Nav.Link href="/about" className="home2-link">
                    About
                  </Nav.Link>
                  <Nav.Link href="/service" className="home3-link">
                    Service
                  </Nav.Link>

                  <Nav.Link href="/gallery" className="home4-link">
                    Gallery
                  </Nav.Link>
                  <Nav.Link href="/team" className="home5-link">
                    Team
                  </Nav.Link>
                  <Nav.Link href="/blog" className="home5-link">
                    Blog
                  </Nav.Link>
                  <Nav.Link href="/contact" className="home6-link">
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default SharedHeader;
