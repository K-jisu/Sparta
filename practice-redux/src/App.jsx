import { useDispatch, useSelector } from "react-redux";
// import { addNumber, removeNumber } from "./redux/modules/counter";
import "./App.css";
import { useState } from "react";
import { addNumber, removeNumber } from "./redux/slices/counterSlice";

function App() {
  const [count, setCount] = useState(0);
  const counterReducer = useSelector((state) => state.counter);
  console.log(counterReducer);
  const dispatch = useDispatch();
  return (
    <>
      {counterReducer.number}
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addNumber(count));
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          dispatch(removeNumber(count));
        }}
      >
        빼기
      </button>
    </>
  );
}

export default App;
