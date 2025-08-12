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
- Bloques 
    -scopes
- Funciones: prompt, alert, isNaN
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
//No se pueden redeclarar 
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
