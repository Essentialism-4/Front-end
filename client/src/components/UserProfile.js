import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { putUserValues } from "../store/actions/userValueActions";
import { putUserInvolvement } from "../store/actions/userValueActions";

const UserProfile = () => {
  const [userInput, setUserInput] = useState("");
  const [involvment, setInvolvment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();

  const top3 = localStorage.getItem("top3");
  const values = JSON.parse(top3);

  const handleChanges = e => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleInvolvment = e => {
    e.preventDefault();
    setInvolvment(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(putUserValues(Object.assign({ prompt: userInput })));
    dispatch(putUserInvolvement(Object.assign({ prompt: involvment })));
    setIsEditing(true);
  };

  const handleEdit = e => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div>
      <div>
        {values.map(value => {
          return (
            <>
              <p key={value.id}>{value.name}</p>
            </>
          );
        })}
      </div>
      <div>
        {isEditing ? (
          <>
            <p>{userInput}</p>
            <p>{involvment}</p>
            <button onClick={handleEdit}>Edit</button>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              name="reason"
              type="text"
              onChange={handleChanges}
              placeholder="Explain your reason for choosing this value."
            />
            <input
              name="involvment"
              type="text"
              onChange={handleInvolvment}
              placeholder="What are some things you've involved yourself in that tie in with your values."
            />
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
