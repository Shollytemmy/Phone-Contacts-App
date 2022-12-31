import React from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export const ContactsList = () => {
  return (
    <div>
        <Form>
            <Col className='mb-5'>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control  type='text' placeholder='Name'/>
        </Form.Group>
        </Col>
        <Col className="mb-3">
            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control  type='email' placeholder='Email'/>
        </Form.Group>
        </Col>
        <Button>Add Contact</Button>

            

        </Form>
        
        
    </div>
  )
}
