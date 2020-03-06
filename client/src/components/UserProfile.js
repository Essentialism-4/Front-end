import React, { useState, useEffect } from "react";
import Navigation from './Navigation';
import styled from 'styled-components';

// ********************** STYLED COMPONENTS ******************************************
let ValuesContaier = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
justify-content: center;
border: 2px solid rgba(255, 255, 255, 0.2);
width: 75%;
margin-top: 5%;
margin-bottom: 2%;
`;

let Values = styled.div`
color: rgba(255, 255, 255, 0.75);
border: 2px solid rgba(255, 255, 255, 0.2);
padding: 0 2%;
margin: 1%;
line-height: 25px;
font-weight: 400;
;
`;

let Body = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
width: 80%;
`;

let Input = styled.input`
font-weight: 300;
width: 50%;
border-radius: 7px;
padding: 7px 0;
font-size: 1.3rem;
text-align: center;
&:hover, :focus{
  box-shadow: 0 0 3px 2px rgb(0, 136, 255);
    outline: none;
}
`;

let Button = styled.button`
width: 123px;
height: 45px;
font-size: 1.1rem;
font-weight: 300;
background-color: rgba(0, 0, 0, 0.4);
border-color: rgba(255, 255, 255, 0.4)
rgba(121, 58, 87, 0.94);
color: rgba(255, 255, 255, 0.75);
margin: 35px;
&:hover{
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
    color: rgba(255, 255, 255, 1);
    text-shadow: 5px 5px 50px white, 0 0 25px blueviolet, 0 0 5px white;
}
`;
// ********************** STYLED COMPONENTS END***************************************

const UserProfile = () => {
  const [userInput, setUserInput] = useState({});

  const top3 = localStorage.getItem("top3");
  const values = JSON.parse(top3);

  const handleChanges = e => {
    e.preventDefault();
    let change = {}
    change[e.target.name] = e.target.value
    setUserInput(change);
  };

  useEffect(() => {
    console.log("This is values in USER PROFILE", values);
  }, []);

  return (
    <>
      <Body>
      <Navigation/>
        <ValuesContaier>
          {values.map(value => {
            return (
              <>
              <Values>
                <p key={value.id}>{value.name}</p>
              </Values>
              </>
            );
          })}
        </ValuesContaier>
        <Input
          name= 'reason'
          type="text"
          onChange={handleChanges}
          placeholder="Explain your reason for choosing this value."
        />
        <Button type="submit">Save</Button>
      </Body>
    </>
  );
};

export default UserProfile;
