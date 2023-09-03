import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.js";
import thunkMiddleware from "redux-thunk";

const composed = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    reducer,
    composed(applyMiddleware(thunkMiddleware))
)

export default store;