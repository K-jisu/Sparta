import { useSelector } from "react-redux";
import "./App.css";
import AddForm from "./components/AddForm";
import TodoList from "./components/TodoList";

function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <>
      <AddForm />
      <TodoList />
    </>
  );
}

export default App;
