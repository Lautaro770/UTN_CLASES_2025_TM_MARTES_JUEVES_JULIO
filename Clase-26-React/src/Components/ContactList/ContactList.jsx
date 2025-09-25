import React from 'react'
import { getAllContacts } from '../../services/contactService'
import { Link } from 'react-router'

const ContactList = () => {
    const contacts = getAllContacts()
    const contact_list_jsx = contacts.map(
        (contact) => {
            return <ContactItem
                contact={contact}
                key={contact.id}
            />
        }
    )

    return (
        <div>
            {
                contact_list_jsx
            }
        </div>
    )
}

const ContactItem = (props) => {
    const contact = props.contact
    return (
         <Link to={'/contacto/' + contact.id} >
            <h2>{contact.name}</h2>
            <span>En linea: {contact.is_connected ? 'Si' : 'No'}</span>
            <img src={contact.profile_img} width={'150px'} />
            <hr/>
        </Link>
    )
}

export default ContactList