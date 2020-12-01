import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const getYear = () => {
  return new Date().getFullYear();
};

const Copyrights = () => {
  return (
    <Container>
      <Row>
        <Col className='text-left'>Copyrights &copy; Mini-shop {getYear()}. All Rights Reserverd</Col>
      </Row>
    </Container>
  );
};

export default Copyrights;
