import { useNavigate } from "react-router-dom";
import './ItemDetail.css'
import { useState } from "react";

const imagenes = [
    'https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png',
    'https://www.publicdomainpictures.net/pictures/220000/nahled/rainbow-colors-background-1497250409c9l.jpg',
    'https://monte24noticias.com.ar/wp-content/uploads/2019/05/footer-bg.jpg',
    'https://st2.depositphotos.com/3926191/10797/i/600/depositphotos_107970496-stock-photo-colorful-bokeh-background.jpg'
]


export function ItemDetail({item}) {
    const [img, setImg] = useState(imagenes[0])
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const HandleClick = (imagen) => {
        setImg(imagen)
    }
    
    return (
        <>
            <button className="ButtonVolver" onClick={handleVolver}>Volver</button>

            <main>
                <div className="leftSide">
                    <div className="carrousel">
                        {imagenes.map((imagen) => {
                            return <img key={imagen} src={imagen} onClick={() => HandleClick(imagen)}/>
                        })}
                    </div>
                    
                    <div className="showImg">
                        <img src={img}/>
                    </div>
                </div>

                <div className="detalleProducto">
                    <h2>{item.nombre}</h2>
                    <p>Descripción: <span>{item.desc}</span></p>
                    <p>Precio: <span>{item.precio}</span></p>
                    <button className="buttonCart">Add to Cart</button>
                </div>
            </main>

        </>
    );
}
