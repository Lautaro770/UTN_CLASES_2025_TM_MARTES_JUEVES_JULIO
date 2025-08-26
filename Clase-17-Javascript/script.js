
//const, cuando usarlas? ✅
//Funciones en flecha ✅
//FOR IN ✅
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

// const OPERACIONES = {
//     'SUMAR': {
//         simbolos: ['+', 'sumar'],
//         calculo: (a, b) => a + b
//     },
//     'RESTAR': {
//         simbolos: ['-', 'restar'],
//         calculo: function (a, b) {
//             return a - b
//         }
//     },
//     'DIVIDIR': {
//         simbolos: ['/', 'dividir'],
//         calculo: (a, b) => a / b
//     },
//     'MULTIPLICAR': {
//         simbolos: ['*', '.', 'multiplicar'],
//         calculo: (a, b) => a * b
//     }
// }

/* let a = 10
let b = 20 */

/* console.log(OPERACIONES.SUMAR.calculo(a, b)) */
//let operacion = prompt('Que operacion quieres realizar?')

// function validarOperacion (operacion_string_usuario){
//     for(let clave in OPERACIONES){
//         const operacion = OPERACIONES[clave]
//         let es_alguna_de_esas_operaciones = operacion.simbolos.includes(operacion_string_usuario.trim().toLowerCase())
//         if(es_alguna_de_esas_operaciones){
//             return true
//         }
//     }
//     return false
// }

//Devolver el objeto de configuracion de esa funcion, si no lo encuentra debe devolver null
// function seleccionarOperacion ( operacion_string_usuario ){

// }

// console.log(validarOperacion('porcentaje'))
// console.log(validarOperacion('sumar'))
// console.log(validarOperacion('-'))
// console.log(validarOperacion('multiplicar'))


// function seleccionarOperacion ( operacion_string_usuario ){
//     for(let clave in OPERACIONES){ 
//         const operacion = OPERACIONES[clave]
//         let selecciona_operacion = operacion.simbolos.includes(operacion_string_usuario.trim().toLowerCase())
//         if(selecciona_operacion){
//             return operacion
//         }
//     }
//     return null
// }

// console.log(seleccionarOperacion('/'))


//METODOS DE ARRAY

//push MUTABLE
//pop MUTABLE
//shift MUTABLE
//unshift MUTABLE
//indexOf INMUTABLE
//includes INMUTABLE
//splice MUTABLE


/* const nombres = ['pepe', 'maria', 'juan', 'pedrito', 'julieta', 'victoria']
let nuevo_nombre = 'pedro' */

//push: Agregar un elemento al final de la lista. MUTABLE (Porque modifica el array original)
//nombres.push(nuevo_nombre)

//unshift Agregar un elemento al inicio de la lista. MUTABLE
//nombres.unshift(nuevo_nombre)

//pop: Elimina el ultimo elemento de una lista. Mutable

//shift: Elimina el primer elemento de la lista. Mutable

//indexOf: Sirve para saber la posicion de cierto elemento en el array (Se usa principalmente para arrays de strings) INMUTABLE
//console.log(nombres.indexOf('maria'))

//includes: Sirve para saber si cierto string esta dentro de una lista. (Se usa principalmente para arrays de strings) INMUTABLE
//console.log(nombres.includes('maria'))

//splice: Sirve para agregar/eliminar elementos desde cierta posicion. MUTABLE
//splice(
// desde donde empiezo a cortar, 
// cuanto quiero cortar, 
// que quiero agregar
//)
/* nombres.splice(
    3,
    1
) */
//Eliminar al anterior de pedrito y a pedrito. OJO NO PODES VER EL ARRAY
/* let posicion_pedrito = nombres.indexOf('pedrito')
let posicion_anterior_pedrito = posicion_pedrito - 1
nombres.splice(posicion_anterior_pedrito, 2)

console.log(nombres)
 */


const productos = [
    {
        nombre: 'tv samsung 32"',
        precio: 40000,
        id: 1
    },
    {
        nombre: 'tv samsung 42"',
        precio: 50000,
        id: 2
    },
    {
        nombre: 'tv samsung 52"',
        precio: 60000,
        id: 3
    }
]



//Crear una funcion llamada eliminarProductoPorId(lista_productos, id_producto_eliminar)
//Eliminar un producto por su id y retornara true en caso caso de hacerlo y null en caso de no hacerlo
//PRO TIP: 
/* 
for(let producto of productos){
    let posicion_producto = productos.indexOf(producto)
} 
*/

function eliminarProductoPorId(lista_productos, id_producto_eliminar){
    for(const producto of lista_productos){
        if(producto.id === id_producto_eliminar){
            //Que necesito saber para eliminar el producto? La posicion
            //Que nos permite saber la posicion de un elemento del array? indexOf
            let posicion_producto_eliminar = lista_productos.indexOf(producto)
            lista_productos.splice(posicion_producto_eliminar, 1)
            return true
        }   
    }
    return null
}

eliminarProductoPorId(productos, 3)
console.log(productos)

//Crear una funcion llamada filtrarProductosPorPrecio(lista_productos, precio_max, precio_min)
//La funcion debe devolver una nueva lista donde esten los elementos que cumplan con la condicion
//EN CASO DE QUE NINGUNO CUMPLA DEVOLVER UNA LISTA VACIA

