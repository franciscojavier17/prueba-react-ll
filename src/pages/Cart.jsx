import { useUserContext } from "../context/UserContext"
import { useOperationsContext } from "../context/OperationsContext";

import EmptyCart from "../components/EmptyCart"

export default function Cart() {

    const { pizzas, } = useUserContext()
    const { carro, total, SubtractPizza, AddPizza, FormatCoin } = useOperationsContext()

    if (carro.length === 0) return <EmptyCart /> 

    return (
        <div className="container mt-5 p-5">
            <div>
                <h1 className="text-center">Carro 🛒</h1>
                <div >
                    <table className="table table-striped-columns mt-5">
                        <tbody>
                            {carro.map((i) => {
                                let pizza = pizzas.find(item => item.id === i.id)
                                return (
                                    <tr key={i.id}>
                                        <th scope="row">
                                            <img src={pizza.img} className="img-cart" alt="..." />  {pizza.name}
                                        </th>
                                        <th className="text-center fs-4 align-center">
                                            {FormatCoin(Number(i.precio) * Number(i.cantidad))} 
                                        </th>
                                        <td>
                                            <button className="btn btn-sm btn-danger" onClick={() => { SubtractPizza(i.id) }}>-</button>
                                            <button className="btn btn-outline">{i.cantidad}</button>
                                            <button className="btn btn-sm btn-primary" onClick={() => { AddPizza(i.id) }}>+</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <h4>Total: {FormatCoin(total)}</h4>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="button" className="btn btn-outline-success"> Ir al pago💲</button>
                    </div>
                </div>
            </div>
        </div>
    )
}