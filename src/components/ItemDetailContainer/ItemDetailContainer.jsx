import React from 'react';
import { useState, useEffect } from 'react';
import { getOneProduct } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getOneProduct(id)
            .then(response => setProduct(response))
    }, [])
    return (
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer