// import React from 'react';
import {  Container, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="text-center mt-5 ">
      <Row>
        <Col>
          <h1>Welcome to the Album Management App</h1>
          <p>This app allows you to view users, their albums, and photos.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
