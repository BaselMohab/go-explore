import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import blogData from './blogData';

const Blog = () => {
return (
    <section className='blog' id='blog'>
        <Container fluid>
            <Row>
                <div className="blog-title">
                    <h2>blog</h2>
                    <p>Always upto date with our latest News and Articles</p>
                </div>
                {blogData.map((blog)=> {
                    const {id, image, title, posted, date, description} = blog;
                    return (
                        <Col md={4} sm={12} key={id}>
                            <Card className='blog-cards'>
                                <img src={image} />
                                <div className="blog-content">
                                <Card.Body>
                                    <Card.Title className='title'>{title}</Card.Title>
                                    <div className="details">
                                        <p className='posted'>posted by <span>{posted}</span></p>
                                        <p>{date}</p>
                                    </div>
                                    <Card.Text>
                                    {description}
                                    </Card.Text>
                                </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
)
}

export default Blog
