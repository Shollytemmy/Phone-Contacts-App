import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import './App.css'
import { AddContacts } from './Components/AddContacts'
import ContactsList from './Components/ContactsList'
import { Header } from './Components/Header'
import {ContactsCard} from './Components/ContactsCard'


function App() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [contacts, setContacts] = useState({name: '', email: ''})

  console.log(contactsInfo)

  const handleDelete = (id) => {

  }
    useEffect(() =>{
   let results = JSON.parse(localStorage.getItem("contacts"))

   if(results) setContactsInfo(results)

  }, [])

  useEffect(() =>{
    localStorage.setItem("contacts", JSON.stringify(contactsInfo))

  }, [contactsInfo])



  return (
    <div>
      <Container className=''>
        <Header />
        <AddContacts
         contacts= {contacts}
          setContacts= {setContacts}
          setContactsInfo= {setContactsInfo}
          contactsInfo= {contactsInfo}
           />
        <ContactsList contactsInfo={contactsInfo} />
      </Container>
    </div>
   
  )
}

export default App
