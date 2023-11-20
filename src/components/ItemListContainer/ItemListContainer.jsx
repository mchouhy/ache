import React from 'react'
import Container from 'react-bootstrap/Container';
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const myProducts = categoryId ? query(collection(db, "products"), where("categoryId", "==", categoryId)) : collection(db, "products");

        getDocs(myProducts)
            .then(res => {
                const newProducts = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(newProducts);
            })
            .catch(error => console.log(error))
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