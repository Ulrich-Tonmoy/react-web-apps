import { FC } from "react";
import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className="form-control" {...props} />;
});

export default Input;
