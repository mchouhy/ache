import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/config';
import { collection, addDoc, updateDoc, doc, getDoc, disableNetwork } from 'firebase/firestore';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames';
import Confetti from 'react-dom-confetti';
import './Checkout.css';


const Checkout = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [blankFieldError, setBlankFieldError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [orderId, setOrderId] = useState("");
    const [disable, setDisable] = useState(false);
    const [confetti, setConfetti] = useState(false);

    const { cart, emptyCart, totalPrice, totalQuantity, cartCheckout, totalPriceCheckout, totalQuantityCheckout, emptyCartCheckout } = useContext(CartContext);

    const btnClasses = classNames('card-button', 'order-btn');

    const orderMessageClasses = classNames('orderMessage');

    const configConfetti = {
        angle: 95,
        spread: 360,
        startVelocity: 26,
        elementCount: 200,
        dragFriction: 0.15,
        duration: 3000,
        stagger: 0,
        width: "20px",
        height: "20px",
        perspective: "505px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    const formHandler = (event) => {
        event.preventDefault();

        if (!name || !surname || !phone || !email || !emailConfirmation) {
            setBlankFieldError("¡Ups! Campo vacío.");
            return;
        }

        if (email !== emailConfirmation) {
            setEmailError("Los campos de email y confirmar email deben ser idénticos.");
            return;
        }

        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                quantity: product.quantity
            })),
            total: totalPrice,
            quantity: totalQuantity,
            date: new Date(),
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
                        setDisable(true);
                        setConfetti(true);
                        emptyCartCheckout();
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
                            cartCheckout.map(product => (
                                <div key={product.item.id}>
                                    <h4> {product.item.name} x {product.quantity} </h4>
                                    <h4> €{product.item.price * product.quantity} </h4>
                                    <hr />
                                </div>
                            ))
                        }
                        <br />
                        <h3>Cantidad Total de Productos: {totalQuantityCheckout}</h3>
                        <h3>Precio Total: €{totalPriceCheckout}</h3>
                        <br />
                    </div>

                    <div>
                        <h4 className='checkout-subtitle'>Datos personales:</h4>
                        <br />
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="text" placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Nombre</label>
                        </Form.Floating>
                        {
                            !name ? <p className='errorMessage'> {blankFieldError} </p> : ""
                        }
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="text" placeholder="Apellido" onChange={(e) => setSurname(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Apellido</label>
                        </Form.Floating>
                        {
                            !surname ? <p className='errorMessage'> {blankFieldError} </p> : ""
                        }
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="text" placeholder="Teléfono" onChange={(e) => setPhone(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Teléfono</label>
                        </Form.Floating>
                        {
                            !phone ? <p className='errorMessage'> {blankFieldError} </p> : ""
                        }
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Email</label>
                        </Form.Floating>
                        {
                            !email ? <p className='errorMessage'> {blankFieldError} </p> : ""
                        }
                        {
                            email !== emailConfirmation ? <p className='errorMessage'> {emailError} </p> : ""
                        }
                        <Form.Floating className="mb-3">
                            <Form.Control id="floatingPasswordCustom" type="email" placeholder="Confirmar Email" onChange={(e) => setEmailConfirmation(e.target.value)} />
                            <label htmlFor="floatingPasswordCustom">Confirmar Email</label>
                        </Form.Floating>
                        {
                            !emailConfirmation ? <p className='errorMessage'> {blankFieldError} </p> : ""
                        }
                        {
                            email !== emailConfirmation ? <p className='errorMessage'> {emailError} </p> : ""
                        }
                    </div>
                </div>

                <div className='button-container'>
                    <Button as={Link} to='/cart' variant="outline-light" className='card-button'>Volver</Button>
                    <Button as={Link} to='/products/all' variant="outline-light" className='card-button'>Seguir Comprando</Button>
                    <Button type='submit' variant="outline-light" className={btnClasses} disabled={disable}>
                        Tramitar Pedido
                        <Confetti active={confetti} config={configConfetti} />
                    </Button>
                </div>
                <br />
                {
                    orderId && (
                        <strong className={orderMessageClasses}>
                            ¡Gracias por tu compra {name}! Tu número de orden es: {orderId} ¡No lo pierdas!
                        </strong>)
                }
            </form>
        </Container>
    )
}

export default Checkout