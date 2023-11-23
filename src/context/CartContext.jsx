import React, { Children } from 'react';
import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,

    cartCheckout: [],
    totalQuantityCheckout: 0,
    totalPriceCheckout: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartCheckout, setCartCheckout] = useState([]);
    const [totalQuantityCheckout, setTotalQuantityCheckout] = useState(0);
    const [totalPriceCheckout, setTotalPriceCheckout] = useState(0);

    const addToCart = (item, quantity) => {
        const existingProduct = cart.find(prod => prod.item.id === item.id);

        if (!existingProduct) {
            setCart(prev => [...prev, { item, quantity }]);
            setTotalQuantity(prev => prev + quantity);
            setTotalPrice(prev => prev + (item.price * quantity));

            setCartCheckout(prev => [...prev, { item, quantity }]);
            setTotalQuantityCheckout(prev => prev + quantity);
            setTotalPriceCheckout(prev => prev + (item.price * quantity));
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

            const updatedCartCheckout = cartCheckout.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                } else {
                    return prod;
                }
            })
            setCart(updatedCartCheckout);
            setTotalQuantityCheckout(prev => prev + quantity);
            setTotalPriceCheckout(prev => prev + (item.price * quantity));
        }
    }

    const deleteProduct = (id) => {
        const deletedProduct = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);

        setCart(updatedCart);
        setTotalQuantity(prev => prev - deletedProduct.quantity);
        setTotalPrice(prev => prev - (deletedProduct.item.price * deletedProduct.quantity));

        const deletedProductCheckout = cartCheckout.find(prod => prod.item.id === id);
        const updatedCartCheckout = cartCheckout.filter(prod => prod.item.id !== id);

        setCart(updatedCartCheckout);
        setTotalQuantityCheckout(prev => prev - deletedProductCheckout.quantity);
        setTotalPriceCheckout(prev => prev - (deletedProductCheckout.item.price * deletedProductCheckout.quantity))
    }

    const emptyCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotalPrice(0);
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, totalPrice, cartCheckout, totalQuantityCheckout, totalPriceCheckout, addToCart, deleteProduct, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;