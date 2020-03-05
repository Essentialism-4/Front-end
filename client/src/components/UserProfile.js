import React, { useState, useEffect } from "react";

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
      <form>
        {values.map(value => {
          return (
            <>
              <p key={value.id}>{value.name}</p>
            </>
          );
        })}
        <input
          name= 'reason'
          type="text"
          onChange={handleChanges}
          placeholder="Explain your reason for choosing this value."
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default UserProfile;
