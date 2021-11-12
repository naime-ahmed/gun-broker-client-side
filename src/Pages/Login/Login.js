import {  TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, reset,  } = useForm();

    const location = useLocation();
    const history = useHistory()

    const { loginUser } = UseAuth();

    const onSubmit = data => {
        loginUser(data.email, data.password, location, history);
        reset();

    };
    return (
        <div>
            <Navigation/>
            <div className="login-section">
                <div className="login-header-text">
                    <h1>Please Login</h1>
                </div>
                <div className="login-form">
                    <div className="main-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <TextField {...register("email", { required: true })} label="email" variant="standard" placeholder="your email" type="email" /> <br /> <br />
                            
                            <TextField {...register("password", { required: true })} label="password" variant="standard" placeholder="your password" type="password" /> <br /> <br />
                            
                            <input className="login-btn" type="submit" />
                            <p>new here? <Link to="/register">please register</Link></p>

                        </form>
                        
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;