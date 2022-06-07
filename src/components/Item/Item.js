import './Item.css'
import { Link } from "react-router-dom"

export function Item({ item }) {    
    return (
        <div className='Producto'>
            <h2>{item.nombre}</h2>
            <img src={`../../img/productos/${item.img}`}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>

            <Link to={`/item/${item.id}`}>
                <button className="ButtonItem">Más info</button>
            </Link>
        </div>
    );
}