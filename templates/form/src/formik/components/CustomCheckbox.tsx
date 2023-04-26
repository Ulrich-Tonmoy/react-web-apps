/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from "formik";

const CustomCheckbox = ({ ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="f-checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error f-input" : "f-input"}
        />
        <span>I accept the terms of service</span>
      </div>

      {meta.touched && meta.error && <div className="f-error">{meta.error}</div>}
    </>
  );
};
export default CustomCheckbox;
