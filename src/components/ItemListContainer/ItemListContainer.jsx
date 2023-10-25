import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <div className='hero-container'>
                <h1 className='title'>Bienvenido a nuestra tienda</h1>
                <p className='subtitle'>Comenzá a renovar tu hogar</p>
            </div>
            <Container className='cards-container'>
                <h2>Nuestros productos</h2>
                <ItemList products={products} />
            </Container>
        </div>
    )
}

export default ItemListContainer