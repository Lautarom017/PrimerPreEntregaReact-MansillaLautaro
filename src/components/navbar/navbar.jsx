import CartWidget from "../cardwidget/cardwidget"

const Navbar = () => {

    return(
        <nav>
            <h1>Jarana</h1>
            <div>
                <ul>
                <a href="#">Productos</a>
                <a href="#">Arma tu combo</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
                <CartWidget />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar