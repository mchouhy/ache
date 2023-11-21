import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './Counter.css';
import classNames from 'classnames';

const Counter = ({ initial, stock, addFunction }) => {

    const [counter, setCounter] = useState(initial);

    const toAddCounter = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const toSubtractCounter = () => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
    }

    const buttonClasses = classNames('card-button', 'addCartButton');

    return (
        <>
            <div className='counter-container'>
                <Button onClick={toSubtractCounter} variant="outline-light" className='card-button minus-button'> - </Button>
                <strong> {counter} </strong>
                <Button onClick={toAddCounter} variant="outline-light" className='card-button'> + </Button>
            </div>
            <div className='button-container'>
                <Button onClick={() => addFunction(counter)} variant="outline-light" className={buttonClasses}> Agregar al Carrito </Button>
            </div>
        </>
    )
}

export default Counter