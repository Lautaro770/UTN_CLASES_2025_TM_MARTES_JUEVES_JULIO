import React, { useState } from 'react'
import MessageScreen from './Screens/MessageScreen/MessageScreen'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './styles/global.css'

function App() {
 
  return (
    <div>
      <Routes>
        <Route 
          path='/' 
          element={ <HomeScreen />}
        />
        <Route 
          path='/contacto/:id_contacto' 
          element={<MessageScreen />}
        />
      </Routes>
     
    </div>
  )
}

export default App


