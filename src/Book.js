import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

class Book extends React.Component {
  render() {
    return (
      <>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/recycled-paper-texture-background-picture-id1295804495?b=1&k=20&m=1295804495&s=170667a&w=0&h=hsJ7aFKjNlH1oyjiTBKvbrB-mprIjFC-iJ35rGgvpoQ="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>{this.props.book.title}</h3>
          <p>{this.props.book.description}</p>
          <p>Status: {this.props.book.status.toString()}</p>
          <Button
            variant="danger"
            onClick={() => this.props.handleDelete(this.props.book)}
          >
            Delete Book
          </Button>
        </Carousel.Caption>
      </>
    );
  }
}

export default Book;
