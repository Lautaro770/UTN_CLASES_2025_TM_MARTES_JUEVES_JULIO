/* 
Temas que vimos:
- Tipos de datos
- Operadores aritmeticos
- Comparadores
- Constructores String, Boolean, Number
- funcion console.log

Temas que vamos a ver hoy:
- Operadores logicos ✅
- Variables ✅
- Bloques ✅
    -scopes ✅
- Funciones: prompt, alert, isNaN ✅
- Condicionales
*/

/* Tipos de datos primitivos
    - numeros
    - strings
    - null
    - undefined
    - boolean
*/


//Lista de valores falsy: (osea valores que al transformarlos en booleano devuelven false)
/* 
0,
null,
undefined,
NaN,
'',
*/

//NOT, Negacion: ! 
//La negacion devuelve el booleano opuesto del valor negado
//Para hacer eso, transforma el dato a booleano y devuelve el opuesto

console.log( !10 )
//!Boolean(10)
//!true
//false

!NaN //true
!String(0)
//!'0'
//!Boolean('0')
//!true
//false

!9 / 4
/* 
!Boolean(9) / 4
!true / 4
false / 4
Number(false) / 4
0 / 4
0 
*/

//!( (NaN + String(NaN)) == "NaNNaN" )
//!( (NaN + "NaN") == "NaNNaN" )
//!( (String(NaN) + "NaN") == "NaNNaN" )
//!( "NaNNaN" == "NaNNaN" )
//!( true )
//false


//Or, O logico: ||
/* 
Seleccionara un valor:
    -Si el primer valor es verdadero seleccionara el primero
    -Si el primer valor es falso seleccionara al segundo
*/
//NaN || 900
//900

//dinero = 100
//edad = 2
//puedo_alquilar = edad >= 18 || dinero > 90
//puedo_alquilar = true

//puerto = undefined
//puerto_secundario = 1234
//puerto_seleccionado = puerto || puerto_secundario || 8080
//1234

//numero_seleccionado = 15
//El numero ganador es un numero menor a 8 o mayor a 20
//ganaste = numero_seleccionado < 8 || numero_seleccioando > 20
//false

//And, Y logico: &&
/* 
Seleccionara un valor:
    -Si el primer valor es verdadero seleccionara el segundo
    -Si el primer valor es falso seleccionara al primero
*/

70 && NaN //NaN

90 && '' //''

'' && 0 //''

//numero = 10
//numero_es_correcto = numero <= 15 && numero >= 8
//numero_es_correcto -> true

//llamar_a_tecnico = ( no_tengo_luz || no_tengo_agua ) && tengo_dinero

//Variables
//Que son? son un lugar reservado de la memoria donde podemos guardar datos

/* 
var nombre = 'pepe'

console.log('hola ' + nombre) 
*/
//Hoy en dia 12/8/2025 estamos en ES2025 || ES16
//Cuantos tipos de variables hay? 3
//VAR -> versiones inferiores a ES5 (EcmaScript) solamente existia var 🤬

//Se pueden reasignar
//Se pueden redeclarar (Y se comportan igual a una reasignacion)
//Si no se inicializa el valor, por defecto es undefined
//Tiene hoisting implicito, el hoisting es la practica de declarar todas las variables arriba de todo el script

/* 
console.log(nombre)
var nombre = 'pepe'
var edad = 80
console.log('hola')
var dinero = 9
 */



//LET -> ES6 > (Javascript moderno) 🤩
//Se pueden reasignar
//Si no se inicializa el valor, por defecto es undefined
//No se pueden redeclarar (en el mismo bloque)
//No tiene hoisting


/*
let nombre 
nombre = 'pedro' 
*/



//CONST -> ES6 > (Javascript moderno) 💤

//NO se pueden reasignar
//NO TIENE VALOR POR DEFECTO, DEBE TENER VALOR INICIAL
//NO se pueden redeclarar 
//NO tiene hoisting

/* Las constantes que tiene datos primitivos se las suele declarar con mayuscula  */
/* 
const PI = 3.14
const PORT = 8080 
*/

//Bloque de codigo:
//Un fragmento de codigo

/* 
{
    console.log('hola')
} 
*/

//scopes

