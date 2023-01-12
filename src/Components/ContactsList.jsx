import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { ContactsCard } from './ContactsCard'

// react-icon
import {HiOutlineUserAdd} from 'react-icons/hi'




const ContactsList = ({contactsInfo, handleDelete, updateContact}) => {
  const navigate = useNavigate()

  const contactslist = contactsInfo.map((contact) => {
        let initName = contact.name[0]
       return(
        <div className='d-flex justify-content-center align-items-center flex-column' key={contact.id}>
          <ContactsCard
            id={contact.id}
              name={contact.name}
              initName ={initName} 
              email={contact.email} 
              handleDelete={handleDelete}
              contact={contact}
              
            />
             </div>
           
            


       ) 
      })


  
  return (
    <div className=''>
      <div className='d-flex justify-content-between border'>
        <h2>Contacts</h2>
      <Button onClick={() => navigate(-1)}>
        <HiOutlineUserAdd />
         </Button>
      </div>

      {contactslist}
</div>
  )
}

export default ContactsList



