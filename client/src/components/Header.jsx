import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// temporary imports to refactor
import axios from "axios";

/**
 *
 * @param {object} props
 */
const Header = (props) => {
  return (
    <Navbar bg='light' expand='md' collapseOnSelect>
      <Navbar.Brand href='#home'>Mini-Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Store</Nav.Link>
          <Nav.Link href='#link'>About</Nav.Link>
          <Nav.Link href='#link'>Magazine</Nav.Link>
          <Nav.Link href='#link'>Contact</Nav.Link>
        </Nav>
        <Nav className='ml-auto'>
          <Nav.Link href='#search'>
            <i className='fas fa-search'></i>
          </Nav.Link>
          <Nav.Link href='#cart'>
            <i className='fas fa-shopping-cart'></i>
          </Nav.Link>
          <Nav.Link href='#user'>
            <i className='far fa-user'></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
