import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch('https://salty-everglades-52224.herokuapp.com/addProduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(' added successfully')
                    reset();
                }
            })
        
    };

    return (
        <div className="add-product-form">
            <div className="add-product-title">
                <h1>Add A New Service</h1>
            </div>
            <div className="form-field-style">
                <div className="form-style">
                    <form onSubmit={handleSubmit(onSubmit)}>
                       
                        <input  {...register("name", { required: true })} placeholder="product name" className="input-style" />
                        <br /> <br />
                        
                        <input  {...register("price", { required: true })} placeholder="price" />
                        <br /> <br />
                        
                        <input  {...register("img", { required: true })} placeholder="photo url" />
                        <br /> <br />

                        <textarea  {...register("description", { required: true })} placeholder="service description" />
                        <br /> <br />
                        
                        <input className="submit-btn" type="submit" value="Add" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default AddProduct;



// check by these info
// {
//     name: 'XM25 CDTE',
//     price: '$2500',
//     img: 'https://i.ibb.co/567ZcCB/gun12.jpg',
//     description: 'The XM25 Counter Defilade Target Engagement (CDTE) System, also known as the Punisher and Individual Semiautomatic Air Burst System was an airburst grenade'
// },