import React from 'react';
import { Link } from 'react-router-dom';

const LogoLink = () => {
    return (
        <Link to='/' style={{ textDecoration: 'none' }}>
            <h3><span role="img" aria-label="Lollipop">🍭</span></h3>
        </Link>
    )
}

export default LogoLink