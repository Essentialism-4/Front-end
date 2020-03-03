import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom'
// import styled from 'styled-components';


let Login = ({ values, status, errors, touched }) => {
    // let [userData, setUserData] = useState([])

    // console.log(userData)

    // useEffect (() => {
    //     status&&setUserData (userData => [...userData, status])
    // }, [status]);

    return (
        <div>
            <Form>
                <label htmlFor='username'>Username: </label>
                <Field id='username' type='text' name='username' placeholder='Enter Username' value={values.username}/>
                {touched.username && errors.username && ( <p>{errors.username}</p>)}
                
                <label htmlFor='password'>Password: </label>
                <Field id='password' type='password' name='password' placeholder='Enter Password' value={values.password}/>
                {touched.password && errors.password && ( <p>{errors.password}</p>)}

                <button type='submit'>Login</button>
                <p>Don't have an account? <Link to = '/register'>Click Here</Link></p>
            </Form>
        </div>
    )
}

let FormikLogin = withFormik({
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

    handleSubmit(values, {setStatus, resetForm, props}){
        axios
          .post("https://essentialism4-backend.herokuapp.com/api/auth/login", values)
          .then(res => {
            console.log(res)
            setStatus(res.data);
            localStorage.setItem('token', res.data.credentials.token);
            props.history.push('/user-profile');
            resetForm();
          })
          .catch(err => console.log(err));
    }
})(Login);

export default FormikLogin;