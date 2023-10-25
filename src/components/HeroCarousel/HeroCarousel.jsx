import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HeroCarousel.css';

const HeroCarousel = () => {

    const CarouselImage = "https://mesopotamiaba.com.ar/wp-content/uploads/2022/02/B-Luili-mase-1-1.jpg";
    const CarouselImage2 = "https://mesopotamiaba.com.ar/wp-content/uploads/2022/03/I-Luli-Mase-1-2048x1365.jpg";
    const CarouselImage3 = "https://mesopotamiaba.com.ar/wp-content/uploads/2023/05/diaz-1-3.jpg";

    return (
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
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CarouselImage3}
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel></Col>
            </Row>
        </Container>
    )
}

export default HeroCarousel