import { useState } from "react";
import { BasicForm, AdvanceForm } from "./components";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="App">
      <nav>
        <h3 onClick={() => setView("basic")} style={{ color: view === "basic" ? "#fff" : "" }}>
          Basic
        </h3>
        <h3 onClick={() => setView("advance")} style={{ color: view === "advance" ? "#fff" : "" }}>
          Advance
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvanceForm />}
    </div>
  );
}

export default App;
