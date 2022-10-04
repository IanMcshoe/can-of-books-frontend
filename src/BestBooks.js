import React from 'react';
import axios from 'axios';
import Book from './Book';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
// require('dotenv').config();

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks = async () => {
    try {
      // let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      let bookData = await axios.get(`http://localhost:3001/books`);
      this.setState({
        books: bookData.data,
      });
    } catch (error) {
      console.log('Error: ', error.response);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Container className="w-50">
            <Carousel className="mb-5" variant="dark">
              {this.state.books.map((book, i) => {
                return (
                  <Carousel.Item key={i} className="mb-5">
                    <Book book={book} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
