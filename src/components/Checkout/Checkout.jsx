import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Checkout.css';

const Checkout = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");

    const { cart, emptyCart, totalPrice, totalQuantity } = useContext(CartContext);

    const formHandler = (event) => {
        event.preventDefault();

        if (!name || !surname || !phone || !email || !emailConfirmation) {
            setError("Error. Completar todos los campos antes de confirmar la compra");
            return;
        }

        if (email !== emailConfirmation) {
            setError("Error. Los campos del email deben coincidir.");
            return;
        }

        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                quantity: product.quantity
            })),
            total: totalPrice,
            fecha: new Date(),
            name,
            surname,
            phone,
            email
        };

        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, "products", productOrder.id);
                const productDoc = await getDoc(productRef);
                const actualStock = productDoc.data().stock;

                await updateDoc(productRef, {
                    stock: actualStock - productOrder.quantity
                })

            })
        )
            .then(() => {
                addDoc(collection(db, "orders"), order)
                    .then(docRef => {
                        setOrderId(docRef.id);
                        emptyCart();
                    })
                    .catch(error => {
                        console.log("Error al crear la orden", error);
                        setError("Error al crear la orden");
                    })
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error);
                setError("No se pudo actualizar el stock. Intente nuevamente");
            })

    }

    return (
        <Container className='form-container'>
            <form onSubmit={formHandler}>
                {
                    cart.map(product => (
                        <div key={product.item.id}>
                            <h4> {product.item.name} x {product.quantity} </h4>
                            <h4> €{product.item.price * product.quantity} </h4>
                            <hr />
                        </div>
                    ))
                }
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirmar Email</label>
                    <input type="email" onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>

                {
                    error && <p> {error} </p>
                }

                <Button type='submit' variant="outline-light" className='card-button'>Confirmar Compra</Button>

                {
                    orderId && (
                        <strong>
                            ¡Gracias por tu compra! Tu número de orden es: {orderId}
                        </strong>
                    )
                }
            </form>
        </Container>
    )
}

export default Checkout