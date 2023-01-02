import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

export const ContactsCard = ({initName, name, email}) => {
  return (
<div className='d-flex border col-6 mt-5 justify-content-between'>
          <div>
            <div className='d-flex justify-center align-items-center mt-2' style={{height: "30px"}}>
              <p className='mx-3 rounded-circle text-center mt-3' style={{backgroundColor: "red", width: "30px", height: "30px", color: "#fff"}}>{initName}</p>

              <p className='mt-3' >{name}</p>
            </div>
          <p className='ms-5 fw-normal' style={{fontSize: "13px"}}>{email}</p>
          

          </div>
          <div>
            <FaRegTrashAlt style={{fontSize: "18px", color: "red", cursor: "pointer"}} />

          </div>

          
        </div>
  )
}
