import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { putValues } from "../store/actions/valuesActions";

const UserValues = () => {
  const [topChoice, setTopChoice] = useState([]);
  const [eachChoice, setEachChoice] = useState("");
  const [reason, setReason] = useState("");
  const [reasons, setReasons] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  const values = localStorage.getItem("userValues");
  const parsedValues = JSON.parse(values);
  const dispatch = useDispatch();

  const handleTopChoiceClick = (clickedId, clickedName) => e => {
    e.stopPropagation();
    const assigned = Object.assign({ id: clickedId, name: clickedName });
    if (topChoice.length <= 3 - 1) {
      setTopChoice([...topChoice, assigned]);
      setEachChoice([...eachChoice, clickedName])  
      
      // dispatch(putValues(clickedName));
    }
   
  
    
    return topChoice;
  };

  const handleTopChoiceClear = e => {
    e.preventDefault();
    setTopChoice([]);
    const top3assigned = Object.assign({ top3_values: topChoice})
    dispatch(putValues(top3assigned))
  };

  const handleConfirm = e => {
    e.preventDefault(); 
    //DISPATCH TO USER PROFULE GOES HERE
    const top3assigned = Object.assign({ top3_values: topChoice})
    localStorage.setItem('top3', JSON.stringify(topChoice))
    dispatch(putValues(top3assigned));
    // setUserProfile([...topChoice, ...reasons])
    // history.push('/user-profile')
  };

  // useEffect(() => {
  //   console.log(userProfile);
  // });

  return (
    <div className="card-info">
      <h3>Choose your top 3</h3>
      {/* MAPPING OVER VALUES ORIGINALLY CHOSEN FROM VALUE LIST */}
      {parsedValues.map(value => (
        <div onClick={handleTopChoiceClick(value.id, value.name)}>
          <p>{value.name}</p>
        </div>
      ))}

      <div>
        <button onClick={handleTopChoiceClear}>Clear</button>
      </div>
      {/* MAPPING OVER USERS TOP 3 */}
      {topChoice.map(value => (
        <div key={value.id}>
          <p>{value.name}</p>
        </div>
      ))}

      <div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default UserValues;
