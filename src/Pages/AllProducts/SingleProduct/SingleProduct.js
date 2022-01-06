import React from 'react';
import { useHistory } from 'react-router';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const { name, price, img, description, _id } = props.product;
    const history = useHistory();
    const placeOrder = () => {
        history.push(`/placeOrder/${_id}`);
    }
    return (
        <div className="product" data-aos="flip-right" data-aos-duration="1000">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-text">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>Price: {price}</h5>
                <button onClick={placeOrder} className="product-btn">Buy Now</button>
            </div>
        </div>
    );
};

export default SingleProduct;