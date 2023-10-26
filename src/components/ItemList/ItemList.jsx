import React from 'react';
import Item from '../Item/Item';
import Container from 'react-bootstrap/Container';
import "./ItemList.css";

const ItemList = ({ products }) => {
    return (
        <Container className='cards-container'>
            {products.map(item => <Item key={item.id} {...item} />)}
        </Container>
    )
}

export default ItemList