/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form } from "../forms";

const About = forwardRef((props, ref) => {
  const [state, setState] = useAppState() as any;
  const { handleSubmit, register } = useForm({ defaultValues: state });

  const saveData = (data: any) => {
    setState({ ...state, ...data });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} nextStep={"/confirm"}>
      <fieldset>
        <legend>About</legend>
        <Field label="About me">
          <textarea {...register("about")} id="about" className="form-control" />
        </Field>
        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/education">
            {"<"} Previous
          </Link>
          <Button ref={ref}>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
});

export default About;
