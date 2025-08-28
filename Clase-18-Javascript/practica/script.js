
/* const user_2_info = {
    id: 2,
    nombre: 'Pepe Suarez',
    dni: '11222333',
    edad: 49
} */

/* 
-Llamar al tr por id "usuario_2"
-Generar el string con el html interno que ira dentro de ese elemento
-Asignar dicho string al innerHTML del elemento
*/
/* const informacion_usuario = document.getElementById("usuario_2")
informacion_usuario.innerHTML = `
    <td>${user_2_info.id}</td>
    <td>${user_2_info.nombre}</td>
    <td>${user_2_info.dni}</td>
    <td>${user_2_info.edad}</td>
` */

const users = [
    {
        id: 1,
        nombre: 'Juan Pérez',
        dni: '12345678',
        edad: 35
    },
    {
        id: 2,
        nombre: 'Pepe Suarez',
        dni: '11222333',
        edad: 49
    },
    {
        id: 3,
        nombre: 'maria Suarez',
        dni: '11222333',
        edad: 55
    }
]

const users_2 = [
    {
        id: 1,
        nombre: 'Maria',
        dni: '12345678',
        edad: 35
    },
    {
        id: 2,
        nombre: 'Pedro',
        dni: '11222333',
        edad: 49
    },
    {
        id: 3,
        nombre: 'Juan',
        dni: '11222333',
        edad: 55
    }
]

const table_body_users_HTML = document.getElementById('table-body_users')


let string_users = ''
for (const user of users) {
    console.log(user)
    string_users = string_users + `
    <tr>
        <td>${user.id}</td>
        <td>${user.nombre}</td>
        <td>${user.dni}</td>
        <td>${user.edad}</td>
    </tr>
    `
}
table_body.innerHTML = string_users;
console.log(string_users)

//Generar un string con los <tr></tr> y sus respectivos <td></td> a partir del array de users
/* 
<tr>
    <td>ID</td>
    <td>Nombre</td>
    <td>DNI</td>
    <td>Edad</td>
</tr>
*/

/* 
PARA LOS QUE TERMINARON EL EJERCICIO ANTERIOR
Crear una funcion que permita hacer esta renderizacion de usuarios en tabla al pasarle una x lista de usuarios
renderTablaUsuarios(usuarios)
*/

const products = [
    {
        id: 1,
        name: 'tv_samsung'
    },
    {
        id: 3,
        name: 'tv_samsung 44'
    },
    {
        id: 3,
        name: 'tv_samsung 44'
    },
    {
        id: 3,
        name: 'tv_samsung 44'
    }
]
let string = ''
for(const producto of products){
    string = string + `
        <div>
            <span>Id: #${producto.id}</span>
            <h2>${producto.name}</h2>
            <button>Comprar</button>
        </div>
        <hr/>
    `
}

console.log(string)

const products_HMTL = document.getElementById('products')
products_HMTL.innerHTML = string