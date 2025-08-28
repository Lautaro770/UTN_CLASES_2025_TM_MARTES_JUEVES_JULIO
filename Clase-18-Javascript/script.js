/* 
TEMAS DE LA CLASE DE HOY

DOM
SELECTORES
EJEMPLOS
*/

//DOM = Document Object Model 
/* 
Es un objeto de JS que contiene toda la informacion de la pagina en la que estamos
En escencia es una copia del HTML pero en formato JS
*/
//document es el DOM
/* console.dir(document)

let nombre = 'pepe'
 */

//Buscando el elemento de mi HTML por ID
//titulo_HTML es de tipo de dato OBJETO
//Le suelen decir Nodo/node
//El DOM es un conjunto de nodos HTML
//Cada elemento es un nodo, y cada nodo es un objeto -
//que tiene toda informacion del elemento.
/* const titulo_HTML = document.getElementById('titulo')

console.dir(titulo_HTML.innerText)
titulo_HTML.innerText = 'Hola ' + nombre
 */

//GetElementById es un metodo que nos permite llamar a un elemento por ID
//Si el elemento no existe devuelve null

/* let role = 'admin'
const role_info_HTML = document.getElementById('role-info')
role_info_HTML.innerText = 'Rol actual: ' + role


const user_info_HTML = document.getElementById('user-info')
user_info_HTML.innerHTML = '<h2 id="titulo_2" class="titulo">Pepe</h2><hr/><p>Es una persona amable</p>'

const titulo_2_HTML = document.getElementById('titulo_2')
titulo_2_HTML.innerText = 'Nombre: Pepe' */

const usuario = {
    nombre: 'pepe',
    descripcion: 'Pepe es un buen trabajador en la fabrica de chocolate de Willy Wonka',
    estatura: 120
}

//Template strings
let string = `
    <h2>Nombre: ${usuario.nombre + 1}</h2>
    <p>${usuario.descripcion}</p>
    <span>Estatura: ${120}</span>
    <button>Contratar</button>

`
const user_info_HTML = document.getElementById('user-info')
user_info_HTML.innerHTML = string