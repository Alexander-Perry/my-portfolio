import React from 'react';
import SignatureImage from '../../assets/images/signature.png';
import { Container,Row,Col } from 'react-bootstrap';

// Header
function Header() {
    return (
        <Container fluid>
            <Row>
                <Col md="auto" >
                    <img src={SignatureImage} alt='Logo' height='100px'  />
                </Col>
                <Col md='auto' className="d-flex align-items-end">
                    <h3>My Portfolio</h3>
                </Col>
            </Row>
        </Container>
    )

}

export default Header;