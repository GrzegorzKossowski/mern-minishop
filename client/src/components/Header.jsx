import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

/**
 *
 * @param {object} props
 */
const Header = (props) => {
  return (
    <Navbar bg='light' expand='md' collapseOnSelect>
      <LinkContainer to={"/"}>
        <Navbar.Brand>Mini-Shop</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <LinkContainer to={"/#store"}>
            <Nav.Link>Store</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/#about"}>
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/#magazine"}>
            <Nav.Link>Magazine</Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/#contact"}>
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className='ml-auto'>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Nav.Item>
              <Nav.Link>
                <i className='fas fa-search'></i>
              </Nav.Link>
            </Nav.Item>
          </Form>
          <LinkContainer to={"/#cart"}>
            <Nav.Link>
              <i className='fas fa-shopping-cart'></i>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={"/#profile"}>
            <Nav.Link>
              <i className='far fa-user'></i>
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
