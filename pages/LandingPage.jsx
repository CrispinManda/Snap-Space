// import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="text-center mt-5 bg-danger">
      <Row>
        <Col>
          <h1>Welcome to the Album Management App</h1>
          <p>This app allows you to view users, their albums, and photos.</p>
          <Button variant="primary" href="/login">Login</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
