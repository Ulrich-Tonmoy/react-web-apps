/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppState } from "../state";

const StepState = ({ showWarning, showSuccess }: any) => {
  if (showWarning) {
    return <span className={"warning-sign"}>!</span>;
  } else if (showSuccess) {
    return (
      <div className="checkmark">
        <div className="circle"></div>
        <div className="stem"></div>
        <div className="tick"></div>
      </div>
    );
  } else {
    return null;
  }
};

const Stepper = ({ onStepChange }: any) => {
  const [state] = useAppState() as any;
  const location = useLocation();
  const [steps, setSteps] = useState<any>([]);

  useEffect(() => {
    setSteps((steps: any) => [...steps, location.pathname]);
  }, [location]);

  const getLinkClass = ({ isActive }: any) => `nav-link ${isActive ? "active" : undefined}`;

  const contactInfoMissing = !state.firstName || !state.email || !state.password;

  const isVisited = (step: any) => steps.includes(step) && location.pathname !== step;

  const navLinks = [
    {
      url: "/multi",
      name: "Contact",
      state: {
        showWarning: isVisited("/") && contactInfoMissing,
        showSuccess: isVisited("/") && !contactInfoMissing,
      },
    },
    {
      url: "/education",
      name: "Education",
      state: {
        showSuccess: isVisited("/education"),
      },
    },
    {
      url: "/about",
      name: "About",
      state: {
        showSuccess: isVisited("/about"),
      },
    },
    {
      url: "/confirm",
      name: "Confirm",
      state: {},
    },
  ];

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ol className="navbar-nav">
          {navLinks.map(({ url, name, state }) => {
            return (
              <li className="step nav-item" key={url}>
                <StepState showWarning={state.showWarning} showSuccess={state.showSuccess} />
                <NavLink end to={url} className={getLinkClass} onClick={onStepChange}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Stepper;
