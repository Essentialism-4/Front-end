import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginReducer";
import valuesReducer from "./valuesReducer";
import userValuesReducer from "./userValuesReducer";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  login: loginReducer,
  values: valuesReducer,
  userValues: userValuesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;