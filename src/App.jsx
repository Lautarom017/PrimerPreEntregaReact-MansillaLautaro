import './App.css'
import { useState } from 'react'
import './components/navbar/navbar.jsx'
import Navbar from './components/navbar/navbar.jsx'
import ItemListContainer from './containers/itemListContainer/itemListContainer.jsx'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const [categoria, setCategoria] = useState('todos')


  return (
    <div>
      <BrowserRouter>
        <Navbar handleCategoria={setCategoria}/>
        <ItemListContainer categoria={categoria}/>
        <ItemDetailContainer idProduct={7}/>
      </BrowserRouter>
    </div>
  )
}

export default App