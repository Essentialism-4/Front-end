import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import { store } from './store';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  rootElement
);
