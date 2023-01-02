
import { ContactsCard } from './ContactsCard'



const ContactsList = ({contactsInfo, handleDelete}) => {

  
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      {contactsInfo.map((contact) => {
        let initName = contact.name[0]
       return(
        <ContactsCard
         key={contact.id}
         id={contact.id}
          name={contact.name}
           initName ={initName} 
           email={contact.email} 
           handleDelete={handleDelete}
            />


       ) 
      })}

      

        
        
        
    </div>
  )
}

export default ContactsList
