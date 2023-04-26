/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { FC, FormHTMLAttributes } from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  nextStep?: string;
}

const Form: FC<Props> = ({ children, onSubmit, nextStep, ...props }: any) => {
  const navigate = useNavigate();

  const onSubmitCustom = (e: any) => {
    e.preventDefault();
    onSubmit();
    navigate(nextStep);
  };

  return (
    <form className="row" onSubmit={onSubmitCustom} {...props} noValidate>
      {children}
    </form>
  );
};

export default Form;
