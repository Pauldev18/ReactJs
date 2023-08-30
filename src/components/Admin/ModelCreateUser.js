import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ModelCreateUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new user
      </Button>

      <Modal show={show} onHide={handleClose} size='xl' backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder="Username" />
      </Form.Group>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Role</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option value='admin'>ADMIN</option>
            <option value='user'>USER</option>
          </Form.Select>
        </Form.Group>
      </Row>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelCreateUser;