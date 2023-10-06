import React from 'react'
import './CartWidget.css'

const CartWidget = () => {

    const cartIcon = "https://www.svgrepo.com/show/43071/shopping-bag.svg";

    return (
        <div className='cart-container'>
            <img className='cartIcon' src={cartIcon} alt="" />
            <strong>3</strong>
        </div>
    )
}

export default CartWidget
