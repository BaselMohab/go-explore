import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
return (
    <section id='contact' className='contact'>
        <Container fluid>
            <Row>
                <div className="contact-title">
                    <h2>Contact Us</h2>
                    <h4>do you want to add your business listings with us</h4>
                    <p>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
                </div> 
                    <Form>
                        <Row className='contact-form'>
                            <Col lg={10} md={12}>
                                <Form.Control className='email' type='email' placeholder="Email Address" required />
                            </Col>
                            <Col lg={2} md={12}>
                                <Button className='form-btn' type="submit">create account</Button>
                            </Col>
                        </Row>
                    </Form>
            </Row>
        </Container>
    </section>
)
}

export default Contact
