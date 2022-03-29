<<<<<<< HEAD
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoNC from '/img/logo_NCinema.png';
=======
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoNC from "../../../public/img/logo_NCinema.png";
>>>>>>> 4983ef989023d29356c7e20e3b92229f6fc37b1f

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="img-fluid">
          <img src={LogoNC} alt="logo" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#promociones">Promociones</Nav.Link>
            <Nav.Link href="#candy">Candy</Nav.Link>
            <NavDropdown title="Películas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Categoría 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Categoría 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Categoría 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todas las categorías
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
