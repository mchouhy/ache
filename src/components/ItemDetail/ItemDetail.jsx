import React from 'react'
import Button from 'react-bootstrap/Button';
import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, price, img, description, categoryId }) => {
    return (
        <Card className='item-detail-container'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> {name} </Card.Title>
                <Card.Title>
                    {price}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    Número de artículo: {id}
                </Card.Text>
                <div className='item-detail-buttons-cont'>
                    <Button as={Link} to={`/category/${categoryId}`} variant="outline-light" className='card-button'>Volver al listado</Button>
                    <Button variant="outline-light" className='card-button'>Comprar</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail