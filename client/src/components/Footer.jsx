import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Footer = () => {
  const onPhoneHandler = (phoneNumber) =>
    window.open(`tel:${phoneNumber}`, "_self");

  return (
    <Container>
      <Row>
        <Col md={6} className='mb-3'>
          <h4>Mern-minishop</h4>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            sapiente officiis recusandae. Ab, perferendis, maiores vitae
            assumenda ad temporibus quo consectetur quod, enim in nobis deserunt
            inventore? Enim, voluptatem nam.
          </div>
          <Button
            className='my-3'
            variant='light'
            onClick={() => onPhoneHandler("+1234567890")}
          >
            <i className='fas fa-phone'></i> +123-456-7890
          </Button>
          <div>All week from 9 am to 5 pm</div>
          <address className='my-3'>
            <div>3215 Linkoln Sztrasse</div>
            <div>NW 321545</div>
            <div>United States of MARS</div>
          </address>
        </Col>
        <Col md={6} className='mb-3'>
          <h4 className='mb-3'>
            Sign up for our newsletter to recieve special offers, news and grea
            events.
          </h4>
          <Form className=''>
            <Form.Group className='d-flex justify-content-evenly'>
              <Form.Control
                className='mr-2'
                type='text'
                placeholder='Enter your email'
              />
              <Button variant='primary'>
                <i className='fas fa-angle-right'></i>
              </Button>
            </Form.Group>
          </Form>
          <Row>
            <Col>
              <div>About us</div>
              <div>Services</div>
              <div>Contact Us</div>
              <div>FAQs</div>
              <div>Privacy Policy</div>
              <div>Cookie Policy</div>
              <div>Terms & Condiitons</div>
            </Col>
            <Col>
              <div>Facebook</div>
              <div>Twitter</div>
              <div>Instagram</div>
              <div>Pinterest</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