/* let nombre = 'pepe'

{
    let nombre = 'juan'
    console.log(nombre)
    {
        let nombre = 'maria'
        console.log(nombre)
    }
    console.log(nombre)
}

console.log(nombre) */
/* let nombre = 'pedro'
{
    nombre = 'juan'
    {
        nombre = 'maria'
    }
}
console.log(nombre) */

/* let nombre = 'pepe'
console.log(nombre) //pepe
{
    let nombre = 'juan'
    console.log(nombre) //juan
    {
        let nombre = 'maria'
        console.log(nombre) //maria
    }
    console.log(nombre) //juan
    {
        nombre = 'pedro'
        console.log(nombre) //pedro
        {
            nombre = 'julieta'
            console.log(nombre) //julieta
        }
        console.log(nombre) //julieta
    }
    console.log(nombre) //julieta
}
console.log(nombre) //pepe */

/* pepe, juan, maria, juan, pedro, julieta, julieta, julieta, pepe */

//Garbage Collection
//El recolector de basura va a reconocer que una vez ejecutado el bloque, numero ya no tiene sentido que se guarde en la memoria, por ende lo eliminara
/* {
    let numero = 0
    console.log(numero)
} */

//VAR NO TIENE SCOPES, OSEA SIEMPRE ES GLOBAL

/* 
{
    var numero = 10
}
 */

/* let nombre = 'pepe'
{
    let nombre
    console.log(nombre)
} */


//Funciones nativas
//Son funciones que vienen en el lenguaje
//TODAS las funciones tienen retorno
//Que es el retorno?
//Es el resultado de la funcion, cuando la funcion se termine de ejecutar retornara algo, si no tiene retorno suele ser undefined

//alert -> nos permite mandar un popup en el navegador
//alert('Hola que tal')

//prompt -> nos permite mandar un popup pero con un input (NOS PERMITE SOLICITAR UN DATO)
//si le da al boton de aceptar retorna el string escrito por el usuario o null si le da al boton de cancelar

/* let mensaje = prompt('Escribe algo')
console.log(mensaje) */


/* 
NaN es el unico valor incomparable, es decir nisiquiera al compararlo consigo mismo da verdadero
( 'hola' - 'chau' ) == NaN -> false
NaN == NaN
false

Pedi un numero y validalo

let numero = prompt('dame un numero por favor') //escribio 'hola'
numero = Number(numero) //NaN
let es_numero_valido = numero != NaN
*/

/* 
let numero = prompt('dame un numero por favor') //escribio 'hola'
numero = Number(numero) //NaN
//Cuando es un numero valido? cuando NO sea un NaN
let es_numero_valido = !(isNaN(numero)) 

console.log(es_numero_valido) 
*/

//Si la persona se llama pepe lo dejo pasar
//Sino le doy una patada ninja


//IF es para hacer condiciones
//Else se ejecuta en caso de que IF no se ejecute
//Else siempre debe ir seguido de un IF

/* let nombre = prompt('Dame tu nombre')

nombre = nombre.trim() // -> Quitamos los espacios demas al principio y fin de un string. EJ: 'hola  '.trim() -> 'hola'
nombre = nombre.toLowerCase() // -> pasamos el nombre a minuscula

if( nombre === 'pepe'  ){
    console.log('te dejo pasar')
}
else{
    console.log('patada ninja')
} */

//Si el dia es lunes escribir ☕
//Si el dia es martes escribir ☢🆘
//Si el dia es miercoles escribir 💤
//Si el dia es jueves escribir 😨
//Si el dia es viernes escribir 😁

let dia_semana_actual = 'lunes'

if(dia_semana_actual === 'lunes'){
    console.log('☕')
}
else if(dia_semana_actual === 'martes'){
    console.log('☢🆘')
}
else if(dia_semana_actual === 'miercoles'){
    console.log('💤')
}
else if(dia_semana_actual === 'jueves'){
    console.log('😨')
}
else if(dia_semana_actual === 'viernes'){
    console.log('😁')
}
else{
    console.log('Aprovecha que estas de finde 😴😎🧐')
}

/* 
Tarea

Solicitar:
Dinero edad y nombre

Si el nombre es pepe dejar pasar
Si no verificar si el dinero es mayor a 50000 y la edad es mayor a 18 y menor a 80
Si no dar una patada ninja

*/