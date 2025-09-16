import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'
import ColorCard from './Components/ColorCard/ColorCard'
import ProductList from './Components/ProductList/ProductList'

function App() {
 
 



  
  
  return (
    <div>

      <h1>Hola mundo</h1>
      <ProductList/>

      <ColorCard
        likes={63}
        date='Yesterday'
        colors={[
          '#708993',
          '#139ed5ff',
          '#938970ff',
          '#937090ff'
        ]}
      />
      <ColorCard
        likes={63}
        date='Yesterday'
        colors={[
          '#708993',
          '#139ed5ff',
          '#938970ff',
          '#937090ff'
        ]}
      />
      <ColorCard
        likes={63}
        date='Yesterday'
        colors={[
          '#708993',
          '#139ed5ff',
          '#938970ff',
          '#937090ff'
        ]}
      />
    </div>
  )
}

export default App


