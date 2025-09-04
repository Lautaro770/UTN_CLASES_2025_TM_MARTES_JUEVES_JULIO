const mensajes = [
    { 
        id: 1,
        content: 'Hola a todos',
        author_name: 'Pepe',
        author_email: 'pepe@gmail.com',
        date: 'ayer'
    },
    { 
        id: 2,
        content: 'Que tal pepe?',
        author_name: 'Maria',
        author_email: 'maria@gmail.com',
        date: 'ayer'
    },
    {
        id: 3,
        content: 'Por suerte todo bien, pero tengo mucho frio, esta lloviendo',
        author_name: 'Pepe',
        author_email: 'pepe@gmail.com',
        date: 'hoy 14:59'
    },
    { 
        id: 4,
        content: 'Esta mortal la tormenta',
        author_name: 'Pedro',
        author_email: 'pedro@gmail.com',
        date: 'hoy 15:03'
    },
    { 
        id: 5,
        content: 'Si, no esperaba tanto frio',
        author_name: 'Maria',
        author_email: 'maria@gmail.com',
        date: 'hoy 15:07'
    }
]

//Llamar al messages-list 
const messages_list_HTML = document.querySelector('.messages-list')

function renderMensajes(mensajes){
    let mensajes_html_string = ''

    for(let mensaje of mensajes){
        let mensaje_HTML_string = `
            <div class="message">
                <span class="message-sender">${mensaje.author_name}</span>
                <p class="message-text">${mensaje.content}</p>
                <span class="message-time">${mensaje.date}</span>
            </div>
        `
        mensajes_html_string = mensajes_html_string + mensaje_HTML_string
    }

    messages_list_HTML.innerHTML = mensajes_html_string
}

renderMensajes(mensajes)


const message_form_HTML = document.getElementById('message-form')
const message_form_HTML_2 = document.getElementById('message-form-2')

function handleSubmitMessageForm (evento){
    //Los formularios al enviarse por defecto recargan la pagina
    //Evitamos que eso suceda
    evento.preventDefault()
    
    console.log("se envio el formulario")

    //El target es el elemento del DOM de donde se ejecuto el evento
    //En este caso es el message-form
    const formulario_seleccionado = evento.target

    const input_mensaje = formulario_seleccionado.mensaje

    //Hay que buscar como obtener el valor del input de mensaje
    const mensaje_escrito = input_mensaje.value
    /* 
    { 
        id: 5,
        content: 'Si, no esperaba tanto frio',
        author_name: 'Maria',
        author_email: 'maria@gmail.com',
        date: 'hoy 15:07'
    }
    */

    //Ahora deberiamos crear un nuevo mensaje
    const fecha_actual = new Date()
    const nuevo_mensaje = {
        id: mensajes.length + 1,
        content: mensaje_escrito,
        author_name: 'pepe',
        author: 'pepe@gmail.com',
        date: 'dia ' + String(fecha_actual.getDay()) + ' ' + String(fecha_actual.getHours()) + ':' + String(fecha_actual.getMinutes())
    }
    mensajes.push(nuevo_mensaje)
    renderMensajes(mensajes)

    formulario_seleccionado.reset()
}

message_form_HTML.addEventListener(
    'submit', 
    handleSubmitMessageForm
)

message_form_HTML_2.addEventListener(
    'submit',
    handleSubmitMessageForm
)

