import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <div className="container mt-5 p-5" >
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary" onClick={() =>
                    navigate("/")
                }>Volver al sitio</button>
            </div>
        </div>
    )
}