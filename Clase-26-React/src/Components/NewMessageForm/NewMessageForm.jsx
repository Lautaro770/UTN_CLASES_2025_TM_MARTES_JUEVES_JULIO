import React from 'react'

const NewMessageForm = (props) => {
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const message_value = form.mensaje.value

        props.onCreateNewMessage(
            message_value
        )
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="mensaje">Enviar mensaje:</label>
            <textarea id='mensaje' name='mensaje'  />
            <button>Enviar mensaje</button>
        </form>

    )
}

export default NewMessageForm