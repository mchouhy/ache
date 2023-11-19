import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalQuantity, totalPrice} = useContext(CartContext)

    return (
        <div>Cart</div>
    )
}

export default Cart