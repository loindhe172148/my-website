import React from 'react';
import './HeaderHome1.scss';
import { Navbar, Nav, Container,Col,Row } from "react-bootstrap";

const HeaderHome1 = () => {
  return (
    <header className="header-home1">
<>
  <div className="slider">
  <Navbar expand="lg" className="styled-navbar">
  <Container>
    <Row className="w-100">
      <Col lg={4} xs={10}>
        <Navbar.Brand href="/" className="styled-navbar-brand">
          <img src="/imgHome1/Main Logo.png" alt="Logo" className="styled-logo" />
        </Navbar.Brand>
      </Col>
      <Col lg={6} xs={2}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="styled-navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav" className="styled-navbar-collapse">
          <Nav className="me-auto main_menu">
            <Nav.Link href="/home2" className="home1-link">Home+</Nav.Link>
            <Nav.Link href="/about" className="home2-link">About</Nav.Link>
            <Nav.Link href="/service" className="home3-link">Service</Nav.Link>
            <Nav.Link href="/gallery" className="home4-link">Gallery</Nav.Link>
            <Nav.Link href="/blog" className="home5-link">Blog</Nav.Link>
            <Nav.Link href="/contact" className="home6-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Col>
    </Row>
  </Container>
</Navbar>

    {/* Main Header */}
    <div className="main-header">
          <div className="header-left ">
            <h1 className="clinic-heading">Clinic & beauty<br /> consultant</h1>
            <p className="note-clinic">
              It is a long established fact that a reader will be <br />
              by the readable content of a page.
            </p>
            <a href="#MoreDetails" className="more-detail-link">More Details</a>
          </div>
          <div className="header-right">
            <img className="img-fluid anh2 clinic-image" src="/imgHome1/Frame 1.png" alt="Clinic frame" />
          </div>
        </div>
    </div>
  <div id="sliderbt" className="slider-button">
    <img className="img-fluid" src="/imgHome1/Slide Button.png" alt="Slider button" />
  </div>
</>
    </header>
  );
};

export default HeaderHome1;
