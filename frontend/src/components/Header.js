import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container className="!ml-[12rem]">
          <LinkContainer to={"/"}>
            <Navbar.Brand>SMART-SOS health monitor</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
