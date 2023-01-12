import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from '../api/contacts'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {FaRegAddressBook} from 'react-icons/fa'

// uuid 
import { v4 as uuidv4 } from 'uuid';


export const EditConact = ({
      contacts,
         updateContact
        }) => {

  const navigate = useNavigate()
  const location = useLocation()
  const {id, name, email} = location.state.data
  
  
  const [contact, setContact] = useState({id, name, email})
  
 
  

  const handleUpdate = async (e) => {
    e.preventDefault()

    

   

    if(contact.name === "" || contact.email === ""){
      alert("Form can't be empty")
      return;
      
      
    } 

    updateContact(contact)

    setContact({...contact, name: "", email: ""})

    navigate(-1);

    }

   
  
  return (
    <div>
        <h2>Edit Contact</h2>

        <Form onSubmit={handleUpdate}>
            <Col className='mb-5'>
            <Form.Group controlId="nameInput">
            <Form.Label>Name</Form.Label>
            <Form.Control 
            
             type='text'
              placeholder='Name'
               value={contact.name}
               onChange={(e) => setContact({...contact, name: e.target.value})}
               />
        </Form.Group>
        </Col>

        <Col className="mb-3">
            <Form.Group controlId="emailInput">
            <Form.Label>Email</Form.Label>
            <Form.Control
            
              type='email'
               placeholder='Email'
                value={contact.email}
                onChange={(e) => setContact({...contact, email: e.target.value})}
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
