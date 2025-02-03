import { combineReducers, createStore } from "redux";
import counter from "../modules/counter";

// 1) rootReducer를 만들거에요
const rootReducer = combineReducers({
  counter,
})

// 2) store를 조합할거에요
const store = createStore(rootReducer);

// 3) 만든 sotre를 내보낼거에요
export default store