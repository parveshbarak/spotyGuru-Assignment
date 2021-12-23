import React, { useState } from 'react'
import { Row, Col, Form, Button, Table } from 'react-bootstrap'
import axios from 'axios'
import Loader from './Loader'

const Body = () => {
  const [universities, setUniversities] = useState([])
  const [loading, setLoading] = useState(false)

  const [country, setCountry] = useState('')
  const showList = async (e) => {
    e.preventDefault()
    if (!country) {
      alert('Invalid search')
      return
    }
    try {
      setLoading(true)
      setUniversities([])
      const data = await axios.get(`/search?country=${country}`)
      setUniversities(data.data)
      setLoading(false)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <div className='text-center p-3'>
        <h1 className='p-2 mb-2'>List of Universities:-</h1>
        <Form style={{ display: 'inline-block' }}>
          <Row>
            <Col xs='auto'>
              <Form.Label htmlFor='country' visuallyHidden>
                Country
              </Form.Label>
              <Form.Control
                className='mb-2'
                id='country'
                value={country}
                placeholder='Country'
                onChange={(e) => setCountry(e.target.value)}
              />
            </Col>
            <Col xs='auto'>
              <Button onClick={showList} type='submit' className='mb-2'>
                Show List
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      <Table striped bordered hover className='mt-2'>
        <thead>
          <tr>
            <th>#</th>
            <th>University Name</th>
            <th>Website</th>
            <th>State-Province</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university, i = 0) => (
            <tr key={++i}>
              <td>{i + 1}</td>
              <td>{university.name}</td>
              <td>
                {' '}
                <a
                  href={`${university.web_pages}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  {university.web_pages}{' '}
                </a>{' '}
              </td>
              <td>{university['state-province'] || '---'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='text-center p-3'>
        {universities.length === 0 && !loading && <h1>Data Not Found!</h1>}
      </div>
      {loading && (
        <h1>
          <Loader />
        </h1>
      )}
    </>
  )
}

export default Body
