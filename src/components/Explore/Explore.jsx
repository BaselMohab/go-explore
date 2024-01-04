import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import exploreData from './exploreData';

const Explore = () => {
return (
    <section className='explore' id='explore'>
        <Container>
            <Row>
                <div className="explore-title">
                    <h2>explore</h2>
                    <p>Explore New place, food, culture around the world and many more</p>
                </div> 
                {exploreData.map((data)=> {
                    const {id, image, rated, title, ratingNum, ratingCount, cost, category, description, status, icon1, icon2, icon3} = data;
                    return (
                        <Col lg={4} md={6} sm={12} key={id} className='explore-cards'>
                            <Card>
                                <img src={image} />
                                <div className="explore-card-hover">
                                    <p>{rated}</p>
                                    <div className="hover-icons">
                                        <i class="fa-solid fa-expand"></i>
                                        <i class="fa-regular fa-bookmark"></i>
                                    </div>
                                </div>
                                    <Card.Body>
                                        <Card.Title>
                                            <div className="explore-card-title">{title}</div>
                                            <div className="explore-card-info">
                                                <p className='ratingNum'>{ratingNum}</p>
                                                <span className='break'>|</span>
                                                <p className='ratingCount'>{ratingCount}</p>
                                                <span className='break'>|</span>
                                                <p className='cost'>from <span>{cost}</span></p>
                                                <span className='break'>|</span>
                                                <p className='category'>{category}</p>
                                            </div>
                                        </Card.Title>
                                        <Card.Text>
                                            <div className="explore-description">{description}</div>
                                        </Card.Text>
                                        <div className="explore-status-info">
                                                <p className={`explore-status ${status}`}>{status}</p>
                                                <span>{icon1}</span>
                                                <span>{icon2}</span>
                                                <span>{icon3}</span>
                                            </div>
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

export default Explore
