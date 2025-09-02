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

/*
-Llamar al messages-list
-crear un funcion que al pasarle un array de mensajes te renderize en messages-list una lista de mensajes
-Cada mensaje debe tener este HTML: 
    <div class="message">
        <span class="message-sender">Pedrito</span>
        <p class="message-text">Hola que tal todos!</p>
        <span class="message-time">Hoy a las 14:00</span>
    </div>
*/