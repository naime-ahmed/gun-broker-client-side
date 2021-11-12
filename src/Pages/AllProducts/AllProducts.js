import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './AllProducts.css';
import SingleProduct from './SingleProduct/SingleProduct';

const AllProducts = () => {

    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProduct')
            .then(res => res.json())
            .then(data => setAllProduct(data));
    },[])
    return (
        <div>
            <Navigation/>
            <div className="product-section">
                <div className="product-header">
                    <h1>Get Our All Product here</h1>
                </div>
                <div className="products">
                    {
                        allProduct.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AllProducts;