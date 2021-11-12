import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import MyOneOrder from './MyOneOrder/MyOneOrder';
import './MyOrder.css';

const MyOrder = () => {

    const [myOrder, setMyOrder] = useState([]);

    const { user } = UseAuth();

    useEffect(() => {
        fetch('https://salty-everglades-52224.herokuapp.com/allOrder')
            .then(res => res.json())
            .then(data => setMyOrder(data?.filter(order => order.name === user.displayName)))
    }, [myOrder]);

    return (
        <div className="my-all-order">
            <div className="my-all-order-header">
                <h1>Here is your all orders</h1>
            </div>
            <div className="">
                {
                    myOrder?.map(order => <MyOneOrder
                        key={order._id}
                        order={order}
                    
                    ></MyOneOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrder;