//Objetos
const persona = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 19
}

//Reasignacion de propiedad
persona.nombre = 'julieta'

//Extension de propiedad = crear una nueva propiedad
persona.dinero = 20

//Eliminacion de propiedad
delete persona.edad
console.log(persona.mama)

/* 
Crear una funcion que se llame calcularIva 
    Parametros:
        - precio: number y representa el valor monetario.
        - tipo_factura: string y debe ser alguno de estos dos valores: "A" | "B".
    Que debe hacer?
        Dependiendo el tipo_factura:
            - Si es A retornara un objeto con este formato { iva: valor_iva, precio_final: precio_original}
            - Si es B retornara un objeto con este formato { iva: valor_iva, precio_final: precio_original + valor_iva}
        Si resultado.precio_final es igual a null significa que la funcion fallo
 */

/* Los distintos tipos de factura */
/* Diccionarios */
/* const TIPO_FACTURA = {
    A: 'a',
    B: 'b'
}
const PORCENTAJE_IVA = (21 / 100)

function calcularIva (precio, tipo_factura){
    let resultado = {
        iva: precio * PORCENTAJE_IVA,
        precio_final: null //Todavia no se cual sera el precio final, asi que lo marco como null
    }

    if(tipo_factura.toLowerCase() === TIPO_FACTURA.A){ 
        resultado.precio_final = precio
    }
    else if(tipo_factura.toLowerCase() === TIPO_FACTURA.B){
        resultado.precio_final = precio + resultado.iva
    }

    return resultado
}

const precio_compra = 300
const tipo_factura_compra = TIPO_FACTURA.B
const objeto_de_iva_de_compra = calcularIva(precio_compra, tipo_factura_compra)
console.log(objeto_de_iva_de_compra)
 */
//strings magicos
//Son strings que estan sueltos en el programa y que cumplen funciones, pero que no esta claro ni definido su contexto


//Arrays

//Sirven para enlistar datos, tienen un orden posicional y pueden ser modificados
let nombres = [
    'pepe',
    'pedro',
    'juan',
    'julieta',
    'maria'
]

//Los arrays estan ordenados por su posicion, el primer elemento tiene el indice (posicion) 0

//Accedemos al valor de la primera posicion de la lista
//console.log(nombres[0])

//Modificamos el elemento de indice 0
//nombres[0] = 'pedrita'

//Acceder a la cantidad de elementos del array
//console.log(nombres.length)


//Array de objetos
let productos = [
    {
        nombre: 'TV samsung 32"',
        precio: 400000,
        id: 1
    },
    {
        nombre: 'TV samsung 42"',
        precio: 550000,
        id: 2
    },
]

console.log(productos[1].nombre)


/* 
Hacer una lista 3 de paises donde cada pais tenga

nombre
cantidad_hab
id
continente
fecha_de_creacion

*/

let paises = [
    {
        nombre: "Argelia",
        cantidad_hab: 8000000,
        id: 1,
        continente: "Africa",
        fecha_de_creacion: 1962,
    },
    {
        nombre: "Estados Unidos",
        cantidad_hab: 230000000,
        id: 2,
        continente: "America",
        fecha_de_creacion: 1770,
    },
    {
        nombre: "Francia",
        cantidad_hab: 40000000,
        id: 3,
        continente: "Europa",
        fecha_de_creacion: 1789,
    }
]


let total_habitantes = 0

//Recorrer un array
/* for(
    let indice = 0; 
    indice < paises.length; 
    indice = indice + 1
){
    let pais = paises[indice]
    console.log(pais)
    total_habitantes = total_habitantes + pais.cantidad_hab
}

console.log(total_habitantes) */

//FOR OF
//Por cada pais de mis paises hare esto:
for( let pais of paises){
    total_habitantes = total_habitantes + pais.cantidad_hab
}
console.log(total_habitantes) 

let carrito = [
    {
        id_producto: 1,
        titulo: 'Tv samsung 32"',
        cantidad_comprada: 2,
        precio: 300000
    },
    {
        id_producto: 2,
        titulo: 'alfajor',
        cantidad_comprada: 3,
        precio: 1300
    },
    {
        id_producto: 3,
        titulo: 'Shampoo',
        cantidad_comprada: 60,
        precio: 8000
    }
]
//1. Calcular el total de la compra
let precio_final = 0
for(let item of carrito){
    precio_final = precio_final + (item.precio * item.cantidad_comprada)
}
console.log('El precio final de la compra es: $' + precio_final)

//2. Crear una funcion que dado un carrito nos calcule el total de la compra EJ: calcularTotalCompra(carrito) retorna precio_final

function calcularTotalCompra(carrito){

    let precio_final = 0;
    for(let item of carrito)
    {
        precio_final = precio_final + (item.precio * item.cantidad_comprada);
    }
    return precio_final;
}


//3. Crear una funcion llamada buscar productoDelCarritoPorId(carrito, id_producto) debe retornar el producto encontrado o null en caso de no hacerlo

//4. Crear una funcion llamada buscarProductoDelCarritoPorTermino(carrito, termino_de_busqueda) debe retornar el producto que su titulo incluya el termino de busqueda: Ej:  buscarProductoDelCarritoPorTermino(carrito, 'al') debe retornar el producto afajor. Pro tips: Acuerdensen que existe el metodo .includes para strings
//EJEMPLO DE FILTRO POR NOMBRE DEL EJERCICIO 4
//item.nombre.toLowerCase().includes(termino_busqueda.trim().toLowerCase('SH'))



function buscarPorId ( lista, id_buscado ){
    for(let elemento of lista){
        if(elemento.id === id_buscado){
            return elemento
        }
    }
    return null
}

function productoDelCarritoPorId(carrito,id_producto){
    for (let index = 0; index < carrito.length; index++) {
        let item = carrito[index]
        if(item.id === id_producto){
            return item
        }
    }
    return null
}
console.log(productoDelCarritoPorId(carrito,2))


    
function buscarProductoDelCarritoPorTermino(carrito, termino_de_busqueda){
    for(let nombre_producto of carrito){
        if(nombre_producto.titulo.toLowerCase().includes(termino_de_busqueda.trim().toLowerCase())){
            return nombre_producto.titulo;
        }
    }
    return null;
}
let mostrar_producto_por_nombre = buscarProductoDelCarritoPorTermino(carrito, termino_de_busqueda)
alert("tu estaras buscando: "+ mostrar_producto_por_nombre)