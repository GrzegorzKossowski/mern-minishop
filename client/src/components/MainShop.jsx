import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

// temporary imports to refactor
import axios from "axios";

/**
 *
 * @param {obiect} props
 */
const MainShop = (props) => {
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsPending(true);
      const { data } = await axios.get(
        "https://mern-minishop.herokuapp.com/api/products"
      );
      setProducts(data);
      setIsPending(false);
    };
    fetchProducts();
    return () => {
      // cleanup;
    };
  }, []);

  return (
    <Container className='main-shop my-3'>
      <h3>Latest products</h3>
      {isPending ? (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : (
        <Row>
          {products.map((item) => (
            <Col key={item._id} xl={3} lg={4} md={6} className='mb-3'>
              <Card style={{ height: "100%" }}>
                <Card.Img
                  style={{ height: "400px", objectFit: "cover" }}
                  variant='top'
                  src={`/mern-minishop${item.image}`}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text className='price text-muted'>
                    $ {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MainShop;
