// import { combineReducers, createStore } from "redux";
// import todos from "../modules/todos";

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slices/todosSlice.js";

// const rootReducer = combineReducers({
//   todos,
// });

// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;
