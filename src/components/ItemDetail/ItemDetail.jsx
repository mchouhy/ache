import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ id, name, price, img, description }) => {
    return (
        <Card className='item-detail.container'>
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
                <Button variant="outline-light" className='card-button'>Ver Detalle</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail