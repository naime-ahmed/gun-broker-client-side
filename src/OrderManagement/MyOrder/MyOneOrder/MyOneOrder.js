import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import './MyOneOrder.css';

const MyOneOrder = (props) => {
    const { name,  productName , quantity, status, date, _id
    } = props.order;

    const { user } = UseAuth();

    const deleteMyOrder = id => {
        const proceed = window.confirm('are you want to delete ?')
        if (proceed) {
            fetch(`http://localhost:5000/deleteMyOrder/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            
            })
            .then(res => res.json())
            .then(result=> {
            if (result.deletedCount) {
                alert("delete successfully")
            }
            })
            
        }
        
    }

    return (
        <div className="single-order-style">
            <div>
                <p>Your Name: {name}</p>
                <p>Email: {user?.email}</p>
                
            </div>
            <div>
                <p>Product: {productName}</p>
                <p>Quantity: { quantity}</p>
            </div>
            <div>
                <p>Date: {date}</p>
                <p>Position: {status }</p>
            </div>
            <div onClick={()=>deleteMyOrder(_id)} className="orderDelete">
                <p>Delete</p>
            </div>
        </div>
    );
};

export default MyOneOrder;