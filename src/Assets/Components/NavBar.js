import React from 'react'
import {Navbar,Button , Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function NavBar() {
    return (
   <>     
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto nvt">
<Link to="/SignIn"><Button>SignIn</Button></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </>
    )
}

export default NavBar