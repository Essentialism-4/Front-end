import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation(props) {
    return (
        <div>
            <Link to='/register'>
                <button> Register </button>
            </Link>
            <Link to='/'>
                <button> Login</button>
            </Link>
            <button onClick = {props.logout}>Logout</button>
            <Link to = '/select-values'>
                <button>Selection</button>
            </Link>
        </div>
    )
}