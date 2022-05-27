import { useState } from "react";

export function ItemCount({number, setNumber, stock, initial}) {
    return (
        <div>
            <p>Camisa Triger</p>
            
            <div>
                <button onClick={() => {
                    setNumber(number--)
                }}>-</button>
                {/* <input type="text" name="numero" value={number}/> */}
                <span>{number}</span>
                <button onClick={() => {
                    setNumber(number++)
                }}>+</button>
            </div>
        </div>
    );
}