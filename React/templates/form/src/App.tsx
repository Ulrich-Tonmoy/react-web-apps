/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AppProvider } from "./multistep-form/state";
import { Contact, Education, About, Confirm, Stepper } from "./multistep-form/steps";
import "./App.scss";
import { useLocation } from "react-router-dom";
import BasicForm from "./basic/BasicForm";
import Formik from "./formik/Formik";

const App = () => {
  const location = useLocation();

  const buttonRef = useRef<any>();

  const onStepChange = () => {
    buttonRef.current?.click();
  };

  switch (location.pathname) {
    case "/":
      document.title = "Basic Form";
      break;
    case "/formik":
      document.title = "Formik Form";
      break;
    default:
      document.title = "MultiStep Form";
      break;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <Link className="navbar-brand" to="/">
          <img
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Bootstrap
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Basic
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/formik">
                Formik
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/multi">
                Multi
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="App">
        <AppProvider>
          {location.pathname === "/" || location.pathname === "/formik" ? (
            <></>
          ) : (
            <Stepper onStepChange={onStepChange} />
          )}
          <Routes>
            <Route path="/" element={<BasicForm />} />
            <Route path="/formik" element={<Formik />} />
            <Route path="/multi" element={<Contact ref={buttonRef} />} />
            <Route path="/education" element={<Education ref={buttonRef} />} />
            <Route path="/about" element={<About ref={buttonRef} />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </AppProvider>
      </div>
    </>
  );
};
export default App;
