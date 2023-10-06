import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div className='hero-container'>
            <h1 className='title'>{props.greeting}</h1>
            <p className='subtitle'>Comenzá a renovar tu hogar</p>
        </div>
    )
}

export default ItemListContainer