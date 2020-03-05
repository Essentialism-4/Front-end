import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const UserValues = () => {
  const [topChoice, setTopChoice] = useState([]);
  const [reason, setReason] = useState("");
  const [reasons, setReasons] = useState([]);
  const [userProfile, setUserProfile] = useState([]);

  const values = localStorage.getItem("userValues");
  const parsedValues = JSON.parse(values);
  const dispatch = useDispatch();

  const handleTopChoiceClick = (clickedId, clickedName) => e => {
    e.stopPropagation();
    const assigned = Object.assign({ id: clickedId, name: clickedName });
    if (topChoice.length <= 2) {
      setTopChoice([...topChoice, assigned]);
    }
    console.log(topChoice);
    return topChoice;
  };

  const handleTopChoiceClear = e => {
    e.preventDefault();
    setTopChoice([]);
  };

  const handleChanges = e => {
    e.preventDefault();
    setReason(e.target.value);
  };

  const handleConfirm = e => {
    e.preventDefault();

    console.log("this is reasons", reasons);
    // setUserProfile([...topChoice, ...reasons])
  };

  const handleSubmit = e => {
    e.preventDefault();
    setReasons([...reasons, reason]);
  };

  useEffect(() => {
    console.log(userProfile);
  });

  return (
    <div className="card-info">
      <h3>Choose your top 3</h3>
      {/* MAPPING OVER VALUES ORIGINALLY CHOSEN FROM VALUE LIST */}
      {parsedValues.map(value => (
        <div onClick={handleTopChoiceClick(value.id, value.name)}>
          <p>{value.name}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <div>
          <button onClick={handleTopChoiceClear}>Clear</button>
        </div>
        {/* MAPPING OVER USERS TOP 3 */}
        {topChoice.map(value => (
          <div key={value.id}>
            <p>{value.name}</p>
            <input
              name="reasons"
              type="text"
              placeholder="Explain why you chose this value"
              onChange={handleChanges}
            />
            
          </div>
        ))}
        <button type="submit">Save</button>
      </form>
      <div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default UserValues;
