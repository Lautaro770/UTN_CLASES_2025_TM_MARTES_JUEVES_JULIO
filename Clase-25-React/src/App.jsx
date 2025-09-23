import React, { useState } from 'react'
import MessageScreen from './Screens/MessageScreen/MessageScreen'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'

function App() {
 
  return (
    <div>
      <Routes>
        <Route 
          path='/' 
          element={ <HomeScreen />}
        />
        <Route 
          path='/contacto' 
          element={<MessageScreen />}
        />
      </Routes>
     
    </div>
  )
}

export default App


