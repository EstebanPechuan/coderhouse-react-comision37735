import './Item.css'

export function Item({ item }) {
    console.log(item.img);
    
    return (
        <div className='Producto'>
            <h2>{item.nombre}</h2>
            <img src={`../../img/productos/${item.img}`}/>
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
        </div>
    );
}