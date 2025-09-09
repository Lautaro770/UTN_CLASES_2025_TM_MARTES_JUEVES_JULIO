import React from 'react'

//Los archivos que contienen componentes tambien van con mayuscula, PascalCase / UpperCamelCase

//Las funciones que retornan HTML las llamamos como componentes
//Los componentes se declaran como mayuscula, PascalCase / UpperCamelCase
function App() {

  return (
    <div>
      <h1>Hola mundo</h1>
      {/* Instancio mi componente */}
      <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/>
      <CustomComponent/>
      <ProductCard/>
    </div>
  )
}

export default App


//Declaramos nuestro propio componente
//los componentes solo pueden retornar un elemento HTML padre
function CustomComponent (){
  return (
    <div>
      <h2>Que tal?!!!</h2>
      <h3>Hola</h3>
    </div>
  )
}

//Crear un componente que se llame ProductCard
//Debera contener un h3 con un texto (el que ustedes quieran) como titulo del producto
//Debera contener un span con el precio del producto
//Debera tener un boton para comprar el producto
//Toda el contenido de la ProductCard debera estar contenido dentro de un <div></div>

function ProductCard() {
  return (
    <div>
      <h3>
        Play Station 5
      </h3>
      <span>
        precio = $1.000.000
      </span>
      <button>
        Comprar
      </button>
    </div>
  )
}