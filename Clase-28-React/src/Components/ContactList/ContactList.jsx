import React, { useContext } from 'react'
import { getAllContacts } from '../../services/contactService'
import { Link } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'
import WhatsAppSpinner from '../WhatsappSpinner/WhatsappSpinner'

const ContactList = () => {
    //useContext es un hook nativo de react que me permite consumir contextos
    const { 
        contactList, 
        isContactListLoading , 
        onChangeSearchTerm,
        searchTerm
    } = useContext(ContactListContext)

    return (
        <div>
            <div>
                <h1>Lista de contactos</h1>
                <form>
                    <input 
                        type="text" 
                        placeholder="Buscar contacto" 
                        onChange={onChangeSearchTerm} 
                    />
                    {/* <button>Buscar</button> */}
                </form>
            </div>
            {
                isContactListLoading
                    ? <WhatsAppSpinner />
                    : <Contacts contactList={contactList} searchTerm={searchTerm} />
            }

        </div>
    )
}

const Contacts = ({contactList, searchTerm}) => {
    const contactsFiltered = contactList.filter(
        (contact) => {
            return contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        }
    )

    return (
        <div>

            {
                contactsFiltered.length === 0 
                ? <span> No se encontraron contactos </span>
                : contactsFiltered.map(
                    (contact) => {
                        return <ContactItem
                            contact={contact}
                            key={contact.id}
                        />
                    }
            )
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
            <hr />
        </Link>
    )
}

export default ContactList