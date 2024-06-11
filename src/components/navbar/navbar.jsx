import CartWidget from "../cardwidget/cardwidget"
import './navbar.css'

const Navbar = ({ handleCategoria }) => {

    const cambiarCategoria = (categoria) => {
        handleCategoria(categoria)
    }
    return(
        <nav className="navbar">
            <h1 onsClick={() => cambiarCategoria('todos')}>Jarana</h1>
                <p onClick={() => cambiarCategoria('electronics')}>Electronica</p>
                <p onClick={() => cambiarCategoria('jewelery')}>Joyeria</p>
                <CartWidget />
        </nav>
    )
}

export default Navbar