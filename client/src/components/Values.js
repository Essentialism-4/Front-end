import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import history from "../history";

import { postUserValues } from "../store/actions/userValueActions";

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
      <div
        className="card-info"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {values.map(value => {
          return (
            <div key={value.id}>
              <h4>do you value</h4>
              <p onClick={handleClick(value.id, value.name)}>{value.name}?</p>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </>
  );
};

export default Value;
