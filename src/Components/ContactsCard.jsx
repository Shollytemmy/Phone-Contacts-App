import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import {FaRegTrashAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const ContactsCard = (
  {
    initName,
     name,
      email,
       handleDelete,
        id,
        contact
  }) => {
  return (
    
      
    
<div className='d-flex border col-10 mt-5 justify-content-between'>
          <Link to={`/viewcontact/${id}`} state = {{data: contact, initName: initName}}  style={{textDecoration: "none"}}>
            
            <div className='d-flex justify-center align-items-center mt-2' style={{height: "30px"}}>
              <p className='me-3 ms-3 rounded-circle text-center mt-3' style={{backgroundColor: "red", width: "30px", height: "30px", color: "#fff"}}>{initName}</p>

              <p className='mt-3' >{name}</p>
            </div>
          <p className='ms-5 fw-normal' style={{fontSize: "13px"}}>{email}</p>
          

          </Link>
          <div>
            <FaRegTrashAlt 
            onClick={() => handleDelete(id)}
            
             style={{fontSize: "18px", color: "red", cursor: "pointer", marginRight: "15px", marginTop: "20px"}}  />

          </div>

          
        </div>
        
  )
}
