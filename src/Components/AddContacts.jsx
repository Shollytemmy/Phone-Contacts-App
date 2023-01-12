import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/contacts'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {FaRegAddressBook} from 'react-icons/fa'

// uuid 
import { v4 as uuidv4 } from 'uuid';


export const AddContacts = ({contacts, setContacts, setContactsInfo, contactsInfo}) => {

  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const request = {
    //   id: uuidv4(),
    //   ...contacts
    // }

    let response = await axios.post("/contacts/", {
      id: uuidv4(),
      ...contacts
    })

    if(contacts.name !== "" && contacts.email !== ""){
      setContactsInfo([...contactsInfo, response.data])
      
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
        <Button type='submit' style={{marginLeft: "10px"}}>
          <FaRegAddressBook />
        </Button>

            

        </Form>
    </div>
  )
}
