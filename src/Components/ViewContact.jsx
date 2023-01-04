import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

 const ViewContact = () => {
  const location = useLocation()
  
  let cont = location.state
  console.log(location.state)
  return (
    <div>

      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>View Contact</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

       </div>
  )
}

export default ViewContact
