import { useState, useEffect } from "react";
import  "./ItemCount.css";

export function ItemCount({stock, initial, valor, setValor}) {

    const sumarValor = () => {
        if (valor < stock) {
            setValor(valor + 1)
        }
    }

    const restarValor = () => {
        if (valor > initial) {
            setValor(valor - 1)
        }
    }
    
    useEffect(() => {
        console.log(valor)
    }, [valor])
    
    return (
        <div className="Card">            
            <div className="Buttons">
                <button onClick={restarValor}>-</button>
                <span>{valor}</span>
                <button onClick={sumarValor}>+</button>
            </div>
        </div>
    );
}