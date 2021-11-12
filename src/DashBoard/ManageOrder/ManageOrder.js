import React, { useEffect, useState } from 'react';
import ManageOneOd from './ManageOneOd/ManageOneOd';
import './ManageOrder.css';

const ManageOrder = () => {

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [allOrder])
    
    return (
        <div className="manage-all-order">
            <div className="manage-all-order-header">
                <h2>Manage All Order</h2>
            </div>
            <div className="manage-all-order-items">
                {
                    allOrder.map(order => <ManageOneOd
                        key={order._id}
                        order={order}
                    
                    ></ManageOneOd>)
                }
            </div>
        </div>
    );
};

export default ManageOrder;