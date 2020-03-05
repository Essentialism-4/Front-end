import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import axios from 'axios';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom'
import history from '../history';

import { register } from '../store/actions/loginActions';

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

let Registration = ({ values, isSubmitting, isValidating, errors, touched, postUser }) => {
    let [newRegistration, setNewRegistration] = useState([]);
    const dispatch = useDispatch();

    const handleClick = async() => {
        try {
            await dispatch(
              register({ username: values.username, password: values.password })
            );
            history.push("/");
          } catch (err) {
            console.log(err);
          }
    }

    // const setUser = e => {
    //     e.preventDefault()
    //     props.register(newRegistration);
    // }

    // useEffect (() => {
    //     status&&setNewRegistration (newRegistration => [...newRegistration, status])
    // }, [status]);

    console.log(newRegistration)
    console.log(values)
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
                
                <button type='submit' onClick = {handleClick} disabled = {isSubmitting}>Sign Up</button>
                <p>Already have an account?<Link to = '/' disabled = {isSubmitting}>Sign in Here</Link></p>

                {/* <label htmlFor='email'>E-mail: </label>
                <Field id='email' type='email' name='email' placeholder='Enter Email'/> */}
            </StyleForm>
            
        </Container>
    )
}

export default withFormik({  
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || '',
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username Field Required!'),
        password: Yup.string().required('Password Field Required!'),
    }),

    handleSubmit:(values, { resetForm }) => {
        resetForm();
    }
})(connect(null, { register })(Registration));

// export default FormikRegistration

// const SignUpForm = props => {
//     // console.log("this is props in Signupform", props);
//     const initialState = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: ""
//     };
  
//     const [payload, setPayload] = useState(initialState);
  
//     const changeHandler = e => {
//       setPayload({ ...payload, [e.target.name]: e.target.value }); // setting change handler to the "name" attribute. Avoids having to add handler to each input
//     };
  
//     const submitHandler = e => {
//       e.preventDefault();
//       console.log("this is the object", payload);
//       props.register(payload);
//       setPayload({
//         firstName: "",
//         lastName: "",
//         password: ""
//       });
//       props.history.push("/select-values");
//     };
//     return (
//       <div>
//         <form className="form" onSubmit={submitHandler}>
//             <div>
//               <label>
//                 <input
//                   className="input"
    
//                   type="text"
//                   name="firstName"
//                   value={payload.firstName}
//                   onChange={changeHandler}
//                   placeholder="Enter First Name here"
//                 />
//               </label>
//             </div>
  
//           <div>
//             <label>
//               <input
//                 className="input"

//                 type="text"
//                 name="password"
//                 value={payload.password}
//                 onChange={changeHandler}
//                 placeholder="Enter Password here"
//               />
//             </label>
//           </div>
  
//           <div>
//               <button type="submit">Sign-Up!</button>
//               <p>Already have an account with us? <Link to = '/'>Click Here</Link></p>
//           </div>
//         </form>
//       </div>
//     );
//   };
  

