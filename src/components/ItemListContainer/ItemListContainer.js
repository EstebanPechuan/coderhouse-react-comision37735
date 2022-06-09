import { useEffect, useState } from "react"
// import { Spinner } from "react-bootstrap"
import { pedirDatos } from "../../mock/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {

    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((resp) => {
                if (!categoriaId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.categoria === categoriaId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoriaId])

    return (
        <section className="container my-5">
            
            {
                loading
                ?   <span className="visually-hidden">Loading...</span>

                :   <ItemList className="ItemList" items={items}/>
            }
            
        </section>
    )
}