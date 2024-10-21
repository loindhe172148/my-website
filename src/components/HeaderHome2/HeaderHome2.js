import React from "react";
import "./HeaderHome2.scss";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";

const HeaderHome2 = () => {
  return (
    <header className="header-home2">
      <>
        <div className="slider2">
          <Navbar expand="lg" className="styled-navbar2">
            <Container>
              <Row className="w-100">
                <Col lg={3} xs={10}>
                  <Navbar.Brand href="/" className="styled-navbar-brand2">
                    <img
                      src="/imgHome2/Main Logo (1).png"
                      alt="Logo"
                      className="styled-logo2"
                    />
                  </Navbar.Brand>
                </Col>
                <Col lg={5} xs={2}>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="styled-navbar-toggle2"
                  />
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="styled-navbar-collapse2"
                  >
                    <Nav className="me-auto main_menu">
                      <Nav.Link href="/home2" className="home1-link2">
                        Home+
                      </Nav.Link>
                      <Nav.Link href="/about" className="home2-link2">
                        About
                      </Nav.Link>
                      <Nav.Link href="/service" className="home3-link2">
                        Service
                      </Nav.Link>
                      <Nav.Link href="/gallery" className="home4-link2">
                        Gallery
                      </Nav.Link>
                      <Nav.Link href="/team" className="home5-link2">
                        Team
                      </Nav.Link>
                      <Nav.Link href="/blog" className="home5-link2">
                        Blog
                      </Nav.Link>
                      <Nav.Link href="/contact" className="home6-link2">
                        Contact
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
              </Row>
            </Container>
          </Navbar>

          {/* Main Header */}
          <div className="main-header2">
            <div className="header-left2 ">
              <h1 className="clinic-heading2">
                Your beauty center
                <br /> place
              </h1>
              <p className="note-clinic2">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br /> elit. Commodo, massa pellentesque arcu fusce et <br />
                magna consequat neque vitae lobortis.
              </p>
              <img
                className=""
                src="/imgHome2/More Details Button.png"
                alt="imagea"
              ></img>
            </div>
            <div className="header-right2">
              <img
                className="img-fluid anh2 clinic-image"
                src="/imgHome2/Play Button.png"
                alt="Clinic frame"
              />
            </div>
          </div>
        </div>
      </>
    </header>
  );
};

export default HeaderHome2;
