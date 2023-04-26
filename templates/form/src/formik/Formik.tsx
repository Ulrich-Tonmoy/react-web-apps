import "./Formik.scss";
import { useState } from "react";
import { BasicForm, AdvanceForm } from "./components";

const Formik = () => {
  const [view, setView] = useState("basic");

  return (
    <div className="f-App">
      <nav className="f-nav">
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
};

export default Formik;
