import React from 'react'
import SignIn from './SignIn'
import {Navbar,Button , Nav} from 'react-bootstrap'
import { BrowserRouter,Link,Switch,Route } from 'react-router-dom'
function NavBar() {
    return (
   <>     
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto nvt">
<BrowserRouter>
<Link to="/SignIn"><Button>SignIn</Button></Link>
</BrowserRouter>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
          <Route exact path="/SignIn">
            <SignIn />
          </Route>
</Switch>
      </>
    )
}

export default NavBar