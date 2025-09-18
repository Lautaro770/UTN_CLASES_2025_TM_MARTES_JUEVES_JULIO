
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {PI, sumar } from './math.js'
import { x } from './test.js'
import restar from './math.js'

console.log(restar(10, 20))
console.log(PI)
x()


//createRoot le pasas un elemento del DOM y te renderiza dentro de ese elemento tu aplicacion de React
//.render() es un metodo que permite renderizar x cosa dentro del root creado
let elemento_donde_quiero_renderizar_mi_app = document.getElementById('root')
createRoot(
  elemento_donde_quiero_renderizar_mi_app
).render(
  //Asi se invoca a un componente, enrealidad ya no lo llamaremos como 'invocacion' sino le diremos 'instancia'
  //Instanciamos el componente App
  <App />
)
