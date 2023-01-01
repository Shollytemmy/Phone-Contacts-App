import {FaRegTrashAlt} from 'react-icons/fa'



export const ContactsList = ({contactsInfo}) => {

  
  return (
    <div>
      {contactsInfo.map((contact) => (
        <div>
          <div>
            <p>{contact.name}</p>
          <p>{contact.email}</p>

          </div>
          <div>
            <FaRegTrashAlt />

          </div>

          
        </div>

      ))}

        
        
        
    </div>
  )
}
