
import { ContactsCard } from './ContactsCard'



const ContactsList = ({contactsInfo}) => {

  
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      {contactsInfo.map((contact) => {
        let initName = contact.name[0]
       return(
        <ContactsCard key={contact.id} name={contact.name} initName ={initName} email={contact.email} />


       ) 
      })}

      

        
        
        
    </div>
  )
}

export default ContactsList
