import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import Navigation from "./Navigation";
import Value from "./Values";
import UserValues from "./UserValues";

import { logout } from "../store/actions/loginActions";
import { getValues } from "../store/actions/valuesActions";

const ValueList = () => {
  const dispatch = useDispatch();

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getValues());
  }, []);

  return (
    <div>
      <Navigation logout={handleLogout} />
      <Value />
    </div>
  );
};

export default ValueList;
