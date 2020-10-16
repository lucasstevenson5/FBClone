import React from 'react';

import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <header>
                 <h1>FB Clone</h1>
                <Link to="/login">Login</Link>
            </header>
        </div>
    )
}

export default Header;