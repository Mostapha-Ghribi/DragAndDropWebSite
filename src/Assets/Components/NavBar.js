import React from 'react'
import '../../App.css';
import {Navbar,Button,Form,Nav,NavDropdown,FormControl,Modal} from 'react-bootstrap'
import {useEffect,useState} from 'react'
function NavBar() {
  const [show, setShow] = useState(false);
  const [showReg, setShowReg] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseReg = () => setShowReg(false);
  const handleShowReg = () => setShowReg(true);

    return (
   <>     
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto nvt">

    <Button variant="danger btn-sm mr-1" onClick={() => setShowReg(true)}>Register</Button>

    <Button variant="primary btn-sm mr-1" onClick={() => setShow(true)}>Login</Button>

    </Nav>
  </Navbar.Collapse>
</Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button  variant="primary btn-block" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        
      </Modal>
      <Modal show={showReg} onHide={handleCloseReg}>
        <Modal.Header closeButton>
          <Modal.Title>Get Started !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button  variant="primary btn-block" type="submit">
            Submit
          </Button>
        </Form>
        </Modal.Body>
        
      </Modal>
      </>
    )
}

export default NavBar