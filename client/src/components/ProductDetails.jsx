import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// importuj akcje
import { fetchProductByID } from "../store/products/product.actions";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Message from "./Message";
import Loader from "./Loader";
import Rating from "./Rating";

const ProductDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductByID(id));
    return () => {
      //   cleanup
    };
  }, [id, dispatch]);

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  return (
    <Container className='my-3'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error}</Message>
      ) : (
        <Row>
          <Col lg={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col lg={6}>
            <Card border='light'>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  Price: ${product.price}
                </Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text as='div'>
                  <Rating
                    rating={product.rating}
                    reviews={product.numReviews}
                  />
                </Card.Text>
                <Card.Text>
                  {product.countInStock > 0 ? (
                    <span style={{ color: " green" }}>In Stock</span>
                  ) : (
                    <span style={{ color: " red" }}>Out of stock</span>
                  )}
                </Card.Text>
                <Button
                  className=''
                  type='button'
                  disabled={product.countInStock <= 0}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetails;
