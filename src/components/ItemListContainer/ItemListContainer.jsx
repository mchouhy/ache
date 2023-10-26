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
            <Container className='cards-container'>
                <ItemList products={products} />
            </Container>
        </div>
    )
}

export default ItemListContainer