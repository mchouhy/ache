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
                            <Nav.Link as={NavLink} to={"category/muebles"} onClick={() => setExpanded(false)}>Muebles</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/decoracion"} onClick={() => setExpanded(false)}>Decoración</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/textiles"} onClick={() => setExpanded(false)}>Textiles</Nav.Link>
                            <Nav.Link as={NavLink} to={"category/iluminacion"} onClick={() => setExpanded(false)}>Iluminación</Nav.Link>
                            <Nav.Link as={NavLink} to={"products/all"} onClick={() => setExpanded(false)}>Todo</Nav.Link>
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