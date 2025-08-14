/*
Tipos de datos primitivos 
-number
-string
-boolean
-undefined
-null
*/
/* 
Valores falsy:
    - 0
    - NaN
    - undefined
    - ''
    - null
*/

/* 
RECOMENDACION/REGLA:
    -SIEMPRE trata de que tu variable se mueva en ciertos tipos de datos, ej: 
        - nombre: string | null, 
        - edad: number | null, 
        - es_mayor_de_edad: boolean
    Esto lo hacemos para que sea mas facil pensar los contratos del codigo
*/


//Declaramos la variable dato solicitado y asignamos
//Cuales son los contratos de esta variable?
//Es un string igual a lo que escribio el usuario o un null si el usuario cancelo operacion
/* 
let dato_solicitado = prompt('dame tu nombre')

if(dato_solicitado === null){
    console.log('Operacion cancelada')
}
else{
    console.log('El usuario se llama: ' + dato_solicitado)
}
 */

/* 
Tarea

Solicitar:
    dinero 
    edad
    nombre

Si el nombre es pepe dejar pasar
Si no verificar si el dinero es mayor a 50000 y la edad es mayor a 18 y menor a 80
Si no dar una patada ninja

*/

/* Si el valor entre () del IF es truthy se ejecuta el bloque de codigo si es falsy NO se ejecuta y pasa al else (Si hay else) */

/* 
-string: el valor ingresado (Pero ojo, si es '' es que dio aceptar sin ingresar nada)
-null: cancelo operacion
*/
/* let nombre = prompt('Dame tu nombre')
if(nombre){
    console.log('El usuario escribio algo')
}
else{
    console.log('El usuario no escribio nada')
}
 */

/* 
Como nos enseño el profe a solicitar datos en JS?
    - prompt()

Necesito guardar: dinero: number, edad: number y nombre: string, donde lo puedo hacer?
*/
/* string | null */
let nombre = prompt('Ingrese su nombre')

/* string | null */
let edad = prompt('Ingrese su edad')

/* string | null */
let dinero = prompt('Ingrese su dinero')

if(!nombre || !edad || !dinero){
    console.log("Operacion cancelada")
}
else{
    edad = Number(edad)
    dinero = Number(dinero)
    if(edad < 0 || isNaN(edad)){
        console.log('Edad debe ser un dato numerico positivo')
    }
    else if(dinero < 0 || isNaN(dinero)){
        console.log('Edad debe ser un dato numerico positivo')
    }
    else if( !isNaN(nombre) ){
        /* NO es un Not a Number es entonces un NUMBER */
        console.log('Nombre debe ser un Texto no un Numero')
    }
    else{
        /* 
        nombre -> es un string no vacio
        edad -> es un number positivo 
        dinero -> es un number positivo
        */
        if(nombre.trim().toLowerCase() === 'pepe'){
            console.log('dejar pasar')
        }
        else if((edad >= 18 && edad <= 80) && dinero > 50000 ){
            console.log('Dejar pasar pero mirar con cara de enojado')
        }
        else{
            console.log('Patada ninja')
        }
    }
}



