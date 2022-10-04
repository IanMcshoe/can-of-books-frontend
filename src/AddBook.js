import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

class AddBook extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleCreate({
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked,
    });
    e.target.reset();
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onHide={v => this.props.setShowModal(false)}
          closeButton
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title of book" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter book description"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="status">
                  <Form.Check type="checkbox" label="Status" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Book
                </Button>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AddBook;
