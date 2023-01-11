import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import axios from './api/contacts'
// Router Config

import './App.css'
import { AddContacts } from './Components/AddContacts'
import ContactsList from './Components/ContactsList'
import { Header } from './Components/Header'
import { NotFound } from './Components/NotFound'
import  ViewContact  from './Components/ViewContact'



function App() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [contacts, setContacts] = useState({name: '', email: ''})



  const dataPersist = async() =>{

    const response = await axios.get("/contacts")
    return response.data

  }

  const handleDelete = (id) => {

    let removeIds = contactsInfo.filter((contact) => contact.id !== id)
    setContactsInfo(removeIds);

  }
    useEffect(() =>{
  //  let results = JSON.parse(localStorage.getItem("contacts"))

  //  if(results) setContactsInfo(results)

  const fetchAllContacts = async() =>{
    let allContacts = await dataPersist()
    if(allContacts) setContactsInfo(allContacts)
  }
  fetchAllContacts()

  }, [])

  useEffect(() =>{
    // localStorage.setItem("contacts", JSON.stringify(contactsInfo))

  }, [contactsInfo])



  return (
    
      <Container className=''>
        <Header />
        <Routes>
          <Route path="/" element={<AddContacts
                      contacts= {contacts}
                      setContacts= {setContacts}
                      setContactsInfo= {setContactsInfo}
                      contactsInfo= {contactsInfo}
           />}
            />

            <Route path="/phonelist" element={<ContactsList
                contactsInfo={contactsInfo}
                handleDelete={handleDelete}
          />

            } />
            <Route path='viewcontact/:id' element={<ViewContact />} />

            <Route path="*" element={<NotFound />} />

        </Routes>
        
      </Container>
    
   
  )
}

export default App
