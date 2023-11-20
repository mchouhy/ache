import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {

    const cartIcon = "https://www.svgrepo.com/show/43071/shopping-bag.svg";

    const { totalQuantity } = useContext(CartContext);

    return (
        <div className='cart-container'>
            <Link to="/cart" style={{textDecoration: 'none'}}>
                <img className='cartIcon' src={cartIcon} alt="" />
                {
                    totalQuantity > 0 && <strong>{totalQuantity}</strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget
