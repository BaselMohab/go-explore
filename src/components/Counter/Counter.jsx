import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import counterData from './counterData';


const Counter = () => {
return (
    <section className='counter'>
        <Container>
            <Row>
                {counterData.map((counter)=>{
                    const {id, icon, number, title} = counter;
                    return (
                        <Col lg={3} md={6} key={id} className="counter-listing">
                            {icon}
                            <span className='counter-num'>{number}K+</span>
                            <span className='counter-title'>{title}</span>
                        </Col>
                    )
                })}
        </Row>
        </Container>
    </section>
)
}

export default Counter
