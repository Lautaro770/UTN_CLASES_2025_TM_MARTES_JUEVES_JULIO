/* 
TEMAS DE HOY:
-Metodos de string ✅
-Funciones ✅
-Objetos ✅
*/

//Propiedades de los string

/* 
-lenght: Longitud de caracteres
*/

//METODOS DE STRING

/* 
-.toLowerCase(): Pasa el string a minuscula y lo retorna
-.toUpperCase(): Pasa el string a mayuscula y lo retorna
-.trim(): Quita los espacios repetidos al principio y final del string
-.includes(): Verificar si termino esta dentro del string
-.replace(): Reemplazar cierto termino por otro string
-.replaceAll(): Reemplazar cierto termino por otro string (LO HACE PARA CADA VEZ QUE APAREZCA EL TERMINO)
-.repeat(): Permite repetir el string una cantidad de veces y retornar el resultado de la repeticion
*/

/* 
Practica opcional de metodos de string: 
https://docs.google.com/document/d/1cPnl6xtstI65pj_2NYQip8gJo7TgSvu6oO_2g0Q_BvM/edit?usp=sharing
*/


/* let mensaje = 'hola, hoy quiero disparar al aire libre'

let hablo_de_disparos = mensaje.includes('disparar')

if(hablo_de_disparos){
    console.log('Tranquilo!')
} */

/* 
let mensaje_codificado = 'hola-pepe-que-tal'

let mensaje_decodificado = mensaje_codificado.replaceAll('-', ' ')

console.log(mensaje_decodificado) */

/* let estrella = '⭐'

let puntuacion = 4

let mensaje_puntuacion = estrella.repeat(puntuacion)

console.log('Has sacado: ' + mensaje_puntuacion) */

/* let nombre = 'pepe'

console.log(nombre.length)
console.log(nombre[0]) */

//Funciones
//Nos permiten guardar bloques de codigo
//Las funciones siempre tienen un valor de retorno, en caso de que no este definido devolveran undefined

//Declaracion de una funcion
//Guardamos en memoria que hace la funcion saludar
/* function saludar () {
    alert('Hola me llamo Pepe')
} */


//Invocar, llamar, ejecutar son sinonimos 'dar play a la funcion'
//saludar()
//saludar()
//saludar()


//Referenciacion de una funcion
//Trasmitimos lo que hace la funcion a la variable_rara, osea que variable_rara ahora guarda una funcion ES DECIR, que variable_rara ES UNA FUNCION
/* let variable_rara = saludar

variable_rara() */

//Trasmitimos un valor de precio y la funcion calculara el 21% del precio trasmitido y mostrara por consola
//precio es un parametro que representa el precio
/* function calcularIva( precio ){
    let iva = precio * 0.21
    console.log('El iva es ' + iva)
}

calcularIva( 200 )
calcularIva( 600 ) */


//f(x) = 2x + 1
//f(x = 3) = 2.3 + 1
//f(x = 3) = 6 + 1 = 7

//f(x = 4) = 2.4 + 1 = 9

//Idealmente las funciones deben ser agnosticas, ej: no le importan de donde vienen los numeros ni para que se usaran
//Idealmente las funciones deben tener una responsabilidad
//Cuales son las responsabilidades de esta funcion?
//sumar
//Las funciones tienen contratos, basicamente compromisos con nuestro codigo

//EJ: la funcion sumar espera recibir un numero_1 y numero_2, ambos datos deben ser number, numero_1 representa el primer valor a sumar y numero_2 el segundo. Tambien la funcion se compromete a retornar un numero que sera el resultado de la suma de numero_1 y numero_2


/**
 * Suma dos numeros y devuelve el resultado
 * 
 * @param {number} numero_1 El primer numero a sumar
 * @param {number} numero_2 El segundo numero a sumar
 * @returns {number} El resultado de la suma
 */
function sumar(numero_1, numero_2){
    numero_1 = numero_1 - 10
    return numero_1 + numero_2
}
//let  numero_1 = 90
//let resultado = sumar(numero_1, 180)

/* document.write(resultado) */

//Link tarea de funciones: https://docs.google.com/document/d/1wPi6o8t8cGyhAoGfW9RHIGNQrefuia__g2f9CH4QY5Q/edit?usp=sharing
//Enfocarse en las que empiezan como 'define una funcion o confecciona una funcion'


//Tipos de datos
//primitivos
//string, number, boolean, null, undefined

//objeto/complejos:
//-functions
//-objetos
//-arrays

//Objetos:

//Un objeto nos permite guardar una serie de propiedades y valores.
//EJ: Queremos guardar el nombre, dinero y apellido de una usuario

let usuario_1 = {
    "nombre": 'pepe',
    dinero: 10,
    "apellido": 'suarez',
    "NUMERO CUIT": 1223334445
}
let propiedad_elegida = prompt('Que propiedad queres elegir: nombre, dinero, apellido, NUMERO CUIT')

console.log('El valor de ' + propiedad_elegida + ' es ' + usuario_1[propiedad_elegida])

//Notacion de corchetes
//console.log("hola " + usuario_1['nombre'])

//Notacion de puntos
//console.log("hola " + usuario_1.nombre)

let estado_calculadora = {
    numero_1: null,
    numero_2: null,
    operacion_seleccioada: null
}
estado_calculadora.numero_1 = prompt("numero 1")