import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import './App.css'
import { AddContacts } from './Components/AddContacts'
import { ContactsList } from './Components/ContactsList'
import { Header } from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Container className='text-center'>
        <Header />
        <AddContacts />
        <ContactsList />
      </Container>
    </div>
   
  )
}

export default App
