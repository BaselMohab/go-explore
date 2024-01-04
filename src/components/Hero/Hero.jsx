import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroListData from './heroListData';
import Card from 'react-bootstrap/Card';



const Hero = () => {
return (
    <section id='home' className='hero'>
            <div className="hero-content">
                <h2>BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED</h2>
                <p>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
            </div>
            <div className="search">
                <Container fluid>
                    <Row>
                        <Col lg={5} sm={12}>
                            <div className="input">
                                <h3>What?</h3>
                                <input type="text" placeholder="Ex: Restaurant, Hotel, Automobile"></input>
                                <i class="fa-solid fa-list icon-1"></i>
                            </div>
                        </Col>
                        <Col lg={5} sm={12}>
                            <div className="input">
                                <h3>Location</h3>
                                <input type="text" placeholder="Ex: Restaurant, Hotel, Automobile"></input>
                                <i class="fa-solid fa-location-crosshairs icon-2"></i>
                            </div>
                        </Col>
                        <Col lg={2} sm={12}>
                            <div className="button">
                                <button>search
                                    <i class="fa-solid fa-magnifying-glass icon-3"></i>    
                                </button> 
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="hero-cards">
                <Container fluid>
                    <Row>
                        {heroListData.map((list)=>{
                            const {id, icon, name, description} = list;
                            return (
                                <Col lg={2} xs={4} key={id}>
                                    <Card className='hero-card'>
                                        <Card.Header className='hero-icon'>{icon}</Card.Header>
                                        <Card.Body>
                                            <Card.Title className='hero-name'>{name}</Card.Title>
                                            <Card.Text>
                                                {description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>    
    </section>
)
}

export default Hero
