import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components';

let Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

let StyleForm = styled(Form)`
display: flex;
flex-direction: column;
width: 50%;
`;

let Registration = ({ values, status, errors, touched }) => {
    // let [newRegistration, setNewRegistration] = useState([]);

    // useEffect (() => {
    //     status&&setNewRegistration (newRegistration => [...newRegistration, status])
    // }, [status]);
    // console.log(newRegistration)
    // console.log(status)
    // console.log(values)
    return (
        <Container className='Form-Container'>
            <StyleForm>
                {/* <label htmlFor='name'>Name: </label>
                <Field id='name' type='text' name='name' placeholder='Enter Name' value={values.name}/> */}
                
                <label htmlFor='username'>Username: </label>
                <Field id='username' type='text' name='username' placeholder='Create Username' value={values.username}/>
                {touched.username && errors.username && ( <p>{errors.username}</p>)}

                <label htmlFor='password'>Password: </label>
                <Field id='password' type='password' name='password' placeholder='Create Password' value={values.password}/>
                {touched.password && errors.password && ( <p>{errors.password}</p>)}
                
                <button type='submit'>Submit</button>
                <p>Already have an account?<Link to = '/'>Sign in Here</Link></p>

                {/* <label htmlFor='email'>E-mail: </label>
                <Field id='email' type='email' name='email' placeholder='Enter Email'/> */}
            </StyleForm>
            
        </Container>
    )
}

let FormikRegistration = withFormik({
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
        axios.post('https://essentialism4-backend.herokuapp.com/api/auth/register', values)
        .then(res => {
            setStatus(res.data);
            props.history.push('/select-values');
            resetForm();
        })
        .catch(err => {
            console.log('error submitting', err)
        })
    }
})(Registration);

export default FormikRegistration;