import { useNavigate } from "react-router-dom"
import { useOperationsContext } from "../context/OperationsContext";
import ButtonAdd from "./ButtonAdd";

export default function CardPizza({ pizza }) {

    const navigate = useNavigate()
    const {FormatCoin} = useOperationsContext()

    return (
        <div className="mb-2 col-12 col-md-6 col-xl-3 pb-3">
            <div className="card card-hover ">
                <img src={pizza.img} className="card-img-top" alt="card description" />
                <div className="card-body">
                    <h5 className="text-center"><b>{pizza.name.charAt(0).toUpperCase() +        
                        pizza.name.slice(1)}</b></h5>
                    <hr />
                    <p><b>Ingredientes:</b></p>
                    <ul className="list-unstyled ps-4">
                        {pizza.ingredients.map((item) => (
                            <li key={Math.random()}>🍕 {item}</li>     
                        ))}
                    </ul>
                    <hr />
                    <h4 className="text-center"><b>{FormatCoin(pizza.price)}</b></h4>
                    <div className="d-flex gap-3 justify-content-center p-2">
                        <button className="btn btn-primary" onClick={() => { 
                            navigate(`/pizzas/${pizza.id}`);
                        }}>Ver más 👀</button>
                        <ButtonAdd idPizza={pizza.id} />
                    </div>
                </div>
            </div>
        </div>
    )
}