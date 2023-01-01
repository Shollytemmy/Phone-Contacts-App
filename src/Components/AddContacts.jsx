import React, {useState} from 'react'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export const AddContacts = ({contacts, setContacts, setContactsInfo, contactsInfo}) => {
  console.log(contacts);

  const handleSubmit = (e) => {
    e.preventDefault()

    if(contacts.name !== "" && contacts.email !== ""){
      setContactsInfo([...contactsInfo, {name: contacts.name, email: contacts.email}])
      
    } else{
      alert("Form can't be empty")
      return;
    }

    setContacts({...contacts, name: "", email: ""})
  

    
    

  }
  
  return (
    <div>
        <h2>Add Contacts</h2>

        <Form onSubmit={handleSubmit}>
            <Col className='mb-5'>
            <Form.Group controlId="nameInput">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            
             type='text'
              placeholder='Name'
               value={contacts.name}
               onChange={(e) => setContacts({...contacts, name: e.target.value})}
               />
        </Form.Group>
        </Col>

        <Col className="mb-3">
            <Form.Group controlId="emailInput">
            <Form.Label>Email</Form.Label>
            <Form.Control
            
              type='email'
               placeholder='Email'
                value={contacts.email}
                onChange={(e) => setContacts({...contacts, email: e.target.value})}
                />
        </Form.Group>
        </Col>
        <Button type='submit'>Add Contact</Button>

            

        </Form>
    </div>
  )
}
