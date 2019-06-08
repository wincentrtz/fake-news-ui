import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import dashboardReducers from "./reducers/dashboard-reducers";

const rootReducer = combineReducers({
  form: formReducer,
  dashboardReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
