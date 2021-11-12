import './Navigation.css';
import logo from '../../../images/red-gun-logo.png'
import { Link } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const Navigation = () => {

    const { user, logOut } = UseAuth();

    const handleLogOut = () => {
        const confirmation = window.confirm("are sure you want to logOut??")
        if (confirmation) {
            logOut();
        }
    }

    return (
        <nav className="nav-style">
            <div className="logo">
            <img src={logo} alt="" />
            </div>
            <input type="checkbox" id="click"/>
            <label htmlFor="click" className="menu-btn">
            <i className="fas fa-bars"></i>
            </label>
            <ul>
            { user.email && <li> Welcome { user.displayName} </li>}
            <li><Link className="active " to="/home">Home</Link></li>
            { user.email && <li><Link  to="/dashboard">Dashboard</Link></li>}
            {/* <li><Link  to="/pay">Pay</Link></li> */}
            {/* { user.email && <li><Link to="/myOrder">My Orders</Link></li>}
           { user.email &&  <li><Link to="/review">Review</Link></li>} */}
            <li><Link to="/allProducts">All Products</Link></li>
            { user.email && <li><button onClick={handleLogOut} className="signOut-btn" >Logout</button></li>}
            { !user.email && <li><Link to="/login">Login</Link></li>}
            
            </ul>
        </nav>
    );
};

export default Navigation;