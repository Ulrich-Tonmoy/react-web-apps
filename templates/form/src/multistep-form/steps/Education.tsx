/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../forms";

const Education = forwardRef((props, ref) => {
  const [state, setState] = useAppState() as any;
  const { handleSubmit, register } = useForm({ defaultValues: state });

  const saveData = (data: any) => {
    setState({ ...state, ...data });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} nextStep={"/about"}>
      <fieldset>
        <legend>Education</legend>
        <Field label="University">
          <Input {...register("university")} id="university" />
        </Field>
        <Field label="Degree">
          <Input {...register("degree")} id="degree" />
        </Field>
        <div className="button-row">
          <Link className={`btn btn-secondary`} to="/">
            {"<"} Previous
          </Link>
          <Button ref={ref}>Next {">"}</Button>
        </div>
      </fieldset>
    </Form>
  );
});

export default Education;
