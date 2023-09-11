import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.js";
import thunkMiddleware from "redux-thunk";

const composed = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composed(applyMiddleware(thunkMiddleware))
)

export default store;