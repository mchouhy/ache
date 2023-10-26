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
                    <Navbar.Brand as={Link} to={"/"}>ACHE STORE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to={"category/muebles"}>Muebles</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/decoracion"}>Decoración</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/textiles"}>Textiles</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/iluminacion"}>Iluminación</Nav.Link>
                            <Nav.Link as={NavLink} to={"products/all"}>Todo</Nav.Link>
                        </Nav>
                        <Nav className='cart-cont'>
                            <Nav.Link href="#cart"><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar