import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {    

    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" className='navbar-container'>
                <Container className='navbar-container-child'>
                    <Navbar.Brand as={Link} to={"/"} eventKey="1">ACHE STORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to={"category/muebles"} eventKey="2">Muebles</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/decoracion"} eventKey="3">Decoración</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/textiles"} eventKey="4">Textiles</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/iluminacion"} eventKey="5">Iluminación</Nav.Link>
                            <Nav.Link as={NavLink} to={"products/all"} eventKey="6">Todo</Nav.Link>
                        </Nav>
                        <Nav className='cart-cont'>
                            <Nav.Link as={NavLink} to={"/cart"} eventKey="7"><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar