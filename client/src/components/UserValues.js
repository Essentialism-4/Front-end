import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const UserValues = () => {
  const [topChoice, setTopChoice] = useState([])
  const values = localStorage.getItem("userValues");
  const parsedValues = JSON.parse(values);
  const dispatch = useDispatch();


  const handleTopChoiceClick = (clickedId, clickedName) => e => {
    e.stopPropagation()
    const assigned = Object.assign({ id: clickedId , name: clickedName });
    if(topChoice.length <=2){
    setTopChoice([...topChoice, assigned])
    }
    console.log(topChoice);
    return topChoice;
  };

  const handleTopChoiceClear = e => {
      e.preventDefault();
      setTopChoice([]);
  }

  return (
        <div className="card-info">
          <h3>Choose your top 3</h3>
          {
              parsedValues.map(value => (
                  <div onClick = {handleTopChoiceClick(value.id, value.name)}>
                    <p>{value.name}</p>
                  </div>
              ))
          }
          <div>
            <button onClick = {handleTopChoiceClear}>Clear</button>
          {
              topChoice.map(value => (
                  <div>
                      <p>{value.name}</p>
                  </div>                    
              ))
          }
          </div>
        </div>
  );
};

export default UserValues;
