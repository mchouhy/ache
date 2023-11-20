import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
            setError("¡Ups! Debes completar todos los campos antes de confirmar la compra.");
            return;
        }

        if (email !== emailConfirmation) {
            setError("¡Ups! Los campos de email y confirmar email deben ser idénticos.");
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
                        console.log("Error al crear la orden.", error);
                        setError("Error al crear la orden.");
                    })
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error);
                setError("No se pudo actualizar el stock. Intente nuevamente.");
            })

    }

    return (
        <Container className='form-container'>
            <form onSubmit={formHandler}>
                <h2 className='checkout-title'>Checkout</h2>
                <div className='checkout-container'>
                    <div>
                        <br />
                        <h4 className='checkout-subtitle'>Resumen de orden:</h4>
                        <br />
                        {
                            cart.map(product => (
                                <div key={product.item.id}>
                                    <h4> {product.item.name} x {product.quantity} </h4>
                                    <h4> €{product.item.price * product.quantity} </h4>
                                    <hr />
                                </div>
                            ))
                        }
                        <br />
                    </div>

                    <div>
                        <h4 className='checkout-subtitle'>Datos personales:</h4>
                        <br />
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Nombre</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="text" placeholder="Apellido" onChange={(e) => setSurname(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Apellido</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="text" placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Teléfono</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Email</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="email" placeholder="Confirmar Email" onChange={(e) => setEmailConfirmation(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Confirmar Email</label>
                        </Form.Floating>
                    </div>
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