import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import products from "../data/products";

const MainShop = () => {
  return (
    <Container className='main-shop'>
      <h3>Latest products</h3>
      <Row>
        {products.map((item) => (
          <Col key={item._id} xl={3} lg={4} md={6} className="mb-3">
            <Card style={{height: '100%'}}>
              <Card.Img
                style={{ height: "400px", objectFit: "cover" }}
                variant='top'
                src={item.image}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="price text-muted">$ {item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MainShop;
