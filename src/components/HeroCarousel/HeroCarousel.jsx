import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeroCarousel.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HeroCarousel = () => {

    const CarouselImage = "https://mesopotamiaba.com.ar/wp-content/uploads/2022/02/B-Luili-mase-1-1.jpg";
    const CarouselImage2 = "https://mesopotamiaba.com.ar/wp-content/uploads/2023/05/AGUS-W-1-2-3.jpg";
    const CarouselImage3 = "https://mesopotamiaba.com.ar/wp-content/uploads/2023/05/diaz-1-3.jpg";

    return (
        <>
            <Container className='carousel-container'>
                <Row>
                    <Col><Carousel data-bs-theme="dark" className='carousel'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={CarouselImage}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={CarouselImage2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={CarouselImage3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel></Col>
                </Row>
            </Container>
            <div className='hero-container'>
                <h1 className='title'>Bienvenido a nuestra tienda</h1>
                <p className='subtitle'>Comenzá a renovar tu hogar</p>
                <Button as={Link} to={'/products/all'} variant="outline-light" className='card-button'>Ver productos</Button>
            </div>
        </>
    )
}

export default HeroCarousel