import { useEffect, useState } from "react"
import { pedirDatos } from "../../mock/pedirDatos"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState()

    const { itemId } = useParams()

    useEffect(() => {
        pedirDatos()
            .then((resp) => {
               setItem( resp.find((item) => item.id === Number(itemId)) )

               console.log(item);
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
    }, [])

    return (
        <section className="container my-5">
            <ItemDetail item={item}/>
        </section>
    )
}