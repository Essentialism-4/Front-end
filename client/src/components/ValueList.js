import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import history from "../history";

import Value from "./Values";

function ValuesList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [endOfList, setEndOfList] = useState(null);
  const [narrowDown, setNarrowDown] = useState(true);

  const localValues = JSON.parse(localStorage.getItem("values"));
  // const usersList = useSelector(state => state.values.usersList);

  const goToNextCard = (props) => {
    let index = activeIndex;
    let slidesLength = localValues.length - 1;
    if (index === slidesLength) {
      usersList.length > 2 && setNarrowDown(false);
      setEndOfList(true);
      history.push(`/select-values/values-confirmation`);
    }
    ++index;
    setActiveIndex(index);
  };

  return (
    <div>
      <Value goToNextCard = {goToNextCard} activeIndex = {activeIndex} endOfList = {endOfList}/>
    </div>
  );
}

export default ValuesList;
