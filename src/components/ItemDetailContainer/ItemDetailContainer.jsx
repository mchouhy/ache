import React from 'react';
import Container from 'react-bootstrap/Container';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getOneProduct } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        getOneProduct(itemId)
            .then(response => setProduct(response))
    }, [itemId])

    return (
        <Container className='item-detail-container'>
            <ItemDetail {...product} />
        </Container>
    )
}

export default ItemDetailContainer