import React, { Children } from 'react';
import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalPrice: 0,
    totalQuantity: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    console.log(cart);

    const addToCart = (item, quantity) => {
        const existingProduct = cart.find(prod => prod.item.id === item.id);

        if (!existingProduct) {
            setCart(prev => [...prev, { item, quantity }]);
            setTotalQuantity(prev => prev + quantity);
            setTotalPrice(prev => prev + (item.price * quantity));
        } else {
            const updatedCart = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                } else {
                    return prod;
                }
            })
            setCart(updatedCart);
            setTotalQuantity(prev => prev + quantity);
            setTotalPrice(prev => prev + (item.price * quantity));
        }
    }

    const deleteProduct = (id) => {
        const deletedProduct = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);

        setCart(updatedCart);
        setTotalQuantity(prev => prev - deletedProduct.quantity);
        setTotalPrice(prev => prev - (deletedProduct.item.price * deletedProduct.quantity));
    }

    const emptyCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotalPrice(0);
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, totalPrice, addToCart, deleteProduct, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;