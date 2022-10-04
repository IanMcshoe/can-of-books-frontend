import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

class Book extends React.Component {
  render() {
    return (
      <>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/150"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{this.props.book.title}</h3>
          <p>{this.props.book.description}</p>
        </Carousel.Caption>
      </>
    );
  }
}

export default Book;
