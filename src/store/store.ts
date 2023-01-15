import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { searchLocationReducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  searchLocationReducer,
  applyMiddleware(sagaMiddleware)
);
