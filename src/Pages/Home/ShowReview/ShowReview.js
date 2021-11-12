import React, { useEffect, useState } from 'react';
import ShowOne from './ShowOne/ShowOne';
import './ShowReview.css';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://salty-everglades-52224.herokuapp.com/userReview')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews]);

    return (
        <div className="review-section">
            <div className="review-header">
                <h1>What buyer say about us</h1>
            </div>
            <div className="all-review">
                {
                    reviews.map(review => <ShowOne
                        key={review._id}
                        review={review}
                    
                    ></ShowOne>)
                }
            </div>
        </div>
    );
};

export default ShowReview;