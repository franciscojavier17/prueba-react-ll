import { Link } from "react-router-dom"

export default function EmptyCart() {
    return (
        <div className="container mt-5 p-5">
            <div className="d-flex flex-column">
                <h1 className="text-center">Carrito 🛒</h1>
                <h5 className="mt-5 text-center">NO HAS AGREGADO NINGÚN PRODUCTO AÚN</h5>
                <h5 className="text-center">Revisa nuestro catálogo de pizzas aquí :</h5>
                <Link to="/" className="links fs-1 text-center">
                    <button type="button" class="btn btn-outline-success">Catálogo</button>
                </Link>
            </div>
        </div>
    )
}