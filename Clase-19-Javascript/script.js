const mensajes = [
    { //0
        id: 1,
        content: 'Hola a todos',
        author_name: 'Pepe',
        author_email: 'pepe@gmail.com',
        date: 'ayer'
    },
    { //1
        id: 2,
        content: 'Que tal pepe?',
        author_name: 'Maria',
        author_email: 'maria@gmail.com',
        date: 'ayer'
    },
    { //2
        id: 3,
        content: 'Por suerte todo bien, pero tengo mucho frio, esta lloviendo',
        author_name: 'Pepe',
        author_email: 'pepe@gmail.com',
        date: 'hoy 14:59'
    },
    { //3
        id: 4,
        content: 'Esta mortal la tormenta',
        author_name: 'Pedro',
        author_email: 'pedro@gmail.com',
        date: 'hoy 15:03'
    },
    { //4
        id: 5,
        content: 'Si, no esperaba tanto frio',
        author_name: 'Maria',
        author_email: 'maria@gmail.com',
        date: 'hoy 15:07'
    }
]

/*
-Llamar al messages-list HECHO
    Utilizar getElementById/querySelector para seleccionar el div contenedor de mensajes por id.
-Crear un funcion que al pasarle un array de mensajes te renderize en messages-list una lista de mensajes
    -Accion: Dada una lista de mensajes mostrar cada mensaje dentro de messages-list

-Cada mensaje debe tener este HTML: 
    <div class="message">
        <span class="message-sender">Pedrito</span>
        <p class="message-text">Hola que tal todos!</p>
        <span class="message-time">Hoy a las 14:00</span>
    </div>
PRO TIP: SI sos novato vas a hacer una operacion muy dificil te conviene hacerla directamente sin transformarlo en funcion

    */



//Llamar al messages-list 
const messages_list_HTML = document.querySelector('.messages-list')


/* messages_list_HTML.innerHTML = ` 
    <div class="message">
        <span class="message-sender">${mensajes[0].author_name}</span>
        <p class="message-text">${mensajes[0].content}</p>
        <span class="message-time">${mensajes[0].date}</span>
    </div>
    <div class="message">
        <span class="message-sender">${mensajes[1].author_name}</span>
        <p class="message-text">${mensajes[1].content}</p>
        <span class="message-time">${mensajes[1].date}</span>
    </div>
    <div class="message">
        <span class="message-sender">${mensajes[2].author_name}</span>
        <p class="message-text">${mensajes[2].content}</p>
        <span class="message-time">${mensajes[2].date}</span>
    </div>
    <div class="message">
        <span class="message-sender">${mensajes[3].author_name}</span>
        <p class="message-text">${mensajes[3].content}</p>
        <span class="message-time">${mensajes[3].date}</span>
    </div>
    <div class="message">
        <span class="message-sender">${mensajes[4].author_name}</span>
        <p class="message-text">${mensajes[4].content}</p>
        <span class="message-time">${mensajes[4].date}</span>
    </div>
` */

/* 
VERSION CON FOR
let mensajes_html_string = ''

for(let index = 0; index < mensajes.length; index = index + 1 ){
    console.log(index)
    let mensaje_HTML_string = `
        <div class="message">
            <span class="message-sender">${mensajes[index].author_name}</span>
            <p class="message-text">${mensajes[index].content}</p>
            <span class="message-time">${mensajes[index].date}</span>
        </div>
    `
    //Hacemos que valga lo que valia anteriormente + el nuevo mensaje
    //Esto hace que se ACUMULEN los mensajes
    mensajes_html_string = mensajes_html_string + mensaje_HTML_string
    console.log(mensajes_html_string)
}

messages_list_HTML.innerHTML = mensajes_html_string
 */
function renderMensajes(mensajes){
    //VERSION CON FOR OF
    let mensajes_html_string = ''

    //Se puede leer como: por cada mensaje de la lista de mensajes
    //Cuando conviene usar FOR OF? Cuando queremos recorrer un array
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