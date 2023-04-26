/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, Children, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface FieldProps {
  children: ReactNode;
  label: string;
  error?: FieldError;
}

// Get id prop from a child element
const getChildId = (children: any) => {
  const child = Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};

const Field: FC<FieldProps> = ({ children, label, error }) => {
  const id = getChildId(children);

  return (
    <div className="col-sm-12 mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};

export default Field;
