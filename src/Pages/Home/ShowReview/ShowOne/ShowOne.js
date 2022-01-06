import React from 'react';
import Rating from 'react-rating';
import './ShowOne.css';

const ShowOne = (props) => {
    const {name, comment, rate} = props.review;
    return (
        <div className="single-review" data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
            <p>{comment}</p>
            <h4>Name: {name}</h4>
            <Rating
                initialRating={rate}
                readonly
                emptySymbol="far fa-star star-style"
                fullSymbol="fas fa-star star-style"
            />
            
        </div>
    );
};

export default ShowOne;