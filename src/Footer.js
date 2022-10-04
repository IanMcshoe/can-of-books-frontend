import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="secondary"
        variant="dark"
        className="ps-5"
      >
        <Navbar.Brand>&copy;2022 Ian Forrester & Chris Fanucchi</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
