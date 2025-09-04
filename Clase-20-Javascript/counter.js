const decrement_button_HTML = document.getElementById('btn-decrement')
const increment_button_HTML = document.getElementById('btn-increment')
const counter_HTML = document.getElementById('counter')

//Valor estado contador incial
let counter_state = 0





//Renderizar el valor del span
function renderCounterValue (){
    counter_HTML.innerText = counter_state
}

//Funcion responsable de mostrar el valor de mi contador en el HTML y de los botones
function renderCounter(){
    //Logica de renderizado de botones
    if(counter_state >=  10){
        counter_state = 10
        increment_button_HTML.setAttribute('disabled', true)
    }
    else if(counter_state <= 0){
        counter_state = 0
        decrement_button_HTML.setAttribute('disabled', true)
    }
    else{
        increment_button_HTML.removeAttribute('disabled')
        decrement_button_HTML.removeAttribute('disabled')
    }

    renderCounterValue()
}

//increment_button_HTML.setAttribute('disabled', false)

function incrementCounter () {
    counter_state = counter_state + 1
    renderCounter()
}

function decrementCounter (){
    counter_state = counter_state - 1
    renderCounter()
}

decrement_button_HTML.addEventListener('click', decrementCounter)
increment_button_HTML.addEventListener('click', incrementCounter)

//mostrar el estado inicial en HTML
renderCounter()

/* 
Crear las funciones incrementCounter, decrementCounter
Asociar las funciones al evento click (incrementCounter con el boton de + y decrement... con el de menos)
No se olviden de que luego de actualizar el counter_state deberian re-redenderizar
*/

/*
podemos cambiar atributos de un elemento de esta manera
decrement_button_HTML.setAttribute('disabled', true)
EJERCICIO 2: 
No dejar que el contador sea negativo, podemos deshabilitar el boton en caso de que el valor sea 0
No dejar que el contador sea mayor a 10, podemos deshabilitar el boton en caso de que el valor sea 10
*/