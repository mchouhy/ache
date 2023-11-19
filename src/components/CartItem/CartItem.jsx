import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';



const CartItem = ({ item, quantity }) => {
    const { deleteProduct } = useContext(CartContext);

    return (
        <div>
            <h4> {item.name} </h4>
            <p>Cantidad: {quantity} </p>
            <p>Precio: €{item.price} </p>
            <Button onClick={() => deleteProduct(item.id)} variant="outline-light" className='card-button'>Eliminar</Button>
            <hr />
        </div>
    )
}

export default CartItem