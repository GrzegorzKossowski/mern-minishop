import React, { useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
// importuj dispatch i selektor
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/products/product.actions";
import { Link } from "react-router-dom";
import Message from "./Message";

/**
 *
 * @param {obiect} props
 */
const MainShop = (props) => {
  // initialize dispatch
  const dispatch = useDispatch();
  // send action to dispach
  useEffect(() => {
    dispatch(fetchAllProducts());
    return () => {
      // cleanup
    };
  }, [dispatch]);

  //destruct variables
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );

  return (
    <Container className='main-shop my-3'>
      <h3>Latest products</h3>
      {loading ? (
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} xl={3} lg={4} md={6} className='mb-3'>
              <Card style={{ height: "100%" }}>
                <Link to={`/product/${product._id}`}>
                  <Card.Img
                    style={{ height: "400px", objectFit: "cover" }}
                    variant='top'
                    src={product.image}
                  />
                </Link>
                <Card.Body>
                  <Link to={`/product/${product._id}`}>
                    <Card.Title>{product.name}</Card.Title>
                  </Link>
                  <Card.Text className='price text-muted'>
                    $ {product.price}
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
