import { InertiaLink } from "@inertiajs/inertia-react"
import React from "react"
import route from "ziggy-js"
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown } from "react-bootstrap"

const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href='/home'>Company Database</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
    <InertiaLink href='/employees'>View Data</InertiaLink>
    &nbsp;&nbsp;&nbsp;&nbsp;
      <InertiaLink href='/employees/add'>Add new</InertiaLink>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <InertiaLink
                  method="post"
                  href='logout'
                >
                  Logout
                </InertiaLink>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Menu
