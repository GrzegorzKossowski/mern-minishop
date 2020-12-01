import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <Container className='hero d-flex align-items-center justify-content-center'>
      <Row>
        <Col className='text-center'>
          <h1>LifeStyle</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            magnam nisi laboriosam nulla nesciunt?
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
