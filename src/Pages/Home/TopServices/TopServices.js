import React, { useEffect, useState } from 'react';
import TopProduct from './TopProduct/TopProduct';
import './TopServices.css';

const TopServices = () => {

    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        fetch('https://salty-everglades-52224.herokuapp.com/topProduct')
            .then(res => res.json())
            .then(data => setTopProducts(data));
    }, [])
    
    return (
        <div className="top-product-section">
            <div className="top-product-header">
                <h2>Our Top Products</h2>
                <p>Some of the latest, coolest gear that we like.</p>
            </div>
            <div className="top-products">
                {
                    topProducts.map(product => <TopProduct
                        key={product._id}
                        product={product}
                    
                    ></TopProduct>)
                }
            </div>
        </div>
    );
};

export default TopServices;