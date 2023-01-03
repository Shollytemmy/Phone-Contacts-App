import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
// Router Config

import './App.css'
import { AddContacts } from './Components/AddContacts'
import ContactsList from './Components/ContactsList'
import { Header } from './Components/Header'



function App() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [contacts, setContacts] = useState({name: '', email: ''})

  console.log(contactsInfo)

  const handleDelete = (id) => {

    let removeIds = contactsInfo.filter((contact) => contact.id !== id)
    setContactsInfo(removeIds);

  }
    useEffect(() =>{
   let results = JSON.parse(localStorage.getItem("contacts"))

   if(results) setContactsInfo(results)

  }, [])

  useEffect(() =>{
    localStorage.setItem("contacts", JSON.stringify(contactsInfo))

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

        </Routes>
        {/* <AddContacts
         contacts= {contacts}
          setContacts= {setContacts}
          setContactsInfo= {setContactsInfo}
          contactsInfo= {contactsInfo}
           /> */}
        {/* <ContactsList
         contactsInfo={contactsInfo}
         handleDelete={handleDelete}
          /> */}
      </Container>
    
   
  )
}

export default App
