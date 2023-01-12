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
import { EditConact } from './Components/EditContact'



function App() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [contacts, setContacts] = useState({name: '', email: ''})



  const dataPersist = async() =>{

    const response = await axios.get("/contacts")
    return response.data

  }

  const handleDelete = async (id) => {

    await axios.delete(`/contacts/${id}`)

    let removeIds = contactsInfo.filter((contact) => contact.id !== id)
    setContactsInfo(removeIds);

  }
    useEffect(() =>{


  const fetchAllContacts = async() =>{
    let allContacts = await dataPersist()
    if(allContacts) setContactsInfo(allContacts)
  }
  fetchAllContacts()

  }, [])

  const updateContact = async(contact) => {
    const response = await axios.put(`/contacts/${contact.id}`, contact)
    console.log(response.data)
    const {id,name,email} = response.data
     setContactsInfo(contactsInfo.map((contact) => {
      return contact.id === id ? {...response.data} : contact
     

    }))
  }

  
  



  return (
    
      <div className=''>
        <Header />
        <Routes>
          <Route path="/" element={<AddContacts
                      contacts= {contacts}
                      setContacts= {setContacts}
                      setContactsInfo= {setContactsInfo}
                      contactsInfo= {contactsInfo}
           />}
            />
            <Route path='/edit' element={<EditConact
                contacts= {contacts}
                      setContacts= {setContacts}
                      setContactsInfo= {setContactsInfo}
                      contactsInfo= {contactsInfo}
                      updateContact={updateContact}
                       
             />}/>

            <Route path="/phonelist" element={<ContactsList
                contactsInfo={contactsInfo}
                handleDelete={handleDelete}
                
          />

            } />
            <Route path='viewcontact/:id' element={<ViewContact />} />

            <Route path="*" element={<NotFound />} />

        </Routes>
        
      </div>
    
   
  )
}



export default App
