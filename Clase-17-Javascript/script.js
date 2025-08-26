
//const, cuando usarlas? ✅
//Funciones en flecha ✅
//FOR IN 
//Metodo de array



//const, cuando usarlas?

//Si el dato es objeto (osea una funcion, array o objeto) se lo suele guardar en una constante

/* const persona = {
    nombre: 'pepe',
    edad: 42,
    dinero: null
} */

//Las constantes me permiten modificar el estado de un objeto
//persona.nombre = 'pedrito'
//persona.dinero = 1000

//Las constantes NO pueden ser reasignadas
//persona = {}


//const lista_productos = []

//Diccionarios
/* const CONFIGURACION = {
    EDAD_MINIMA: 18,
    DINERO_MINIMO: 90000
} */

/* function verificarUsuario (usuario){
    return usuario.edad >= CONFIGURACION.EDAD_MINIMA && usuario.dinero >= CONFIGURACION.DINERO_MINIMO
} */

//Constante primitiva
//const EDAD_MINIMA = 18


//Funciones en flecha

//Funcion nombrada / funciones comunes
/* function saludar(){
    alert('hola')
} */

//Funcion flecha o arrow function
//ES6
//HACEN LO MISMO QUE FUNCIONES NORMALES, SON MAS MODERNAS

/* const saludar = (nombre) => {
    alert('hola ' + nombre)
}

saludar('pepe') */

//Si nuestra funcion solamente retorna un valor y hace mucho mas proceso, entonces podemos abreviarla 
/* const calcularIva = (precio) => {
    return precio * 0.21
} */
//Version abreviada
//Le puedo quitar las llaves y el retorno, y ahora el retorno lo hace la flecha, esto es retorno implicito
//Si solamente hay un parametro entonces podemos quitar los ( )
//const calcularIva = precio => precio * 0.21
//console.log(calcularIva(40))

/* function verificarUsuario (usuario){
    return usuario.edad >= CONFIGURACION.EDAD_MINIMA && usuario.dinero >= CONFIGURACION.DINERO_MINIMO
}  */

//const verificarUsuario = (usuario) => usuario.edad >= CONFIGURACION.EDAD_MINIMA && usuario.dinero >= CONFIGURACION.DINERO_MINIMO

const OPERACIONES = {
    SUMAR: {
        simbolos: ['+', 'sumar'],
        calculo: (a, b) => a + b
    },
    RESTAR: {
        simbolos: ['-', 'restar'],
        calculo: function (a, b) {
            return a - b
        }
    },
    DIVIDIR: {
        simbolos: ['/', 'dividir'],
        calculo: (a, b) => a / b
    },
    MULTIPLICAR: {
        simbolos: ['*', '.', 'multiplicar'],
        calculo: (a, b) => a * b
    }
}

/* let a = 10
let b = 20 */

/* console.log(OPERACIONES.SUMAR.calculo(a, b)) */
//let operacion = prompt('Que operacion quieres realizar?')

function validarOperacion (operacion_string_usuario){
    for(let clave in OPERACIONES){
        const operacion = OPERACIONES[clave]
        let es_alguna_de_esas_operaciones = operacion.simbolos.includes(operacion_string_usuario.trim().toLowerCase())
        if(es_alguna_de_esas_operaciones){
            return true
        }
    }
    return false
}

//Devolver el objeto de configuracion de esa funcion, si no lo encuentra debe devolver null
function seleccionarOperacion ( operacion_string_usuario ){

}

console.log(validarOperacion('porcentaje'))
console.log(validarOperacion('sumar'))
console.log(validarOperacion('-'))
console.log(validarOperacion('multiplicar'))