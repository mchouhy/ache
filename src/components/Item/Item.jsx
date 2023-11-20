import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img, stock }) => {
  return (
    <Card className='product-card'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Title>
          €{price}
        </Card.Title>
        <Card.Text>
          Número de artículo: {id}
        </Card.Text>
        <Card.Text>
          Stock: {stock}
        </Card.Text>
        <Button as={Link} to={`/item/${id}`} variant="outline-light" className='card-button'>Ver Detalle</Button>
      </Card.Body>
    </Card>
  )
}

export default Item