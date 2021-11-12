import { CircularProgress, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './Registration.css';

const Registration = () => {
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory()
    const {  registerUser, isLoading } = UseAuth();

    const onSubmit = data => {
        registerUser(data.name, data.email, data.password, history)

        reset();

    };
    return (
        <div>
            <Navigation/>
            <div className="registration-section">
                <div className="registration-header-text">
                    <h1>Please Register</h1>
                </div>
                <div className="registration-form">
                    <div className="registration-main-form">
                        { !isLoading && <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <TextField {...register("name", { required: true })} label="name" variant="standard" placeholder="your name" type="text" /> <br /> <br />
                            
                            <TextField {...register("email", { required: true })} label="email" variant="standard" placeholder="your email" type="email" /> <br /> <br />

                            <TextField {...register("password", { required: true })} label="password" variant="standard" placeholder="your password" type="password" /> <br /> <br />
                            
                            <input className="login-btn" type="submit" />
                            <p>have an account? <Link to="/login">login</Link></p>

                        </form>}
                        {isLoading && <CircularProgress />}
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Registration;