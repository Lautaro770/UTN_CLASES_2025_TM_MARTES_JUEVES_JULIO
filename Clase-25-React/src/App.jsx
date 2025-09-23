import React, { useState } from 'react'
import MessageScreen from './Screens/MessageScreen/MessageScreen'
import { Route, Routes } from 'react-router'

function App() {
 
  return (
    <div>
      <Routes>
        <Route 
          path='/' 
          element={ <MessageScreen />}
        />
        <Route 
          path='/test' 
          element={<h2>Hola</h2>}
        />
      </Routes>
     
    </div>
  )
}

export default App


