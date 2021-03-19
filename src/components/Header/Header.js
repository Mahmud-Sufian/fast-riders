import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    // const handleSignIn = () => {

    // }
    return (
        <div>
            <nav>
            <h2>Fast Riders</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>  
                <li><Link to="/destination/">Destination</Link></li>
                {/* <li><Link to="/home">Destination</Link></li>  */}
                <li style={{color:'#fff'}}>{loggedInUser.name}</li> 
                <li><Link to="/login"><button class="btn btn-primary" onClick={() => setLoggedInUser({})}>{loggedInUser.email ? 'Sign Out' : 'Sign In'}</button></Link></li> 
            </ul>
            </nav> 
        </div>
    );
};

export default Header;