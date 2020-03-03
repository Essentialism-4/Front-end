import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <Link to='/registration'>
                <button> Register </button>
            </Link>
            <Link to='/login'>
                <button> Login</button>
            </Link>
        </div>
    )
}