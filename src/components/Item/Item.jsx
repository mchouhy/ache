import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css"

const Item = ({ id, name, price, img }) => {
  return (
    <Card className='product-card'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Title>
          {price}
        </Card.Title>
        <Card.Text>
          Número de artículo: {id}
        </Card.Text>
        <Button variant="outline-light" className='card-button'>Ver Detalle</Button>
      </Card.Body>
    </Card>
  )
}

export default Item