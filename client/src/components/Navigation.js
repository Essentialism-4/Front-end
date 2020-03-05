import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation(props) {
    return (
        //Issac's code
        // <div>
        //     <Link to='/register'>
        //         <button> Register </button>
        //     </Link>
        //     <Link to='/'>
        //         <button> Login</button>
        //     </Link>
        //     <button onClick = {props.logout}>Logout</button>
        //     <Link to = '/select-values'>
        //         <button>Selection</button>
        //     </Link>
        // </div>



        //fernando's code, can be deleted 
        <div>
        <button onClick = {props.logout}>Logout</button>
        <Link to = '/select-values'>
            <button>Selection</button>
        </Link>
    </div>
    )
}