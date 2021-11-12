import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Hooks/UseAuth';
import './Review.css';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = UseAuth();

    const onSubmit = data => {
        
        fetch('http://localhost:5000/userRating', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('thanks for your feedback')
                    reset();
                }
        })


    };

    return (
        <div className="rating-page">
            <div className="rating-header">
                <h2>Please write your opinion and rate us</h2>
            </div>
            <div className="rating-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                            
                    <input readOnly {...register("name", { required: true })}  defaultValue={user.displayName}  type="text" /> <br /> <br />
                    
                    <textarea {...register("comment", { required: true })}  placeholder="Write your comment" type="text" /> <br /> <br />

                    <input {...register("rate", { required: true })}  placeholder="rate us within 0-5" type="number" /> <br /> <br />
                    
                    <input className="rating-btn" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default Review;