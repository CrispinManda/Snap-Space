// import React from 'react';
import './LandingPage.css';
import { Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdb-react-ui-kit';


const LandingPage = () => {
  return (
    <MDBContainer fluid  className="text-center  mt-5 ">
      <Row>
        <Col className='mt-5'> 
         <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-danger rounded-pill px-4 py-1 mb-4 animated bounceInDown">Welcome to Snapspace</small>
          <h1>Welcome to the Album Management App</h1>
          <p>This app allows you to view users, their albums, and photos.</p>
          <MDBBtn size='lg'tag='a' href='login' className='me-2 mt-4' active>
            Get Started
          </MDBBtn>
        </Col>
        <Col className=' background-section'>

        </Col>
      </Row>
    </MDBContainer>
  );
};

export default LandingPage;
