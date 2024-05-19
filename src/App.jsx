import './App.css'
import './components/navbar/navbar.jsx'
import Navbar from './components/navbar/navbar.jsx'
import ItemListContainer from './containers/itemListContainer/itemListContainer.jsx'
function App() {


  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Hola, somos Jarana.'/>
    </div>
  )
}

export default App