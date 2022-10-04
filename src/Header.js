import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="dark"
        className="py-3 ps-3"
      >
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem className="ps-3">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem className="ps-3">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </NavItem>
      </Navbar>
    );
  }
}

export default Header;
