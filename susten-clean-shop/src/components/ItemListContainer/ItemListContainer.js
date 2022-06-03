import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import { pedirDatos } from "../../mock/pedirDatos"

export function ItemListContainer() {
    const [items, setItems] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((resp) => {
                setItems( resp )
            })
        }, [])
    return ( 
        <div className="ItemList">
            {/* <h2>Entrega N° 4 - Contador con botón</h2> */}

            {/* <div className="ItemListCards">
                <ItemCount title="Producto 1" stock={5} initial={1} />
                <ItemCount title="Producto 2" stock={10} initial={1} />
                <ItemCount title="Producto 3" stock={3} initial={1} />
            </div> */}

            

            <ItemList key={items.id} items={items} />
        </div>
     );
}