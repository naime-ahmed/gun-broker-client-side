import React from 'react';
import './ManageOnePd.css';

const ManageOnePd = (props) => {
    const { name, img, _id } = props.product;

    const handleDelete = (id) => {

        const proceed = window.confirm('are you want to delete ?')
        if (proceed) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE',
            headers: { "Content-type": "application/json" },
            })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    alert("delete successfully")
                }
                
            })
        }
        
        
    }
    return (
        <div className="manage-one-pd">
            <div className="manage-one-pd-img">
                <img src={img} alt="" />
            </div>
            <div className="manage-one-pd-text">
                <h5>Product Name: {name}</h5>
                <button onClick={()=>handleDelete(_id)} className="pd-delete-btn">Delete</button>
            </div>
        </div>
    );
};

export default ManageOnePd;