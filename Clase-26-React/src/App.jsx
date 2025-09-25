import React, { useState } from 'react'
import MessageScreen from './Screens/MessageScreen/MessageScreen'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import './styles/global.css'
import ContactListContextProvider from './Context/ContactListContext'

function App() {
 
  return (
    <div>
      <ContactListContextProvider>
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
      </ContactListContextProvider>
     
    </div>
  )
}

export default App


function Button (props){
  return (
    /* Children es una prop reservada que es el contenido hijo del button */
    <button>{props.children}</button>
  )
}

/* EJEMPLO DE USO */

/* 
<Button >
  <span>Button 😎</span>
</Button>
*/