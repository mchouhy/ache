import React from 'react'
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams()
    useEffect(() => {

        const functionProducts = categoryId ? getProductByCategory : getProducts;

        functionProducts(categoryId)
            .then(res => setProducts(res))
    }, [categoryId])
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