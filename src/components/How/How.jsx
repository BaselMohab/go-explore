import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import howData from './howData';

const How = () => {
return (
    <section className='how' id='how'>
        <Container fluid="md">
            <div className="how-title">
                <h2>how it works</h2>
                <p>Learn More about how our website works</p>
            </div> 
            <Row>
                {howData.map((how)=>{
                    const {id, icon, title, description} = how;
                    return (
                        <Col key={id} lg={4} sm={12} className='how-cards'>
                            <Card className='how-card'>
                                    <div className="how-icon">
                                    {icon}
                                    </div>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                    {description}
                                    </Card.Text>
                                    <button>read more <i className="fas fa-chevron-right"></i></button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
)
}

export default How
