/*
DRY: Dont repeat yourself = NO TE REPITAS
*/

/*
    Solicitar 3 notas (notas trimestrales), acumularlas (sumarlas entre si) y obtener el promedio
        -Las notas se deben validar (numero, entre 0 y 10), sino se ingresa una nota correcta volver a solcitar
*/

//Bucle a usar: FOR
//Repetir: Ingreso de notas y la acumulacion
//Cuantas veces? 3

/* 
let cantidad_de_notas = 3
let notas = 0

for(
    let iteracion = 1; 
    iteracion <= cantidad_de_notas; 
    iteracion = iteracion + 1
){

    let nota = Number(prompt("Ingrese la nota " + iteracion + ":"));
    while (isNaN(nota) || (nota < 0 && nota > 10)) {
        nota = Number(prompt("Valor inválido. Ingrese la nota " + iteracion + " (0 a 10):"));
    }
    notas = notas + nota
}


let promedio = notas / cantidad_de_notas;

alert("Promedio: " + promedio) 
*/

/* 
Guardar en memoria una contraseña (la que gustes), y solcitar al usuario una contraseña, si el usuario escribe una contraseña distinta, volver a solicitar. Si es correcta decir contraseña correcta.
*/

/* 
let contraseña = 'Fernanda'
let contraseña_solicitada = prompt('Ingrese contraseña')
while (contraseña != contraseña_solicitada) {
    alert('Error: Contraseña incorrecta, volver a intentar')
    contraseña_solicitada = prompt('Ingrese contraseña')
}

if (contraseña === contraseña_solicitada) {
    alert('Contraseña correcta')
} */


/* 
Solicitar una operacion matematica, si no se elige UNA operacion correcta volver a solcitar
    Luego solicitar 2 numeros y validar que sean numeros, en caso de no serlo volver a solicitar
    Condicionar y hacer la operacion matematica, EJ: operacion = '+', numero_1 = 1, numero_2 = 3, resultado = 4

    Para que una operacion sea correcta debe cumplir con:
        -No puede ser null o ''
        -Tiene que ser '+', 'sumar', '-','restar', '*', 'multiplicar', '/', 'dividir'
            -Si el sumar tiene mayusculas se lo deberia aceptar igualmente, EJ: 'SuMar' (Pro Tip: usar el .toLowerCase())
*/

/* pedir el primer numero */
let num1 = prompt("Ingresa el primer número:", "1, 2, 3, 4, etc...");

while (
    !num1 
    || isNaN(num1) 
    || num1.trim() === ""
) {

    num1 = prompt("Eso no es un número válido. Ingresa el primer número:");
}

num1 = Number(num1);


/* pedir la condicion matematica */
let condicion = prompt("Indica la condición matematica").toLocaleLowerCase().trim();

while (
    condicion !== "sumar" && condicion !== "+"
    && 
    condicion !== "multiplicar" && condicion !== "*"
    && 
    condicion !== "dividir" && condicion !== "/"
    &&  
    condicion !== "restar" && condicion !== "-" 
) {

    alert("No ingresaste una condicion matematica valida")
    condicion = prompt("Indica la condición matematica").toLocaleLowerCase().trim();
}


/* pedir el segundo numero */
let num2 = prompt("Ingresa el segundo número:", "1, 2, 3, 4, etc...");

while (!num2 || isNaN(num2) || num2.trim() === "") {

    num1 = prompt("Eso no es un número válido. Ingresa el primer número:");
}

num2 = Number(num2);


/* para dar el resultado */
if (condicion === "sumar" || condicion === '+') {

    let resultado = num1 + num2
    alert("el resultado es: " + resultado)
}
else if (condicion === "-" || condicion === "restar") {

    let resultado = num1 - num2
    alert("el resultado es: " + resultado)
}  
else if (condicion === "*" || condicion === "multiplicar") {

    let resultado = num1 * num2
    alert("el resultado es: " + resultado)
} 
else if (condicion === "/" || condicion === "dividir") {

    let resultado = num1 / num2
    alert("el resultado es: " + resultado)
}