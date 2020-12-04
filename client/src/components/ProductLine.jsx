import React, { useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
// importuj dispatch i selektor
import { useDispatch, useSelector } from "react-redux";
import { fetchBestProducts } from "../store/products/product.actions";
import { Link } from "react-router-dom";
import Message from "./Message";
import Rating from "./Rating";

const ProductLine = () => {
  // initialize dispatch
  const dispatch = useDispatch();
  // send action to dispach
  useEffect(() => {
    dispatch(fetchBestProducts(4));
    return () => {
      // cleanup
    };
  }, [dispatch]);

  //destruct variables
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );

  return (
    <Container className='my-3'>
      <h3>You can check also</h3>
      <h4>our best products</h4>
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
                <Card.Text as='div'>
                  <Rating
                    rating={product.rating}
                    reviews={product.numReviews}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductLine;
