import "./App.css";
import Addtask from "./components/Addtask";
import TaskList from "./components/TaskList";
import { TasksProvider } from "./components/TaskContext";

export default function App() {
  return (
    <>
      <TasksProvider>
        <h1>To do List</h1>
        <Addtask />
        <TaskList />
      </TasksProvider>
    </>
  );
}
