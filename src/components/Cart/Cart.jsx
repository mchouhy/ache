import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Cart.css'


const Cart = () => {

    const { cart, totalQuantity, totalPrice, emptyCart } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <>
                <Container className='emptyCartContainer'>
                    <h2>Carrito vacío</h2>
                    <Button as={Link} to={'/products/all'} variant="outline-light" className='card-button'>Ver Productos</Button>
                </Container>
            </>
        )
    }

    return (
        <Container className='CartContainer'>
            <h2 className='cart-title'>Tu Carrito de Compras:</h2>
            <br />
            {
                cart.map(product => <CartItem key={product.item.id} {...product} />)
            }
            <h3>Cantidad Total de Productos: {totalQuantity}</h3>
            <h3>Precio Total: €{totalPrice}</h3>
            <Button onClick={() => emptyCart()} variant="outline-light" className='card-button empty-cart-button'>Vaciar Carrito</Button>
            <Button as={Link} to="/checkout" variant="outline-light" className='card-button'>Finalizar Compra</Button>
        </Container>
    )
}

export default Cart