import React, { useState } from 'react'
import MessagesList from '../../Components/MessagesList/MessagesList'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import Navbar from '../../Components/Navbar/Navbar'
import Counter from '../../Components/Counter/Counter'
import { useParams } from 'react-router'

function MessageScreen() {
    const id_contacto = useParams().id_contacto
    console.log(id_contacto)
    const [messages, setMessages] = useState([
        {
            id: 1,
            author: 'YO',
            content: "Que tal!",
            timestamp: '16:17'
        },
        {
            id: 2,
            author: 'Maria',
            content: "Si",
            timestamp: '16:18'
        }
    ])


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



    return (
        <div>
            <Navbar />
            <MessagesList 
                messages={messages} 
            />
            <NewMessageForm
                onCreateNewMessage={onCreateNewMessage}
            />
            <Counter />
        </div>
    )
}

export default MessageScreen