import { useNavigate } from "react-router-dom";

export function ItemDetail(item) {
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }
    
    return (
        <div className='Producto'>
            <h2>{item.nombre}</h2>
            <img src={`../../img/productos/${item.img}`}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>

            <button className="ButtonItem" onClick={handleVolver}>Volver</button>
        </div>
    );
}
