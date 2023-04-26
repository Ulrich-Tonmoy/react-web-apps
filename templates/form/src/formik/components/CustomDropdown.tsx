/* eslint-disable @typescript-eslint/no-explicit-any */
import { useField } from "formik";

const CustomDropdown = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error f-input" : "f-input"}
      />
      {meta.touched && meta.error && <div className="f-error">{meta.error}</div>}
    </>
  );
};
export default CustomDropdown;
