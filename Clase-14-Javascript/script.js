/* 
Bucles
    -FOR 
    -WHILE

Un bucle es una sentencia en JS que nos permite repetir la ejecucion de un bloque de codigo
Hay 2 tipos de bucles:
    - Bucle de conteo / con limite: FOR
        -Lo usamos cuando queremos repetir algo una X cantidad de veces y la X podemos conocerla
            -Ejemplos:
                -Quiero mandar un mail a todos los usuarios de mi empresa
                -Quiero mostrar cada caracter por consola de la palabra 'hola'
        -Para hacerlo:
            -Siempre separar el "que vamos a repetir" del "cuantas veces"


    - Bucle condicional: WHILE
        -Lo usamos cuando queremos repetir algo una x cantidad de veces pero la X solo podemos conocerla mediante una condicion
            -Ejemplos:
                -Quiero decir 'hola' cada 5 seg hasta que se haga de noche
                -Quiero dejar pasar como valida una contraseña si se escribe correctamente
        -Para hacerlo:
            -Siempre separar el "que vamos a repetir" de la "condicion"
        -Como funciona?:
            -Si recibe un truthy se ejecuta el bloque nuevamente, sino se corta (Se termina y pasa a la sig linea de codigo)
        -Se puede leer como MIENTRAS esto se cumpla REPITO este bloque de codigo
        -Sintaxis: while(condicion){Bloque de codigo}
        -A tener en cuenta:
            -Hay que evitar SIEMPRE el WHILE TRUE, basicamente evitar que la condicion del while sea siempre true, ya que eso es un bucle INFINITO (Peligroso ☢☢🆘😈💀)
*/

/* 
Solicitar el nombre y validarlo. SI se escribe mal volver a solicitar.

Que vamos a repetir?
    - Solicitar el nombre (prompt)

Condicion?
    - Si es invalido el nombre (Si es '', null o numero (number string))

*/

/* let nombre = prompt('Ingresa el nombre')

while(!nombre || !isNaN(nombre)){
    alert('Error: Nombre no valido')
    nombre = prompt('Ingresa el nombre')
} */


/* 
While con flags:
let nombre = prompt('Ingresa el nombre')
let condicion_nombre = true

while(condicion_nombre){
    if(!nombre || !isNaN(nombre)){
        alert('Error: Nombre no valido')
        nombre = prompt('Ingresa el nombre')
    }else{
        condicion_nombre = false
    }
    
}
*/


/* 
Las entradas de datos se hacen con PROMPT
Las salidas de datos se hacer con ALERT o CONSOLE.LOG

Tarea de while y for:
    Solicitar 3 notas (notas trimestrales), acumularlas (sumarlas entre si) y obtener el promedio
        -Las notas se deben validar (numero, entre 0 y 10), sino se ingresa una nota correcta volver a solcitar


    Guardar en memoria una contraseña (la que gustes), y solcitar al usuario una contraseña, si el usuario escribe una contraseña distinta, volver a solicitar. Si es correcta decir contraseña correcta.
 

    Solicitar una operacion matematica, si no se elige UNA operacion correcta volver a solcitar
    Luego solicitar 2 numeros y validar que sean numeros, en caso de no serlo volver a solicitar
    Condicionar y hacer la operacion matematica, EJ: operacion = '+', numero_1 = 1, numero_2 = 3, resultado = 4

    Para que una operacion sea correcta debe cumplir con:
        -No puede ser null o ''
        -Tiene que ser '+', 'sumar', '-','restar', '*', 'multiplicar', '/', 'dividir'
            -Si el sumar tiene mayusculas se lo deberia aceptar igualmente, EJ: 'SuMar' (Pro Tip: usar el .toLowerCase())
    

*/

/* 
Bucle FOR
*/

/* Solicitar 5 numeros y acumularlos */

//Cuantas veces repetimos: 5
//Que repetimos? la acumulacion


/* 
Los bucles FOR tienen Iteraciones
*/

/* let resultado = 0

for(
    let iterador = 1; //donde queremos que empieze el contador
    iterador <= 5; //LIMITE: Mientras esta condicion se cumpla el bucle se ejecutara
    iterador = iterador + 1 //Ritmo de actualizacion
){
    let numero = prompt('ingresa el numero')
    resultado = resultado + Number(numero)
}

alert('El resultado de su compra es: $' + resultado) */

