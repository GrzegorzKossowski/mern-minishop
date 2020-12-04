import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import ProductLine from "../components/ProductLine";

const ProductPage = (props) => {
  return (
    <Fragment>
      <Container>
        <Link className='btn btn-light my-3' to='/'>
          <i className='fas fa-angle-left'></i> Go back
        </Link>
      </Container>
      <ProductDetails />
      <ProductLine />
    </Fragment>
  );
};

export default ProductPage;
