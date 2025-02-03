import "./App.css";
import AddData from "./components/AddData";
import DeleteData from "./components/DeleteData";
import FetchData from "./components/FetchData";
import UpdateData from "./components/UpdateData";

function App() {
  return (
    <>
      <h1>Supabase</h1>
      <DeleteData />
      <FetchData />
      <UpdateData />
      <AddData />
    </>
  );
}

export default App;
