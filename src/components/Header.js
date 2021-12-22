import React from 'react'
import { Navbar, Container } from 'react-bootstrap'


const Header = () => {

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand>SpotyGuru Assignment</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
