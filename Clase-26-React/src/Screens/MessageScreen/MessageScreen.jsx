import React, { useEffect, useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import Navbar from '../../Components/Navbar/Navbar'
import Counter from '../../Components/Counter/Counter'
import { useParams } from 'react-router'
import { getContactById } from '../../services/contactService'
import ContactList from '../../Components/ContactList/ContactList'
import './messageScreen.css'

function MessageScreen() {
    
    
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const onCreateNewMessage = (new_message) => {
        console.log("Mensaje: ", new_message)
        const new_message_object = {
            content: new_message,
            author: 'YO',
            timestamp: '19:00',
            id: messages.length + 1
        }
        const messages_cloned = [...messages]
        messages_cloned.push(new_message_object)
        setMessages(messages_cloned)
    }
    
    const {id_contacto} = useParams()

    function loadContactById (contact_id){
        setIsLoading(true)
        //Ejecutamos una accion luego de 2 seg
        setTimeout(
            () => {
                const contacto = getContactById(contact_id)
                setMessages(contacto.messages)
                setIsLoading(false)
            },
            2000
        )
    }

    useEffect(
        () => {
            loadContactById(id_contacto)
        },
        [id_contacto]
    )

    return (
        <div className='message-screen'>
            <div className='message-screen__contact-list-container'>
                <ContactList/>
            </div>
            <div className='message-screen__messages-container'>
                {
                    isLoading 
                    ? <span>cargando...</span>
                    : <MessagesList 
                        messages={messages} 
                    />
                }
                
                <div className='messages-form-container'>
                    <NewMessageForm
                        onCreateNewMessage={onCreateNewMessage}
                    />
                </div>
            </div>
        </div>
    )
}

export default MessageScreen


/* 
 const [isSelect, setIsSelect] = useState(false)

    Cada vez que cambie el id_contacto, buscar el contacto por id
    useEffect nos permite controlar las recargas de una funcion
   
    useEffect(
        //Efecto, ACCION A REALIZAR
        //Cuando se cargue el componente el efecto se ejecutara 1 VEZ
        //SI ALGUN VALOR DE DEPENDENCIA CAMBIA, EL EFECTO SE RE-EJECUTARA
        () => {
            console.log("Cambio el isSelect")
        },
        //Dependencias, que valor estaremos observando para cargar el efecto
        [isSelect]
    )

     <button
                onClick={
                    () => {
                        setIsSelect(!isSelect)
                    }
                }
            >
                {
                    isSelect
                    ? 'Seleccionado'
                    : 'Seleccionar'
                }
            </button>
*/