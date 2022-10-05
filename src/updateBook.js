import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

class UpdateBook extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.updateBooks({
      title: e.target.title.value || this.props.bookToUpdate.title,
      description:
        e.target.description.value || this.props.bookToUpdate.description,
      status: e.target.status.checked || this.props.bookToUpdate.status,
      _id: this.props.bookToUpdate._id,
      __v: this.props.bookToUpdate.__v,
    });
    e.target.reset();
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.showUpdateModal}
          onHide={v => this.props.setShowUpdateModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.bookToUpdate.title}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={this.props.bookToUpdate.description}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="status">
                  <Form.Check
                    type="checkbox"
                    label="Status"
                    defaultChecked={this.props.bookToUpdate.status}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit Changes
                </Button>
              </Form>
            </Container>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateBook;
