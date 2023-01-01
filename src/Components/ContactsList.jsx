import {FaRegTrashAlt} from 'react-icons/fa'



const ContactsList = ({contactsInfo}) => {

  
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      {contactsInfo.map((contact) => {
        let initName = contact.name[0]
       return(
        <div className='d-flex border col-6 mt-5 justify-content-between'>
          <div>
            <div className='d-flex justify-center align-items-center mt-2' style={{height: "30px"}}>
              <p className='mx-3 rounded-circle text-center mt-3' style={{backgroundColor: "red", width: "30px", height: "30px", color: "#fff"}}>{initName}</p>

              <p className='mt-3' >{contact.name}</p>
            </div>
          <p className='ms-5 fw-normal' style={{fontSize: "13px"}}>{contact.email}</p>
          

          </div>
          <div>
            <FaRegTrashAlt />

          </div>

          
        </div>


       ) 
      })}

      

        
        
        
    </div>
  )
}

export default ContactsList
