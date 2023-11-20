import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Counter.css';

const Counter = ({ initial, stock, addFunction }) => {

    const [counter, setCounter] = useState(initial);

    const toAddCounter = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const toSubtractCounter = () => {
        if(counter > initial) {
            setCounter(counter - 1);
        }
    }


    return (
    <>
        <div className='counter-container'>
            <Button onClick={toSubtractCounter} variant="outline-light" className='card-button'> - </Button>
            <strong> {counter} </strong>
            <Button onClick={toAddCounter} variant="outline-light" className='card-button'> + </Button>
        </div>
        <Button onClick={()=> addFunction(counter)} variant="outline-light" className='card-button'> Agregar al Carrito </Button>
    </>
    )
}

export default Counter