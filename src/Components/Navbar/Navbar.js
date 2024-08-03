// src/Navbar.js
import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#home">Carvana Logo</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvas-navbar"
          onClick={() => setExpanded(!expanded)}
          className="navbar-toggler"
        />
        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="end"
          show={expanded}
          onHide={() => setExpanded(false)}
          className="custom-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas-navbar-label">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#bike" onClick={() => setExpanded(false)}>
                BIKE
              </Nav.Link>
              <Nav.Link href="#truck" onClick={() => setExpanded(false)}>
                TRUCK
              </Nav.Link>
              <Nav.Link href="#utv" onClick={() => setExpanded(false)}>
                UTV
              </Nav.Link>
              <Nav.Link href="#motorcycle" onClick={() => setExpanded(false)}>
                MOTORCYCLE
              </Nav.Link>
              <Nav.Link href="#motorsports" onClick={() => setExpanded(false)}>
                MOTORSPORTS
              </Nav.Link>
              <Nav.Link href="#snowmobile" onClick={() => setExpanded(false)}>
                SNOWMOBILE
              </Nav.Link>
              <Nav.Link href="#videos" onClick={() => setExpanded(false)}>
                VIDEOS
              </Nav.Link>
              <Nav.Link href="#shop-fox" onClick={() => setExpanded(false)}>
                SHOP CARVANA
              </Nav.Link>

              <div className={`extra-links ${expanded ? "show" : "hide"}`}>
                <Nav.Link href="#videos" onClick={() => setExpanded(false)}>
                  VIDEOS 
                </Nav.Link>
                <Nav.Link href="#stories" onClick={() => setExpanded(false)}>
                  STORIES
                </Nav.Link>
                <Nav.Link href="#academy" onClick={() => setExpanded(false)}>
                  ACADEMY
                </Nav.Link>
                <Nav.Link href="#tech-help" onClick={() => setExpanded(false)}>
                  TECH HELP
                </Nav.Link>
                <Nav.Link href="#service" onClick={() => setExpanded(false)}>
                  SERVICE
                </Nav.Link>
                <Nav.Link
                  href="#where-to-buy"
                  onClick={() => setExpanded(false)}
                >
                  WHERE TO BUY
                </Nav.Link>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
