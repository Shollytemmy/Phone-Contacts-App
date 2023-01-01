import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import './App.css'
import { AddContacts } from './Components/AddContacts'
import { ContactsList } from './Components/ContactsList'
import { Header } from './Components/Header'
import {ContactsCard} from './Components/ContactsCard'

function App() {
  const [contactsInfo, setContactsInfo] = useState([])
  const [contacts, setContacts] = useState({name: '', email: ''})

  console.log(contactsInfo)


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
