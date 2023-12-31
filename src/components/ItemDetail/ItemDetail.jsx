import React from 'react'
import Button from 'react-bootstrap/Button';
import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Counter from '../Counter/Counter';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import classNames from 'classnames';


const ItemDetail = ({ id, name, stock, price, img, description, categoryId }) => {

    const [addQuantity, setAddQuantity] = useState(0); //Va 0 porque es la cantidad de productos seleccionados y no se muestra por pantalla

    const { addToCart } = useContext(CartContext);

    const quantityHandler = (quantity) => {
        setAddQuantity(quantity);
        const item = { id, name, price };
        addToCart(item, quantity);
    }

    const buttonClasses = classNames('card-button', 'detail-button');

    return (
        <Card className='item-detail-container'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Title>
                    €{price}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    Número de artículo: {id}
                </Card.Text>
                <Card.Text>
                    Stock: {stock}
                </Card.Text>
                <div className='item-detail-buttons-cont'>
                    {
                        addQuantity > 0 ? (<Button as={Link} to="/cart" variant="outline-light" className={buttonClasses}>Ir al Carrito</Button>) : (<Counter initial={1} stock={stock} addFunction={quantityHandler} />)
                    }
                    <Button as={Link} to={`/category/${categoryId}`} variant="outline-light" className={buttonClasses}>Volver al listado</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail