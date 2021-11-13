import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navigation from '../../Pages/Shared/Navigation/Navigation';
import './PlaceOrder.css';


const PlaceOrder = () => {

    const [orderItem, setOrderItem] = useState({});

    const { register, handleSubmit, reset } = useForm();
    const { user } = UseAuth();
    const history = useHistory();
    const { orderItemId } = useParams();
    useEffect(() => {
        fetch(`https://salty-everglades-52224.herokuapp.com/placeOrder/${orderItemId}`)
            .then(res => res.json())
            .then(data => setOrderItem(data));
    }, [orderItemId]);

    const onSubmit = (data) => {
        data.status = "pending";
        fetch('https://salty-everglades-52224.herokuapp.com/allOrder', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(' order successful')
                    reset();
                    history.push('/dashboard/myOrder')
                }
            })
        
    }

    return (
        <div>
            <Navigation/>
            <div className="place-order-section">
                <div>
                    <div className="place-order-item">
                        <div className="order-img">
                            <img src={orderItem?.img} alt="" />  
                        </div>
                        <div className="product-text">
                            <h3>{orderItem?.name}</h3>
                            <p>{orderItem?.description}</p>
                            <h4>Price: {orderItem.price}</h4>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div className="place-order-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <input  {...register("name", { required: true })} defaultValue={user.displayName} />
                            <br /> <br />
                            
                            <input readOnly {...register("productName", { required: true })} defaultValue={orderItem.name} />
                            <br /> <br />

                            <input  {...register("quantity", { required: true })} placeholder="quantity" type="number" />
                            <br /> <br />
                            
                            <input  {...register("address", { required: true })} placeholder="your address" />
                            <br /> <br />

                            <input  {...register("date", { required: true })} defaultValue={new Date().toLocaleDateString()} />
                            <br /> <br />
                            
                            <input className="place-order-btn" type="submit" value="place order" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PlaceOrder;