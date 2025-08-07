/* 
Javascript es un lenguaje de programacion interpretado por V8Engine.
Javascript es un lenguaje de alto nivel.
*/

/* 
Tipos de datos primitivos:
-string: Representan texto alfanumerico
    "hola", "3", " ", "null", 'hola'
-number: Reprensentan a los numeros
    7, -7, 7.14, Infinity, NaN
-boolean: Representan el verdadero y el falso
    true, false
-null: Representa nulidad o ausencia de valor
    null
-undefined: Reprensenta la no definicion de un dato
    undefined
*/

/* 
Transformaciones: 
'3' -> 3: Number('3')
3 -> "3": String(3)
3 -> boolean: Boolean(3) 
*/

/* 
NaN significa Not a Number (no es un numero)
ocurre cuando tratamos de transformar a numero algo que no tiene un valor numerico
*/
//console.log(String(true)) //"true"

/* 
Falsy y truthy
Falsy son los datos que al trasnformarlos en boolean dan false
    -Otra forma mas facil es acordarte los falsy de memoria:
        -false
        -0
        -'' / ""
        -NaN
        -null
        -undefined
truthy son los datos que al trasnformarlos en boolean dan true
    -Otra forma mas facil es acordarte los truthy es saber que todos los datos que no son falsy son truthy
*/


/* 
Operadores aritmeticos 

Contatenacion: +
    -Es la union entre dos strings
    -Ocurre cuando se suman datos y almenos 1 de ellos es string
    -Los datos no string seran transformados a string 
    -SIEMPRE RETORNA UN TEXTO

Suma: +
    -La suma de dos valores
    -Ocurre si no hay string
    -Los datos no numericos seran transformados a numero
    -SIEMPRE RETORNA UN NUMERO

Resta: -
    -La resta de dos valores
    -Los datos no numericos seran transformados a numero
    -SIEMPRE RETORNA UN NUMERO

Division: /
Multiplicacion: *
*/
/* 
Cualquier operacion excepto la concatenacion con NaN siempre da como resultado un NaN
*/

/* 
console.log('hola' + true)

'hola' + String(true)
'hola' + "true"
"holatrue" 
*/

//console.log( 1 + NaN )

/* 
console.log(1 + undefined)
1 + Number(undefined)
1 + NaN
NaN
 */

/* 
console.log(true + false)
Number(true) + Number(false)
1 + 0
1 
*/
/*
console.log("hola" - 90)
Number('hola') - 90
NaN - 90
NaN 
*/

/* 
Primero en entrar es el ultimo en salir
CallStack: Pila de llamadas
-Llamo al console.log
-Llamo al String()
-Resuelvo String()
-Resuelvo console.log
 */


/* 
console.log(String(null) + true)

"null" + String(true)
'null' + 'true'
'nulltrue' 
*/


/* 
Tarea:
-7 + null
-8 * String(NaN)
-NaN + ""
-null + undefined
*/

/* 
Comparadores:
-Se usan para comparar datos
-Siempre retornar boolean
Igualdad: ==
Diferencia: !=
Estricta igualdad: === (Igualdad de valor y de tipo de dato)
Estricta diferencia: !==
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: >=
*/

console.log('matias' == 'pepe')
console.log(22 == 40)
console.log(1 == true)
console.log(1 == '1')
console.log('matias' != 'pepe')
console.log(1 === true)
console.log(1 === '1')
console.log(1 !== '1')
console.log(4000 >= 10000)
/* 

Number(null) = 0

null no puede ser igual a otro dato (Excepto null y undefined)
null == 0 = false
null > 0 = false
null < 0 = false
null >= 0 = true NO TIENE SENTIDO, ERROR DE JS
*/
