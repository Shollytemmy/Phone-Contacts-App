import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

 const ViewContact = () => {
  const location = useLocation()
  const navigate = useNavigate()
  
  let user = location.state
  
  return (
    <div className='d-flex justify-content-center'>

      <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>View Contact</Card.Title>
        <Card.Text style={{width: "5rem", height: "5rem", borderRadius:"50%", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "28px", color: "#fff"}}>
          <span>{user.initName}</span>
          </Card.Text>
          <Card.Text style={{fontSize: "18px"}}>{user.data.name}</Card.Text>
          <Card.Text style={{fontSize: "13px"}}>{user.data.email}</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(-1)}>Go back</Button>
      </Card.Body>
    </Card>

       </div>
  )
}

export default ViewContact
