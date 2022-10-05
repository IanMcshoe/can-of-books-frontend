import React from 'react';
import axios from 'axios';
import Book from './Book';
import AddBook from './AddBook';
import UpdateBook from './updateBook';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showUpdateModal: false,
      books: [],
      bookToUpdate: [],
    };
  }

  getBooks = async () => {
    try {
      let bookData = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      // let bookData = await axios.get(`http://localhost:3001/books`);
      this.setState({
        books: bookData.data,
      });
    } catch (error) {
      console.log('Error: ', error.response);
      alert(`Error: ${error.code} - ${error.message}`);
    }
  };

  setShowModal = show => {
    this.setState({ showModal: show });
  };

  setShowUpdateModal = show => {
    this.setState({ showUpdateModal: show });
  };

  handleCreate = async bookInfo => {
    console.log('bookInfo:', bookInfo);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVER}/books`,
        bookInfo
      );
      const createdBook = res.data;
      this.setState({
        books: [...this.state.books, createdBook],
      });
      this.setState({ showModal: false });
    } catch (error) {
      console.log('Error: ', error.response);
      alert(`Error: ${error.code} - ${error.message}`);
    }
  };

  handleUpdate = bookToUpdate => {
    this.setState({ bookToUpdate: bookToUpdate });
    this.setShowUpdateModal(true);
    setTimeout(() => {
      console.log(this.state.bookToUpdate);
    }, 500);
  };

  updateBooks = async bookToUpdate => {
    console.log('bookUpdateInfo:', bookToUpdate);
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`,
        bookToUpdate
      );
      const updatedBooks = this.state.books.map(existingBook => {
        return existingBook._id === bookToUpdate._id ? res.data : existingBook;
      });
      this.setState({
        books: updatedBooks,
        showUpdateModal: false,
      });
    } catch (error) {
      console.log('Error: ', error.response);
      alert(`Error: ${error.code} - ${error.message}`);
    }
  };

  handleDelete = async bookToDelete => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER}/books/${bookToDelete._id}`
      );
      console.log(response.data);
      const filteredBooks = this.state.books.filter(book => {
        return book._id !== bookToDelete._id;
      });

      this.setState({
        books: filteredBooks,
      });
      window.location.reload(false);
    } catch (error) {
      console.log('Error: ', error.response);
      alert(`Error: ${error.code} - ${error.message}`);
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
                    <Book
                      book={book}
                      handleDelete={this.handleDelete}
                      handleUpdate={this.handleUpdate}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <div className="mt-0 mb-5 text-center">
              <Button variant="success" onClick={v => this.setShowModal(true)}>
                Add Book
              </Button>
            </div>
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <Container>
          <AddBook
            setShowModal={this.setShowModal}
            showModal={this.state.showModal}
            handleCreate={this.handleCreate}
          />
          <UpdateBook
            setShowUpdateModal={this.setShowUpdateModal}
            showUpdateModal={this.state.showUpdateModal}
            bookToUpdate={this.state.bookToUpdate}
            updateBooks={this.updateBooks}
          />
        </Container>
      </>
    );
  }
}

export default BestBooks;
