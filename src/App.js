import { Container } from 'react-bootstrap'
import React from 'react'
import Body from './components/Body'
import Header from './components/Header'

const App = () => {
  return (
    <div>
    <Header />
      <Container>
        <Body />
      </Container>
    </div>
  )
}

export default App
