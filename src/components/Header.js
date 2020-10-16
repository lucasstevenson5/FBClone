import React from 'react';

import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <header>
                 <h1>FB Clone</h1>
                 {props.loggedIn ? 
                    <button onClick={props.logout}>Logout</button> 
                    : 
                    <Link to="/login">Login</Link>}
                
            </header>
        </div>
    )
}

export default Header;