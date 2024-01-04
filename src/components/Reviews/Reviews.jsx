import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import reviewsData from './reviewsData';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Reviews = () => {
const NextArrow = ({ onClick }) => {
        return (
        <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
        </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
        <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
        </div>
        );
    };

    const [people, setPeople] = useState(reviewsData);
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0){
        setIndex(lastIndex);
    }

    if ( index > lastIndex){
        setIndex(0);
    }
}, [index, people.length])


    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setIndex(next),
    };

    return (
        <section className="review" id='review'>
            <div className="review-title">
                    <h2>reviews</h2>
                    <p>Explore New place, food, culture around the world and many more</p>
            </div> 
        <Slider {...settings}>
            {reviewsData.map((data, peopleIndex) => {
                const {id, image, name, location, review} = data;
                let position = 'nextSlide';

            if (peopleIndex === index){
                position = 'activeSlide';
            }

            if (peopleIndex === index - 1 || (index === 0 && peopleIndex === people.length - 1)){
                position = 'prevSlide';
            }
                    return (
                        <Col className={position}>
                            <Card className='review-card'>
                                <div className="review-description">
                                    <div className="review-info">
                                        <div className="review-img">
                                            <img src={image} alt={name} />
                                        </div>
                                        <div className="review-person">
                                            <h2>{name}</h2>
                                            <h4>{location}</h4>
                                            <div className="review-stars">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-comment">
                                        {review}
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    )
            })}
        </Slider>
        </section>
    );
};

export default Reviews;























