
//ACCION A REALIZAR
function saludar(){
    alert("Hola, soy yo!")
}

//Segunda forma: propiedades 
const btn_click_2_HTML = document.getElementById('btn-click-2')
btn_click_2_HTML.onclick = saludar


//FORMA MAS MODERNA Y POPULAR
//3era forma: addEventListener
const btn_click_3_HTML = document.getElementById('btn-click-3')
//Primer parametro: Clave del evento (nombre)
//Segundo parametro: Accion a realizar
btn_click_3_HTML.addEventListener(
    'click',
    saludar
)


//Todas las funciones asociadas a eventos reciben el parametro event
//Ese parametro va a traer informacion detallada del evento
function asustar( evento ){
    //Quiero prevenir el comportamiento por defecto del evento
    evento.preventDefault()

    //alert("Te dije que no me copiaras")
    console.log("Te dije que no me copiaras")
    
}

const incopiable_HTML = document.getElementById('incopiable')
incopiable_HTML.addEventListener(
    'copy', 
    asustar
)
incopiable_HTML.addEventListener(
    'click', 
    () => {}
)

document.addEventListener(
    'wheel',
    (evento) => {
        console.log("la ruedita se mueve")
        console.log(evento)
    }
) 
