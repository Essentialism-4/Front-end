import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import history from "../history";

import { postUserValues } from "../store/actions/userValueActions";

import styled from 'styled-components';

// ********************** STYLED COMPONENTS ***********************************
let Body = styled.body`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
`;

let SubTitle = styled.h4`
font-size: 2rem;
font-weight: 200;
color: rgba(255, 255, 255, 0.75);
border: 2px solid rgba(255, 255, 255, 0.2);
padding: 10px;
background-color: rgba(0, 0, 0, 0.1);
box-shadow: 0 0 3px 2px rgb(0, 0, 0, .5);
`;

let ValuesContainer = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
justify-content: center;
border: 2px solid rgba(255, 255, 255, 0.2);
width: 75%;

&:hover{
  border: 2px solid rgba(255, 255, 255, 0.4);
}
`;

let Values = styled.div`
color: rgba(255, 255, 255, 0.75);
border: 2px solid rgba(255, 255, 255, 0.2);
padding: 0 2%;
margin: 1%;

`;
// ********************** STYLED COMPONENTS END********************************

const Value = () => {
  const [userValues, setUserValues] = useState([]);
  const [userSelected, setUserSelected] = useState([]);

  const dispatch = useDispatch();

  const values = JSON.parse(localStorage.getItem("values"));

  const handleClick = (clickedId, clickedName) => e => {
    e.preventDefault();
    const assigned = Object.assign({ user_id: 1, name: clickedName });
    const userAssigned = Object.assign({ id: clickedId, name: clickedName });
    console.log(assigned);
    setUserValues([...userValues, assigned]);
    setUserSelected([...userSelected, userAssigned]);
  };

  const handleConfirm = e => {
    e.preventDefault();
    userValues.map(value => {
      dispatch(postUserValues(value));
    });
    localStorage.setItem("userValues", JSON.stringify(userSelected));
    history.push("/user-values");
  };

  return (
    <>
      <Body className='values-pg-container'>
        <SubTitle>Select your values</SubTitle>
        <ValuesContainer
          className="card-info">
          {values.map(value => {
            return (
              <Values key={value.id}>
                <p onClick={handleClick(value.id, value.name)}>{value.name}?</p>
                {console.log(value)}
              </Values>
            );
          })}
        </ValuesContainer>
        <div>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </Body>
    </>
  );
};

export default Value;
