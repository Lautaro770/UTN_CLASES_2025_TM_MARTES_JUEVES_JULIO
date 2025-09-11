import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'

//Los archivos que contienen componentes tambien van con mayuscula, PascalCase / UpperCamelCase

//Las funciones que retornan HTML las llamamos como componentes
//Los componentes se declaran como mayuscula, PascalCase / UpperCamelCase
//App es el componente donde se renderizara toda la app
function App() {

  return (
    <div>
      <h1>Hola mundo</h1>
      <ProductCard 
        name='polystation' 
        price={9000}
        bg_color={'#708993'}
      />
      <ProductCard 
        name='papafritas' 
        price={900000}
        bg_color={'#139ed5ff'}
      />
      <ProductCard 
        name='mesa de madera' 
        price={9000.10}
        bg_color={'#938970ff'}
      />
      <ProductCard 
        name='tv samsung' 
        price={9000.40}
        bg_color={'#937090ff'}
      />
    </div>
  )
}

export default App


