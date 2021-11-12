import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/user/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('added as an admin')
                    reset();
                }
            })
        console.log(data);
        
    };

    return (
        <div className="make-admin-from">
            <div className="make-admin-from-header">
                <h1>Make Admin a Registered User</h1>
            </div>
            <div className="form-parent">
                <div className="admin-form-style">
                    <form onSubmit={handleSubmit(onSubmit)}>
                         
                        <input  {...register("email", { required: true })} placeholder="User Email" type="email" />
                        <br /> <br />
                                
                        <input className="make-admin-btn" type="submit" value="Make Admin" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;