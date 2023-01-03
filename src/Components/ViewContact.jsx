import React from 'react'
import { useLocation } from 'react-router-dom'

 const ViewContact = () => {
  const location = useLocation()
  
  let cont = location.state
  console.log(location)
  return (
    <div>ViewContact:{"location"} </div>
  )
}

export default ViewContact
