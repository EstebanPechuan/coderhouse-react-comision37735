import { Item } from "../Item/Item"
import './ItemList.css'

export function ItemList({items}) {

    return (
        <div className="ListaProductos">
            <h2>Catálogo de Productos</h2>

            <div className="Catalogo">
                { items.map( (item) => <Item key={item.id} item={item} /> )}
            </div>

        </div>
    )
}