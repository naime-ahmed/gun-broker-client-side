import React, { useEffect, useState } from 'react';
import ManageOnePd from './ManageOnePd/ManageOnePd';
import './ManageProduct.css';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://salty-everglades-52224.herokuapp.com/allProduct')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return (
        <div className="manage-all-pd">
            <div className="manage-all-pd-header">
                <h1>Manage all Product</h1>
            </div>
            <div className="manage-all-pd-items">
                {
                    products.map(product => <ManageOnePd
                        key={product._id}
                        product ={product}
                    
                    ></ManageOnePd>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;