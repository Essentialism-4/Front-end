import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

import Navigation from "./Navigation";
import Value from "./Values";
import UserValues from "./UserValues";

import { logout } from "../store/actions/loginActions";
import { getValues } from "../store/actions/valuesActions";

const ValueList = () => {
  const dispatch = useDispatch();

  const values = useSelector(state => state.values)

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    console.log('This is values from value list', values)
  }, []);

  return (
    <div>
      <Navigation logout={handleLogout} />
      <Value />
    </div>
  );
};

export default ValueList;
