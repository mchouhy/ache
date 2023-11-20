import React from 'react';
import Container from 'react-bootstrap/Container';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        const newDoc = doc(db, "products", itemId);

        getDoc(newDoc)
            .then(res => {
                const data = res.data();
                const newProduct = { id: res.id, ...data }
                setProduct(newProduct);
            })
            .catch(error => console.log(error))
    }, [itemId])

    return (
        <Container className='item-detail-container'>
            <ItemDetail {...product} />
        </Container>
    )
}

export default ItemDetailContainer