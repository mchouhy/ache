import React from 'react';
import { useState, useEffect } from 'react';
import { getOneProduct } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Container from 'react-bootstrap/Container';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getOneProduct("1")
            .then(response => setProduct(response))
    }, [])
    return (
        <Container className='item-detail-container'>
            <ItemDetail {...product}/>
        </Container>
    )
}

export default ItemDetailContainer