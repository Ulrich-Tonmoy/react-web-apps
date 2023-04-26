/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useImperativeHandle, useRef } from "react";

const Button = forwardRef(({ children, variant = "primary", ...props }: any, ref) => {
  const buttonRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    click: () => {
      buttonRef.current?.click();
    },
  }));

  return (
    <button className={`btn btn-${variant}`} {...props} ref={buttonRef}>
      {children}
    </button>
  );
});

export default Button;
