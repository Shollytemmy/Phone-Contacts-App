import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
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
        <AddContacts
         contacts= {contacts}
          setContacts= {setContacts}
          setContactsInfo= {setContactsInfo}
          contactsInfo= {contactsInfo}
           />
        <ContactsList
         contactsInfo={contactsInfo}
         handleDelete={handleDelete}
          />
      </Container>
    
   
  )
}

export default App
