import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./HeroCarousel.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const HeroCarousel = () => {
  const CarouselImage = "/public/images/hero-image-2.png";
  const CarouselImage2 = "/public/images/hero-image-4.jpg";
  const CarouselImage3 = "/public/images/hero-image-5.png";

  return (
    <>
      <Container className="carousel-container">
        <Row>
          <Col className="carousel-col">
            <Carousel data-bs-theme="dark" className="carousel">
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
            </Carousel>
          </Col>
        </Row>
      </Container>
      <div className="hero-container">
        <h1 className="title">Bienvenido a nuestra tienda</h1>
        <p className="subtitle">Comenzá a renovar tu hogar</p>
        <Button
          as={Link}
          to={"/products/all"}
          variant="outline-light"
          className="card-button"
        >
          Ver productos
        </Button>
      </div>
    </>
  );
};

export default HeroCarousel;
