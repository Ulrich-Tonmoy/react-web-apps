/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../forms";

const Contact = forwardRef((props, ref) => {
  const [state, setState] = useAppState() as any;
  const { handleSubmit, register } = useForm({
    defaultValues: state,
    mode: "onSubmit",
  });

  const saveData = (data: any) => {
    setState({ ...state, ...data });
  };

  return (
    <Form onSubmit={handleSubmit(saveData)} nextStep={"/education"}>
      <fieldset>
        <legend>Contact</legend>
        <Field label="First name">
          <Input {...register("firstName")} id="first-name" />
        </Field>
        <Field label="Last name">
          <Input {...register("lastName")} id="last-name" />
        </Field>
        <Field label="Email">
          <Input {...register("email")} type="email" id="email" />
        </Field>
        <Field label="Password">
          <Input {...register("password")} type="password" id="password" />
        </Field>
        <Button ref={ref}>Next {">"}</Button>
      </fieldset>
    </Form>
  );
});
export default Contact;
