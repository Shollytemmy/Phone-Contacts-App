import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {FaRegAddressBook} from 'react-icons/fa'

// uuid 
import { v4 as uuidv4 } from 'uuid';


export const AddContacts = ({contacts, setContacts, setContactsInfo, contactsInfo}) => {

  const navigate = useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault()

    if(contacts.name !== "" && contacts.email !== ""){
      setContactsInfo([...contactsInfo, { id: uuidv4(), name: contacts.name, email: contacts.email}])
      
    } else{
      alert("Form can't be empty")
      return;
    }

    setContacts({...contacts, name: "", email: ""})

    navigate("phonelist");

    }

   
  
  return (
    <div>
        <h2>Add New Contact</h2>

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
        <Button type='submit'>
          <FaRegAddressBook />
        </Button>

            

        </Form>
    </div>
  )
}
