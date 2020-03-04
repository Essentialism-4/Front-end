import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";


const Value = ({ className, id, goToNextCard }) => {
  const [userValues, setUserValues] = useState([]);
  const [yes, setYes] = useState(null);


  const values = JSON.parse(localStorage.getItem("values"));
  const localUsersList = JSON.parse(localStorage.getItem("usersValues"))

  const handleClick = (clickedId, clickedName) => e => {
    e.preventDefault();
    const assigned = Object.assign({id: clickedId, name: clickedName})
    console.log(assigned)
    console.log(localUsersList)
    // setYes(e.target.value)
    // localUsersList.append()

      // return val.id === id && dispatch(confirmTopTempList(val));'
  };

  const handleNo = () => {
      console.log(id)
    let no = values.filter(val => {
      return val.id === id;
    });

    console.log(no)

  };

  return (
    <section className={className}>
      <article>
        <div className="card-info">
          {values.map(value => {
            return (
              <div key = {value.id} >
                <h4>do you value</h4>
                <p onClick = {handleClick(value.id, value.name)}>{value.name}?</p>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Value;
