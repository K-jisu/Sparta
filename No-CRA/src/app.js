const App = () => {
  return <h1>{apiUrl}</h1>;
};

const apiUrl = process.env.APP_API_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
