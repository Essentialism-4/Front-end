import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom'
import history from '../history';

import { login } from '../store/actions/loginActions';
// import styled from 'styled-components';

//DOWN BELOW IS FERNANDOS MVP
let Login = ({ values, status, errors, touched, isSubmitting, login }) => {
    let [userData, setUserData] = useState({username: '', password: ''})

    const handleClick = () => {
        login(values).then(() => history.push('/select-values'))
    }

    console.log(userData)

    useEffect (() => {
        status&&setUserData (userData => [...userData, status])
    }, [status]);

    return (
        <div>
            <Form>
                <label htmlFor='username'>Username: </label>
                <Field id='username' type='text' name='username' placeholder='Enter Username' value={values.username}/>
                {touched.username && errors.username && ( <p>{errors.username}</p>)}
                
                <label htmlFor='password'>Password: </label>
                <Field id='password' type='password' name='password' placeholder='Enter Password' value={values.password}/>
                {touched.password && errors.password && ( <p>{errors.password}</p>)}

                <button type='submit' onClick = {handleClick} disabled = {isSubmitting}>Login</button>
                <p>Don't have an account? <Link to = '/register' disabled = {isSubmitting}>Click Here</Link></p>
            </Form>
        </div>
    )
}

export default withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username Field Required!'),
        password: Yup.string().required('Password Field Required!'),
    }),

    handleSubmit(values, { resetForm }){
            resetForm();
    }
})(connect(null, { login })(Login));

// export default FormikLogin;

// DOWN BELOW IS  FORM SIGN IN

// const SignInForm = (props) => {
//     const [credentials, setCredentials] = useState({
//       email: '',
//       password: '',
//     });
  
//     const handleChange = (event) => {
//       event.preventDefault();
      
//       setCredentials({
//         ...credentials,
//         [event.target.name]: event.target.value
//       })
//     }
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       props.login(credentials);
//       props.history.push('/user-profile')
//       setTimeout(() => {
//         props.history.push('/register');
//       }, 800)
//     }
  
//     return (
//         <form onSubmit={handleSubmit}>
//           <input
//             name='email'
//             type='text'
//             placeholder="Email"
//             value={credentials.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             name='password'
//             type='password'
//             placeholder="Password"
//             value={credentials.password}
//             onChange={handleChange}
//             required
//           />
//           <div>
//             <button type="submit">Log in</button>
//             <p>Don't have an account? <Link to = '/register'>Click Here</Link></p>
//           </div>
//         </form>
        
//     )
//   }
  
  
  