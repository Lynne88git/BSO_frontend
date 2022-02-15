import Routing from "./routes/Routing";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routing>
        <Login />
      </Routing>
    </div>
  );
}

export default App;
