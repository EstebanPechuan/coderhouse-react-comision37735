import { useEffect, useState } from "react"
import { pedirDatos } from "../../mock/pedirDatos"
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((resp) => {
                setItems( resp )
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }, [])

    return (
        <section className="container my-5">
            <ItemList items={items}/>
                        
        </section>
    )
}